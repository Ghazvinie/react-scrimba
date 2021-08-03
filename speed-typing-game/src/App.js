import React, { useState, useEffect, useRef } from "react";

const App = () => {
    const [text, setText] = useState('');
    const [timer, setTimer] = useState(null);
    const [timerLength, setTimerLength] = useState('');
    const [gameRunning, setGameRunning] = useState(false);
    const [wordCount, setWordCount] = useState(0);
    const inputRef = useRef(null);
    const testRef = useRef(null);


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
            setTimerLength('');
            testRef.current.innerText = 'GET READY! :)'
            return setGameRunning(false);
        };

        setTimeout(() => {
            setTimer((prevTime) => prevTime - 1);
        }, 1000);

    }, [timer]);

    function timerLengthHandle(e) {
        if (gameRunning) return;
        const { value } = e.target;
        if (isNaN(value)) {
            alert('Please Enter A Valid Number');
            return;
        }
        setTimerLength(value);
    }

    function handleStartGame() {
        if (gameRunning) return;
        if (timerLength === '') return;
        inputRef.current.disabled = false;
        testRef.current.innerText = 'HURRRRRRY UUUUUPPPP!!!';
        inputRef.current.focus();
        setWordCount(0);
        setText('');
        setGameRunning(true);
        setTimer(timerLength);

    }

    return (
        <div>
            <h1 ref={testRef}>GET READY! :)</h1>
            <textarea ref={inputRef} value={text} name='textArea' onChange={(e) => handleTextChange(e)} disabled={!gameRunning}/>
            <input type='text' value={timerLength} onChange={(e) => timerLengthHandle(e)} /> Set Timer
            <h4>Time Remaining: {timer}</h4>
            <button onClick={() => handleStartGame()} disabled={gameRunning}>Start</button>
            <h1>Word Count: {wordCount}</h1>
        </div>
    );
}

export default App;