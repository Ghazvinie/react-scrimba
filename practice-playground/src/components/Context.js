import React from 'react';

const ThemeContext = React.createContext()

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

function Button() {

    return (
        <ThemeContext.Consumer>
            {value => (
                <button className={`${value}-theme`}>Switch Theme</button>
            )}
        </ThemeContext.Consumer>
    )

}

function Header() {

    return (
        <ThemeContext.Consumer>
            {value => (
                <header className={`${value}-theme`}>
                    <h2>{value === "light" ? "Light" : "Dark"} Theme</h2>
                </header>
            )}
        </ThemeContext.Consumer>
    );
}

export { Header, ThemeContext, Button };