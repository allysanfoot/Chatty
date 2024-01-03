import React from 'react';
import Crescent from '../img/crescent.jpg';

const Navigation = () => {
    return (
        <div className='navigation'>
            <span className='logo'>Chatty</span>
            <div className='user'>
                <img src={Crescent} alt=''/>
                <span>Username</span>
                <button>Log out</button>
            </div>
        </div>
    )
}

export default Navigation