import React from 'react';
import Navigation from './Navigation';
import Search from './Search';

function Sidebar() {
    return (
        <div className='sidebar'>
            <Navigation />
            <Search />
        </div>
    );
}

export default Sidebar;
