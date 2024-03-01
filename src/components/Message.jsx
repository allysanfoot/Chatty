import React from 'react'
import Wisp from '../img/wisp.png'
import { useContext } from 'react'
import { AuthenticationContext } from '../context/AuthenticationContext'
import { ChatContext } from '../context/ChatContext'

const Message = ({message}) => {

  const {currentUser} = useContext(AuthenticationContext);
  const {data} = useContext(ChatContext);

  return (
    <div className="message owner">
      <div className="messageInfo">
        <img src={Wisp} alt='' />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>Hey! How are you?</p>
        <img src={Wisp} alt='' />
      </div>
    </div>
  )
}

export default Message