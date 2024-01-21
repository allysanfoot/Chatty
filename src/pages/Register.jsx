import React, { useState } from "react";
import AddImage from "../img/add-profile.png";
import { auth, db, storage } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    // Prevents the page from refresponsehing when the form is submitted
    e.preventDefault();

    // Get the values from the form
    const username = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const image = e.target[3].files[0];

    try {
      // Create user
      const response = await createUserWithEmailAndPassword(auth, email, password);

      // Set image file name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${username + date}`);

      await uploadBytesResumable(storageRef, image).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            // Update profile
            await updateProfile(response.user, {
              displayName: username,
              photoURL: downloadURL,
            });
            // Create user on firesponsetore
            await setDoc(doc(db, "users", response.user.uid), {
              uid: response.user.uid,
              username,
              email,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, 'userChats', response.user.uid), {});
            console.log("User created successfully");
            setSuccessMessage("User created successfully");
            navigate("/");
          } catch (error) {
            setError(true);
            setErrorMessage(error.message);
          }
        });
      });
    } catch (error) {
      setError(true);
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chatty</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Username"></input>
          <input type="email" placeholder="E-mail"></input>
          <input type="password" placeholder="Password"></input>
          <input style={{ display: "none" }} type="file" id="file"></input>
          <label htmlFor="file" alt="">
            <img src={AddImage} className="addImage" alt="" />
            <span>Upload a profile image</span>
          </label>
          <button>Sign up</button>
          {error && <span className="error">{errorMessage}</span>}
          {successMessage && <span className="success">{successMessage}</span>}
        </form>
        <p>Already have an account? Log in <Link to='/login'>here</Link>.</p>
      </div>
    </div>
  );
};

export default Register;
