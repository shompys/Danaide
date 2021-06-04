import React from 'react';
import Navbar from './Navbar';
import Notification from './Notification';

function Header(){
    return(
        <header style={{background: "#639BAE"}}>
            HEADER
            <Navbar/>
            <Notification/>
        </header>
    )
}
export default Header;