import React from "react";
import Header from "./components/Header";
import { Switch, Link, Route } from 'react-router-dom';
import Photos from "./pages/Photos";
import Cart from './pages/Cart';

const App = () => (
    <div>
        <Header />
        
        <Switch>
            <Route exact path='/'>
                <Photos />
            </Route>
            <Route path='/cart'>
                <Cart />
            </Route>
        </Switch>
    </div>
)

export default App;