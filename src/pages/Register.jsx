import React, { useState } from "react";
import AddImage from "../img/add-profile.png";
import { auth, storage } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {
ref,
uploadBytesResumable,
getDownloadURL,
} from "firebase/storage";

const Register = () => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    // Prevents the page from refreshing when the form is submitted
    e.preventDefault();

    // Get the values from the form
    const username = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const image = e.target[3].files[0];

    // Create a new user
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
        );
        console.log(response.user);
        

      const storageRef = ref(storage, username + "/profile.jpg");

      const uploadTask = uploadBytesResumable(storageRef, image);

      uploadTask.on(
        
        (error) => {
          setError(true);
          setErrorMessage(error.message);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
          });
        }
      );
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
        </form>
        <p>Already have an account? Log in here.</p>
      </div>
    </div>
  );
};

export default Register;
