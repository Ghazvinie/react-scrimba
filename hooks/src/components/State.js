import React, { useState, useEffect } from 'react';

function State() {
    const [count, setCount] = useState(0);
    const [colour, setColour] = useState('');

    useEffect(() => { // componentDidMount()
       setColour('blue'); 
    }, []);

    useEffect(() => { // componentWillUpdate()
        // logic
    }, [/* someVar */])

    useEffect(() => { // componentWillUnmount()
        setColour();
        return () => {
            // logic
        };
    });

    return (
        <div>
            <h1 style={{color: colour}}>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count * 2)}>Double</button>
            <button onClick={() => setCount(Math.round(count / 2))}>Half</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    );
}

export default State;