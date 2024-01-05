import React from 'react'
import Wisp from '../img/wisp.png'

const Message = () => {
  return (
    <div className="message">
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