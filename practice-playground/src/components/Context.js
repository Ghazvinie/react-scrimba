import React from 'react';

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
        return (
            <button className="light-theme">Switch Theme</button>
        );
    };
}

export { Header, Button };