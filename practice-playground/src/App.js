import React, { useState, useContext } from "react";

// import { State, Card, RoundedImg } from './components/State';
// import Callout from './components/Callout';
// import  {MyHOC, Menu, Favorite}  from './components/HOC';
// import DataFetcher from "./components/DataFetcher";
import { Header, UserContext } from './components/Context';

// const App = () => (
//     <div>
//         <State />
//         <RoundedImg src="https://picsum.photos/id/237/300/300" borderRadius="10px" />

//     </div>
// );

// function App() {
//     return (
//         <main>
//             <h1>Welcome!</h1>
//             <Callout>
//                 <h2>Don't miss out!</h2>
//                 <p>Unless you don't suffer from FOMO, you better make sure you fill out the email form below!</p>
//             </Callout>

//             <p>This is probably the best site you've ever come across. I'm glad you're here to witness the magnificence of this website right now.</p>
//             <Callout>
//                 <img src='https://i.picsum.photos/id/102/4320/3240.jpg?hmac=ico2KysoswVG8E8r550V_afIWN963F6ygTVrqHeHeRc' alt='img' style={{ width: '800px', height: '600px' }} />
//                 <figcaption>Look at the raspberries</figcaption>
//             </Callout>
//             <p>Here's some more unforgettable content. Lorem ipsum something or other.</p>
//             <Callout>
//                 <h2>Give us your email. We definitely won't sell it to anyone.</h2>
//                 <input type='email' placeholder='Enter email'></input>
//                 <button>Sign Me Up!</button>
//             </Callout>
//         </main>
//     );
// }

// function App(props) {
//     return (
//         <div>{props.favieNum}</div>
//     );
// }

// const CombinedComponent = MyHOC(App);

// export default MyHOC(App);

// function App() {
//     return (
//         <div>
//             <RenderProps render={(thing) => <h1>{thing > 0 ? 'Greater than 0' : 'Less than 0'}</h1>}/>
//         </div>
//     );
// }

// function App() {
//     const renderProp = (loading, data, error) => {
//         return (
//             error ? <h1>Error Loading Data</h1> : loading ? <h1>Loading...</h1> : <p>{JSON.stringify(data)}</p>
//         );
//     };
//     return (
//         <>
//             <DataFetcher url="https://swapi.dev/api/people/1/" render={renderProp} />
//         </>
//     );
// }

function App() {
    const [username, setUsername] = useState('');

    const handleChange = (e) => {
        const { value } = e.target;
        console.log(value)
        setUsername(value);
    };

    const { changeUsername } = useContext(UserContext);

    return (
        <div>
            <Header />
            <main>
                <p className="main">No new notifications, {username}! ????</p>
                <input
                    type='text'
                    name='username'
                    placeholder='New Username'
                    value={username}
                    onChange={(e) => handleChange(e)} />
            </main>
        </div>
    )

}

export default App;