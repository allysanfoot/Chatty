import React from 'react';
import ChatInput from './ChatInput';
import {Messages} from './Messages';
import VideoCall from '../img/video-call.png';
import AddUser from '../img/add-user.png';
import Settings from '../img/settings.png';

const ChatPanel = () => {
    return (
        <div className='chatPanel'>
            <div className="chatInfo">
                <span>Allysa</span>
                <div className="chatIcons">
                    <img src={VideoCall} alt='Video Call'/>
                    <img src={AddUser} alt='Add User'/>
                    <img src={Settings} alt='Settings'/>
                </div>
            </div>
            <Messages />
            <ChatInput />
        </div>
    );
    };       

export default ChatPanel;
