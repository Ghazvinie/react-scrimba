import { useState, useRef } from 'react';

function useGameHook() {
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

    return [text, timer, setTimer, wordCount, setWordCount, handleTextChange, gameRunning, setGameRunning, timerLength, setTimerLength, timerLengthHandle, handleStartGame, inputRef, testRef];
}

export default useGameHook;