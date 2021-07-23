import React, { useState } from 'react';

function State() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=> setCount(count+1)}>Increment</button>
            <button onClick={() => setCount(count*2)}>Double</button>
            <button onClick={() => setCount(Math.round(count/2))}>Half</button>
            <button onClick={() => setCount(count-1)}>Decrement</button>
        </div>
    );
}

export default State;