import React from "react";
import Joke from './components/Joke';
import jokes from './jokes.json';


const App = () => {
    return (
        <div>
            <Joke jokes={jokes} />
        </div>
    )
};

export default App;