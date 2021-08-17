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

import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import ServicesList from "./pages/services/servicesList";
import ServiceDetail from "./pages/services/servicesDetail";
import servicesData from './pages/services/servicesData';

import { Switch, Route } from "react-router-dom"

function App() {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/services" >
                    <ServicesList listData={servicesData} />
                </Route>
                <Route path="/services/:serviceId" >
                    <ServiceDetail />
                </Route>
            </Switch>
        </div>
    );
}

export default App;