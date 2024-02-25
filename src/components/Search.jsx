import React, { useContext, useState } from 'react'
import { collection, query, where, getDoc, getDocs, setDoc, updateDoc, serverTimestamp, doc } from "firebase/firestore";
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
        // setUser(null)
        // setUsername('')
    };

    const handleKey = e => {
        e.code === 'Enter' && searchUser()
    };

    console.log(currentUser)
    console.log(user)

    const handleSelect = async () => {
        const combinedID = 
        currentUser.uid > user.uid 
        ? currentUser.uid + user.uid 
        : user.uid + currentUser.uid

        try{
            const response = await getDoc(doc(db, "chats", combinedID));

            if(!response.exists){}
            await setDoc(doc(db, "chats", combinedID), { messages: [] });

            await updateDoc(doc(db, "userChats", currentUser.uid), {
                [combinedID + ".userInfo"]: {
                    uid: user.uid,
                    displayName: user.displayName,
                    photoURL: user.photoURL
                },
                [combinedID + ".date"]: serverTimestamp()
            })
            await updateDoc(doc(db, "userChats", user.uid), {
                [combinedID + ".userInfo"]: {
                    uid: currentUser.uid,
                    displayName: currentUser.displayName,
                    photoURL: currentUser.photoURL
                },
                [combinedID + ".date"]: serverTimestamp()
            })
        } catch (err) {
            setError(true)
        }
    };

    return (
        <div className='search'>
            <div className='searchForm'>
                <input 
                type='text' placeholder='Search for a user' 
                onChange={e => setUsername(e.target.value)} 
                onKeyDown={handleKey} 
                value={username}
                />
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