import React, { useState } from 'react'
import Crescent from '../img/crescent.jpg'

const Search = () => {
    const [username, setUsername] = useState('')
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)

    const searchUser = () => {

    }

    const handleKey = e => {
        e.code === 'Enter' && searchUser()

    }

    return (
        <div className='search'>
            <div className='searchForm'>
                <input type='text' placeholder='Search for a user' onChange={e => setUsername(e.target.value)} onKeyDown={handleKey}/>
            </div>
            <div className='userChat'>
                <img src={Crescent} alt='' />
                <div className='userChatInfo'>
                    <span>Username</span>
                </div>
            </div>
        </div>
    )
}

export default Search