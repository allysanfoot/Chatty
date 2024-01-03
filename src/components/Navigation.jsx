import React from 'react'

const Navigation = () => {
    return (
        <div className='navigation'>
            <span className='logo'>Chatty</span>
            <div className="user">
                <img src='' alt=''/>
                <span>Username</span>
                <button>Log out</button>
            </div>
        </div>
    )
}

export default Navigation