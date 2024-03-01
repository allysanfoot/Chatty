import React from 'react'
import AddImage from '../img/add-image.png'
import AttachFile from '../img/attach-file.png'
import { useState, useContext } from 'react'
import { AuthenticationContext } from '../context/AuthenticationContext'
import { ChatContext } from '../context/ChatContext'

const ChatInput = () => {
    const {currentUser} = useContext(AuthenticationContext);
    const {data} = useContext(ChatContext);
    const [text, setText] = useState('');
    const [img, setImg] = useState(null);

    const handleSend = () => {
        
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