import React from 'react';
import Navigation from './Navigation';
import Search from './Search';
import Convos from './Convos';

function Sidebar() {
    return (
        <div className='sidebar'>
            <Navigation />
            <Search />
            <Convos />
        </div>
    );
}

export default Sidebar;
