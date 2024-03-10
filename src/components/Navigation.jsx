import React, { useContext } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { AuthenticationContext } from '../context/AuthenticationContext';

const Navigation = () => {
    const {currentUser} = useContext(AuthenticationContext);

    return (
        <div className='navigation'>
            <span className='logo'>Chatty</span>
            <div className='user'>
                <img src={currentUser.photoURL} alt=''/>
                <span>{currentUser.username}</span>
                <button onClick={() => signOut(auth)}>Log out</button>
            </div>
        </div>
    )
}

export default Navigation