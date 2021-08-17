import React from "react";
import { Link, Switch, Route } from 'react-router-dom';
import './App.css'
import Home from './components/Home';
import About from './components/About';
import Contacts from "./components/Contacts";
import Profile from "./pages/profile/Profile";

import Header from "./components/Header";

const App = () => (
 <div>
     <Header />
    
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
            <Route path='/profile'>
                <Profile />
            </Route>
        </Switch>
 </div>
)

export default App;

