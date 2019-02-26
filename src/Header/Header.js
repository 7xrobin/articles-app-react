import React from 'react';
import './header.css';

function Header(props) {
    return (
        <img src={props.imageUri} alt="Espresso Coffee"/>
    );
}
export default Header;