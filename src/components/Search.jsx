import React from 'react'
import Crescent from '../img/crescent.jpg'

const Search = () => {
    return (
        <div className='search'>
            <div className='searchForm'>
                <input type='text' placeholder='Search for a user' />
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