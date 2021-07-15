import React from 'react';

const Joke = (props) => {
    let randomJokes = [];
    while (randomJokes.length < 5) {
        const rdmIdx = Math.floor(Math.random() * props.jokes.length);
        if (randomJokes.indexOf(props.jokes[rdmIdx]) === -1) {
            randomJokes.push(props.jokes[rdmIdx]);
        }
    }
    return randomJokes.map(joke => {
        return (
            <div className='joke-container'>
                <div className='joke-single'>
                    <div className="joke-setup">
                        <p>{joke.setup}</p>
                    </div>
                    <div className="joke-punchline">
                        <p>{joke.punchline}</p>
                    </div>
                </div>
            </div>
        );
     });
};

export default Joke;