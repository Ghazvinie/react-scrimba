import React from "react";
import { Link, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

const App = () => (
    <div>
        <Link to='/' >Home</Link>
        <Link to='/about'>About</Link>

        <Switch>
             <Route exact path='/'><Home/></Route>
             <Route exact path='/about'><About/></Route>
        </Switch>
    </div>
)

export default App;