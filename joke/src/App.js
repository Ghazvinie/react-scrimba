import React from "react";
import ToDoItem from './components/ToDoItem';

const textData = ['Some Text', 'More Text', 'Extra Text', 'Final Text']

const App = () => {
    return (
        <div className="todo-items-container">
            <ToDoItem text={textData} />
        </div>
    )
};

export default App;