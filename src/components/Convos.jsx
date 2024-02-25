import React, { useContext, useEffect, useState } from 'react'
import Crescent from '../img/crescent.jpg'
import { onSnapshot, doc } from 'firebase/firestore'
import { db } from '../firebase'
import { AuthenticationContext } from '../context/AuthenticationContext'

const Convos = () => {

    const [chats, setChats] = useState([])
    const {currentUser} = useContext(AuthenticationContext)
    console.log(currentUser)

    useEffect(() => {
        const getChats = () => {
            const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
                setChats(doc.data())
            });

            return () => {
                unsub();
            };
        };

            currentUser.uid && getChats()
        }, [currentUser.uid]);

    console.log(chats)

    return (
        <div className='convos'>
            {Object.entries(chats)?.map(chat => (
                <div className='userChat' key={chat[0]}>
                <img src={Crescent} alt='' />
                <div className='userChatInfo'>
                    <span>Username</span>
                    <p>What's up cuck</p>
                </div>
            </div>
                ))}
        </div>
    )
}

export default Convos