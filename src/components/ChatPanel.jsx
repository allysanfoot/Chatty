import React from 'react';
import ChatInput from './ChatInput';
import {Messages} from './Messages';

const ChatPanel = () => {
    return (
        <div className='chatPanel'>
            <div className="chatInfo">
                <span>Allysa</span>
                <div className="chatIcons">
                    <img src='' alt=' '/>
                    <img src='' alt=' '/>
                    <img src='' alt=' '/>
                </div>
            </div>
            <Messages />
            <ChatInput />
        </div>
    );
    };       

export default ChatPanel;
