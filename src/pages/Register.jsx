import React, { useState } from 'react'
import AddImage from '../img/add-profile.png'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Register = () => {
  const [err, setErr] = useState(false);

  const handleSubmit = async (e) => {

    // Prevents the page from refreshing
    e.preventDefault()
    const displayName = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value
    const file = e.target[3 ].files[0]

    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      
    } catch (error) {
      setErr(true);
    }
  };

  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Chatty</span>
            <span className='title'>Register</span>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Username'></input>
                <input type='email' placeholder='E-mail'></input>
                <input type='password' placeholder='Password'></input>
                <input  style={{display:'none'}} type='file' id='file'></input>
                <label htmlFor='file' alt=''>
                  <img src={AddImage} className='addImage' alt=''/>
                  <span>Upload a profile image</span>
                </label>
                <button>Sign up</button>
                {err && <span className='error'>Something went wrong!</span> }
            </form>
            <p>Already have an account? Log in here.</p>
        </div>
    </div>
  )
}

export default Register