import React from "react";
import { Link, Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contacts from "./Contacts";
import Profile from "../pages/profile/Profile";

const Header = () => (
 
    <header>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contacts'>Contacts</Link></li>
            <li><Link to='/profile'>Profile</Link></li>
        </ul>

    </header>


)

export default Header;

