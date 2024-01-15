import React from 'react';
import Crescent from '../img/crescent.jpg';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

const Navigation = () => {
    return (
        <div className='navigation'>
            <span className='logo'>Chatty</span>
            <div className='user'>
                <img src={Crescent} alt=''/>
                <span>Username</span>
                <button onClick={() => signOut(auth)}>Log out</button>
            </div>
        </div>
    )
}

export default Navigation