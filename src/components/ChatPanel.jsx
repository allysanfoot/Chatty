import React, { useContext } from 'react';
import ChatInput from './ChatInput';
import VideoCall from '../img/video-call.png';
import AddUser from '../img/add-user.png';
import Settings from '../img/settings.png';
import Messages from './Messages';
import { ChatContext } from '../context/ChatContext';

const ChatPanel = () => {
    const {data} = useContext(ChatContext);
    return (
        <div className='chatPanel'>
            <div className="chatInfo">
                <span>{data.user?.displayName}</span>
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
