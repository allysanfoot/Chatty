import React, { useContext, useState } from 'react'
import Crescent from '../img/crescent.jpg'
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../firebase'
import { AuthenticationContext } from '../context/AuthenticationContext'

const Search = () => {
    const [username, setUsername] = useState('')
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)

    const {currentUser} = useContext(AuthenticationContext)

    const searchUser = async () => {
        const q = query(collection(db, "users"), where("username", "==", username));

        try {
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                setUser(doc.data())
            });
        } catch (err) {
            setError(true)
        }
    };

    const handleKey = e => {
        e.code === 'Enter' && searchUser()
    };

    const handleSelect = async () => {
        const combinedID = 
        currentUser.uid > user.uid 
        ? currentUser.uid + user.uid 
        : user.uid + currentUser.uid

        try{
            const response = await getDocs(db, "chats", combinedID);

            if(!response.exists()){
                await db.collection("chats").doc(combinedID).set({
                    messages: []
                })
            }
        } catch (err) {
            setError(true)
        }
    };

    return (
        <div className='search'>
            <div className='searchForm'>
                <input type='text' placeholder='Search for a user' onChange={e => setUsername(e.target.value)} onKeyDown={handleKey} />
            </div>
            {error && <div className='error'>User not found</div>}
            {user && <div className='userChat' onClick={handleSelect}>
                <img src={user.photoURL} alt='' />
                <div className='userChatInfo'>
                    <span>Username</span>
                </div>
            </div>}
        </div>
    )
}

export default Search