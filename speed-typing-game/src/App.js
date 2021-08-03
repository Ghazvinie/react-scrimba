import React, { useState, useEffect } from "react";

const App = () => {
    const [text, setText] = useState('');
    const [time, setTime] = useState(null);
    const [timeSet, setTimeSet] = useState('');

    function handleTextChange(e) {
        const { value } = e.target;
        setText(value);
    }

    function countWords(text) {
        const numWords = text
            .trim()
            .split(' ')
            .filter(element => element !== '')
            .length;

        return numWords;
    }

    useEffect(() => {
        if (time <= 0 || !time) return;
        setTimeout(() => {
            setTime((prevTime) => prevTime - 1);
        }, 1000);

    }, [time]);

    function setTimer(e) {
        if (time > 0 && time != null) return;
        const { value } = e.target;
        setTimeSet(value);
    }

    function handleSetTime(){
        if (time > 0) return;
        setTime(timeSet);
    }

    return (
        <div>
            <h1>Crazy Game!</h1>
            <textarea value={text} name='textArea' onChange={(e) => handleTextChange(e)} />
            <input type='text' value={timeSet} onChange={(e) => setTimer(e)} /> Set Timer
            <h4>Time Remaining: {time}</h4>
            <button onClick={() => handleSetTime()}>Start</button>
            <h1>Word Count: {countWords(text)}</h1>
        </div>
    );
}

export default App;