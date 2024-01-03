import React from 'react'
import Crescent from '../img/crescent.jpg'

const Convos = () => {
    return (
        <div className='convos'>
            <div className='userChat'>
                <img src={Crescent} alt='' />
                <div className='userChatInfo'>
                    <span>Username</span>
                    <p>What's up cuck</p>
                </div>
            </div>
            <div className='userChat'>
                <img src={Crescent} alt='' />
                <div className='userChatInfo'>
                    <span>Username</span>
                    <p>gimme the fuckin nip</p>
                </div>
            </div>
        </div>
    )
}

export default Convos