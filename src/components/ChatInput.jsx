import React from 'react'
import AddImage from '../img/add-image.png'
import AttachFile from '../img/attach-file.png'

const ChatInput = () => {
    return (
        <div className='chatInput'>
            <input type='text' placeholder='Type something...' />
            <div className="send">
                <img src={AttachFile} alt='' />
                <input type='file' style={{display:'none'}} id='file'/>
                <label htmlFor='file'>
                    <img src={AddImage} alt='' />
                </label>
                <button>Send</button>
            </div>
        </div>
    )
};

export default ChatInput;