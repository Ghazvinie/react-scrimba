import React from "react";
import { Link, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contacts from "./components/Contacts";

const App = () => (
    <div>
        <nav>
            <ul><Link to='/'>Home</Link></ul>
            <ul><Link to='/about'>About</Link></ul>
            <ul><Link to='/contacts'>Contacts</Link></ul>
        </nav>

        <Switch>
            <Route exact path='/'>
                <Home/>
            </Route>
            <Route exact path='/about'>
                <About/>
            </Route>
            <Route exact path='/contacts'>
                <Contacts/>
            </Route>
        </Switch>


    </div>
)

export default App;