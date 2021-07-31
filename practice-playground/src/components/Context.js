import React from 'react';

const ThemeContext = React.createContext()

class Header extends React.Component {
    render() {
        return (
            <header className="light-theme">
                <h2>Light Theme</h2>
            </header>
        );
    };
}

class Button extends React.Component {
    render() {
        console.log(this.context)
        return (
            <button className={`${this.context}-theme`}>Switch Theme</button>
        );
    };
}

Button.contextType = ThemeContext;

export { Header, Button, ThemeContext };