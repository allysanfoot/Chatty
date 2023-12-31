import React from 'react'

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
                <input type='file'></input>
                <button>Sign up</button>
            </form>
            <p>Already have an account? Log in here.</p>
        </div>
    </div>
  )
}

export default Register