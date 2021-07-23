import React, { useState } from 'react';

function State() {
    const [count] = useState(0);

    return (
        <div>
            <h1>{count}</h1>
            <button>Change!</button>
        </div>
    );
}

export default State;