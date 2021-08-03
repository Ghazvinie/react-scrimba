import React, { useState, useEffect } from "react";

const App = () => {
    const [text, setText] = useState('');
    const [timer, setTimer] = useState(null);
    const [timerLength, setTimerLength] = useState('');
    const [gameRunning, setGameRunning] = useState(false);

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
        if (timer <= 0 || !timer) {
            return setGameRunning(false);
        }
        setTimeout(() => {
            setTimer((prevTime) => prevTime - 1);
        }, 1000);

    }, [timer]);

    function timerLengthHandle(e) {
        if (gameRunning) return;
        const { value } = e.target;
        setTimerLength(value);
    }

    function handleStartGame(){
        if (gameRunning) return;
        setGameRunning(true);
        setTimer(timerLength);
    }

    return (
        <div>
            <h1>Crazy Game!</h1>
            <textarea value={text} name='textArea' onChange={(e) => handleTextChange(e)} />
            <input type='text' value={timerLength} onChange={(e) => timerLengthHandle(e)} /> Set Timer
            <h4>Time Remaining: {timer}</h4>
            <button onClick={() => handleStartGame()}>Start</button>
            <h1>Word Count: {countWords(text)}</h1>
        </div>
    );
}

export default App;