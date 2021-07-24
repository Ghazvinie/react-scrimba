import React, { useState, useEffect } from 'react';

function State() {
    const [count, setCount] = useState(0);
    const [colour, setColour] = useState('');

    useEffect(() => { // componentDidMount()
       setColour('blue'); 
    }, []);

    useEffect(() => { // componentDidUpdate()
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

function Card(props) {
    const styles = {
        backgroundColor: props.cardColor,
        height: 100,
        width: 100
    };
    
    return (
        <div style={styles}></div>
    );
}

Card.defaultProps = {
    cardColor: 'yellow'
}


export { State, Card };