import React from 'react'
import AddImage from '../img/add-image.png'
import AttachFile from '../img/attach-file.png'
import { useState, useContext } from 'react'
import { AuthenticationContext } from '../context/AuthenticationContext'
import { ChatContext } from '../context/ChatContext'
import { Timestamp, arrayUnion, doc, updateDoc } from 'firebase/firestore'
import { v4 as uuid } from "uuid";
import { db, storage } from '../firebase'
import { ref, uploadBytesResumable } from 'firebase/storage'

const ChatInput = () => {
    const {currentUser} = useContext(AuthenticationContext);
    const {data} = useContext(ChatContext);
    const [text, setText] = useState('');
    const [img, setImg] = useState(null);

    const handleSend = async () => {

        if(img){
            const storageRef = ref(storage, uuid)
            const uploadTask = uploadBytesResumable(storageRef, img)
        } else {
            await updateDoc(doc(db, "chats", data.chatID), {
                messages: arrayUnion({
                    id: uuid,
                    text,
                    senderID: currentUser.uid,
                    date: Timestamp.now(),
                })
            })
        }
    }

    return (
        <div className='chatInput'>
            <input 
            type='text' 
            placeholder='Type something...' 
            onChange={(e) => setText(e.target.value)}
            />
            <div className="send">
                <img src={AttachFile} alt='' />
                <input 
                type='file' 
                style={{display:'none'}} 
                id='file'
                onChange={(e) => setImg(e.target.files[0])}
                />
                <label htmlFor='file'>
                    <img src={AddImage} alt='' />
                </label>
                <button onClick={handleSend}>Send</button>
            </div>
        </div>
    )
};

export default ChatInput;