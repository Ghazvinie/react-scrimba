import React from "react";
import { Link, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contacts from "./components/Contacts";
import Profile from "./pages/Profile";

const App = () => (
    <div>
        <nav>
            <ul><Link to='/'>Home</Link></ul>
            <ul><Link to='/about'>About</Link></ul>
            <ul><Link to='/contacts'>Contacts</Link></ul>
            <ul><Link to='/profile'>Profile</Link></ul>
        </nav>

        <Switch>
            <Route exact path='/'>
                <Home />
            </Route>
            <Route exact path='/about'>
                <About />
            </Route>
            <Route exact path='/contacts'>
                <Contacts />
            </Route>
            <Route exact path='/profile'>
                <Profile />
            </Route>
        </Switch>


    </div>
)

export default App;