import React, { useContext, useState } from 'react'
import { collection, query, where, getDoc, getDocs, setDoc, updateDoc, serverTimestamp, doc } from "firebase/firestore";
import { db } from '../firebase'
import { AuthenticationContext } from '../context/AuthenticationContext'

const Search = () => {
    const [username, setUsername] = useState('')
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)

    const { currentUser } = useContext(AuthenticationContext)

    const searchUser = async () => {
        const q = query(collection(db, "users"), where("displayName", "==", username));

        try {
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                setUser(doc.data());
            });
        } catch (err) {
            setError(true)
        }
    };

    const handleKey = (e) => {
        e.code === 'Enter' && searchUser()
    };

    const handleSelect = async () => {
        const combinedId =
            currentUser.uid > user.uid
                ? currentUser.uid + user.uid
                : user.uid + currentUser.uid;

        try {
            const res = await getDoc(doc(db, "chats", combinedId));

            if (!res.exists()) {
                //create a chat in chats collection
                await setDoc(doc(db, "chats", combinedId), { messages: [] });

                //create user chats
                await updateDoc(doc(db, "userChats", currentUser.uid), {
                    [combinedId + ".userInfo"]: {
                        uid: user.uid,
                        displayName: user.displayName,
                        photoURL: user.photoURL,
                    },
                    [combinedId + ".date"]: serverTimestamp(),
                });

                await updateDoc(doc(db, "userChats", user.uid), {
                    [combinedId + ".userInfo"]: {
                        uid: currentUser.uid,
                        displayName: currentUser.displayName,
                        photoURL: currentUser.photoURL,
                    },
                    [combinedId + ".date"]: serverTimestamp(),
                });

            }
        } catch (err) { 
            // setError(true)
        }

        setUser(null);
        setUsername("")
    };


    return (
        <div className='search'>
            <div className='searchForm'>
                <input
                    type='text' placeholder='Search Chatty'
                    onChange={e => setUsername(e.target.value)}
                    onKeyDown={handleKey}
                    value={username}
                />
            </div>
            {error && <div className='error'>User not found</div>}
            {user && <div className='userChat' onClick={handleSelect}>
                <img src={user.photoURL} alt='' />
                <div className='userChatInfo'>
                    <span>{user.displayName}</span>
                </div>
            </div>}
        </div>
    )
}

export default Search