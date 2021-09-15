// import React from "react";
// import { Switch, Route } from 'react-router-dom';
import './App.css'
// import Home from './components/Home';
// import About from './components/About';
// import Contacts from "./components/Contacts";
// import Profile from "./pages/profile/Profile";

// import Header from "./components/Header";

// function App() {
//     return (
//         <div>
//             <Header />
//             <Switch>
//                 <Route exact path='/'>
//                     <Home />
//                 </Route>
//                 <Route exact path='/about'>
//                     <About />
//                 </Route>
//                 <Route exact path='/contacts'>
//                     <Contacts />
//                 </Route>
//                 <Route path='/profile'>
//                     <Profile />
//                 </Route>
//             </Switch>
//         </div>
//     );
// }

// export default App;

// import React from "react";
// import Header from "./components/Header";
// import Home from "./pages/Home";
// import ServicesList from "./pages/services/servicesList";
// import ServiceDetail from "./pages/services/servicesDetail";
// import servicesData from './pages/services/servicesData';

// import { Switch, Route } from "react-router-dom"

// function App() {
//     return (
//         <div>
//             <Header />
//             <Switch>
//                 <Route exact path="/">
//                     <Home />
//                 </Route>
//                 <Route exact path="/services" >
//                     <ServicesList listData={servicesData} />
//                 </Route>
//                 <Route path="/services/:serviceId/" >
//                     <ServiceDetail />
//                 </Route>
//                 <Route path='/profile'>
//                     <Profile />
//                 </Route>
//             </Switch>
//         </div>
//     );
// }

// export default App;

import React, { useState } from 'react';
import { Redirect, Link, Switch, Route } from 'react-router-dom';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='private'>Private</Link>

            <Switch>
                <Route exact path='/'>
                    <h1>Home Page - Anyone</h1>
                </Route>
                <Route path='/private'>
                    {
                    isLoggedIn ? 
                    <h1>Protected Page</h1> :
                    <Redirect to='/'/>
                }
                    
                </Route>
            </Switch>
        </div>
    )
}

export default App;