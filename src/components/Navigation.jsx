import React, { useContext } from 'react';
import Crescent from '../img/crescent.jpg';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { AuthenticationContext } from '../context/AuthenticationContext';

const Navigation = () => {
    const {user} = useContext(AuthenticationContext);

    return (
        <div className='navigation'>
            <span className='logo'>Chatty</span>
            <div className='user'>
                <img src={user.photoURL} alt=''/>
                <span>{user.displayName}</span>
                <button onClick={() => signOut(auth)}>Log out</button>
            </div>
        </div>
    )
}

export default Navigation