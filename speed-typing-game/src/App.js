import React, { useState, useEffect } from "react";

const App = () => {
    const [text, setText] = useState('');
    const [timer, setTimer] = useState(null);
    const [timerLength, setTimerLength] = useState('');
    const [gameRunning, setGameRunning] = useState(false);
    const [wordCount, setWordCount] = useState(0);

    function handleTextChange(e) {
        if (!gameRunning) {
            return setText('');
        };
        const { value } = e.target;
        setText(value);
    }

    useEffect(() => {
        if (timer <= 0 || !timer) {
            const numWords = text
                .trim()
                .split(' ')
                .filter(element => element !== '')
                .length;

            setWordCount(numWords);
            return setGameRunning(false);
        };

        setTimeout(() => {
            setTimer((prevTime) => prevTime - 1);
        }, 1000);

    }, [timer]);

    function timerLengthHandle(e) {
        if (gameRunning) return;
        const { value } = e.target;
        setTimerLength(value);
    }

    function handleStartGame() {
        if (gameRunning) return;
        setWordCount(0);
        setText('');
        setGameRunning(true);
        setTimer(timerLength);

    }

    return (
        <div>
            <h1>Crazy Game!</h1>
            <textarea value={text} name='textArea' onChange={(e) => handleTextChange(e)} disabled={!gameRunning}/>
            <input type='text' value={timerLength} onChange={(e) => timerLengthHandle(e)} /> Set Timer
            <h4>Time Remaining: {timer}</h4>
            <button onClick={() => handleStartGame()} disabled={gameRunning}>Start</button>
            <h1>Word Count: {wordCount}</h1>
        </div>
    );
}

export default App;