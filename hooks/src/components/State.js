import React, { useState } from 'react';

function State() {
    const [value, dispatchAction] = useState('yes');
    console.log(value)

    return (
        <div>
            <h1>This is the thing ----> { value}</h1>
        </div>
    );
}

export default State;