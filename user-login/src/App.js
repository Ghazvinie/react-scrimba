import React from "react"

/*
Challenge:

Given a stateless functional component:
1. Follow the steps necessary to add state to it,
2. Have state keep track of whether the user is logged in or not
3. Add a button that logs the user in/out
    a. extra challenge - make the button display "log in" if they're not logged in and "log out" if they are
4. Display text that says "Logged in" if the user is logged in, or "Logged out" if they're not.
*/

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            loggedIn: false
        };
    };

    handleClick = () => {
        this.setState((prevState) => {
            return ({
                loggedIn: !prevState.loggedIn
            });
        });
    };
    render() {
        return (
            <div className="btn-container">
                <h1>{this.state.loggedIn ? 'You are logged in' : 'You are logged out'}</h1>
                <button type="button" onClick={this.handleClick}>{this.state.loggedIn ? 'Log Out' : 'Log In'}</button>
            </div>
        );
    };
};


export default App
