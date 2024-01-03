import React from 'react'
import AddImage from '../img/add-profile.png'

const Register = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Chatty</span>
            <span className='title'>Register</span>
            <form>
                <input type='text' placeholder='Username'></input>
                <input type='email' placeholder='E-mail'></input>
                <input type='password' placeholder='Password'></input>
                <input  style={{display:'none'}} type='file' id='file'></input>
                <label htmlFor='file' alt=''>
                  <img src={AddImage} className='addImage' alt=''/>
                  <span>Upload a profile image</span>
                </label>
                <button>Sign up</button>
            </form>
            <p>Already have an account? Log in here.</p>
        </div>
    </div>
  )
}

export default Register