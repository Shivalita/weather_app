import React, { Component } from 'react';
import './App.css';

import logo from './logo_transparent.png';

function Header() {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />    
        </header>
    );
}

export default Header;