// import React from "react";
// import { Link } from 'react-router-dom';

// function Header() {
//     return (
//         <header>
//             <ul>
//                 <li><Link to='/'>Home</Link></li>
//                 <li><Link to='/about'>About</Link></li>
//                 <li><Link to='/contacts'>Contacts</Link></li>
//                 <li><Link to='/profile'>Profile</Link></li>
//             </ul>
//         </header>
//     );
// }


// export default Header;

import React from "react";
import {Link} from "react-router-dom";

function Header() {
    return (
        <header>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to='/profile'>Profile</Link></li>
            </ul>
        </header>
    );
}

export default Header