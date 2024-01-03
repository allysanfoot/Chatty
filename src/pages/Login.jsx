import React from 'react'
import AddImage from '../img/add-profile.png'

const Login = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Chatty</span>
            <span className='title'>Log In</span>
            <form>
                <input type='email' placeholder='E-mail'></input>
                <input type='password' placeholder='Password'></input>
                <button>Sign In</button>
            </form>
            <p>Don't have an account yet? Sign up here.</p>
        </div>
    </div>
  )
}

export default Login