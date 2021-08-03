import React, { useState } from "react";

const App = () => {
    const [text, setText] = useState('');

    function handleTextChange(e) {
        const {value} = e.target;
        setText(value);
        console.log(value)
    }

    return (
        <div>
            <h1>Crazy Game!</h1>
            <textarea value={text} name='textArea' onChange={(e)=>handleTextChange(e)}/>
            <h4>Time Remaining</h4>
            <button>Start</button>
            <h1>Word Count</h1>
        </div>
    );
}

export default App;