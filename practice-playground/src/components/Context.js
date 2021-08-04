import React, { useContext, useState } from 'react';

const UserContext = React.createContext();

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

// function Button() {

//     return (
//         <ThemeContext.Consumer>
//             {(value) => (
//                 <button className={`${value.themeValue}-theme`} onClick={value.changeTheme}>Switch Theme</button>
//             )}
//         </ThemeContext.Consumer>
//     )
// }

// function Header() {
//     return (
//         <ThemeContext.Consumer>
//             {value => (
//                 <header className={`${value.themeValue}-theme`}>
//                     <h2>{value.themeValue === "light" ? "Light" : "Dark"} Theme</h2>
//                 </header>
//             )}
//         </ThemeContext.Consumer>
//     );
// }

// class ThemeContextProviderClass extends React.Component {
//     state = {
//         themeValue: 'light'
//     };

//     changeTheme = () => {
//         this.setState((prevState) => {
//             return {
//                 themeValue: prevState.themeValue === 'light' ? 'dark' : 'light'
//             }
//         })
//     }
//     render() {
//         return (
//             <ThemeContext.Provider value={{
//                 themeValue: this.state.themeValue,
//                 changeTheme: this.changeTheme
//             }}>
//                 {this.props.children}
//             </ThemeContext.Provider>
//         );
//     }
// }

function Header() {
    const { username } = useContext(UserContext);
    return (
        <header>
            <p>
                Welcome, {username}!
            </p>
        </header>
    );
}

function UserContextProvider(props) {
    const [username, setUsername] = useState('');

    const changeUsername = (username) => {
        setUsername(username);
    };


    return (
        <UserContext.Provider value={{
            username,
            changeUsername
        }}>
            {props.children}
        </UserContext.Provider>
    );
}

export { Header, UserContextProvider, UserContext };