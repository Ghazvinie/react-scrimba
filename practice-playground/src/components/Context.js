import React from 'react';

const UsernameContext = React.createContext()

// class Header extends React.Component {
//     render() {
//         return (
//             <header className={`${this.context}-theme`}>
//                 <h2>{this.context === 'light' ? 'Light' : 'Dark'} Theme</h2>
//             </header>
//         );
//     };
// }

// Header.contextType = ThemeContext;

// class Button extends React.Component {
//     render() {
//         console.log(this.context)
//         return (
//             <button className={`${this.context}-theme`}>Switch Theme</button>
//         );
//     };
// }

// Button.contextType = ThemeContext;


class Header extends React.Component {
    static contextType = UsernameContext;
    render() {
        return (
            <header>
                <p>Welcome, {this.context}!</p>
            </header>
        );    
    };
}

export { Header, UsernameContext };