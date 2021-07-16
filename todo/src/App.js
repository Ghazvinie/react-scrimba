import React from "react";
import ToDoItem from './components/ToDoItem';
import toDoData from './todosData';

const App = () => {
    return (
        <div className="todo-items-container">
            <ToDoItem text={toDoData} />
        </div>
    )
};

export default App;