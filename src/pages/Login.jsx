import React from 'react'
import AddImage from '../img/add-profile.png'
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const [error, setError] = useState(false);
  const [errormessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (error) {
      setError(true);
      setErrorMessage(error.message);
    }
  }

  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Chatty</span>
            <span className='title'>Log In</span>
            <form onSubmit={handleSubmit}>
                <input type='email' placeholder='E-mail'></input>
                <input type='password' placeholder='Password'></input>
                <button>Sign In</button>
                {error && <span className='errorMessage'>{errormessage}</span>}
            </form>
            <p>Don't have an account yet? Sign up <Link to='/register'>here</Link>.</p>
        </div>
    </div>
  )
}

export default Login