import React, { useState, useEffect, useRef } from "react";
import useGameHook from './hooks/useGameHook';
const App = () => {
    const [
        text,
        timer,
        setTimer,
        wordCount,
        setWordCount,
        handleTextChange,
        gameRunning,
        setGameRunning,
        timerLength,
        setTimerLength,
        timerLengthHandle,
        handleStartGame,
        inputRef,
        testRef
    ] = useGameHook();

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

    return (
        <div>
            <h1 ref={testRef}>GET READY! :)</h1>
            <textarea ref={inputRef} value={text} name='textArea' onChange={(e) => handleTextChange(e)} disabled={!gameRunning} />
            <input type='text' value={timerLength} onChange={(e) => timerLengthHandle(e)} /> Set Timer
            <h4>Time Remaining: {timer}</h4>
            <button onClick={() => handleStartGame()} disabled={gameRunning}>Start</button>
            <h1>Word Count: {wordCount}</h1>
        </div>
    );
}

export default App;