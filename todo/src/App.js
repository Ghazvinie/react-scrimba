import React from "react";
import ToDoItem from './components/ToDoItem';

const App = () => {
    return(
    <div className="todo-items-container">
        <ToDoItem text={'Some Text'} />
        <ToDoItem text={'Some Text'} />
        <ToDoItem text={'Some Text'} />
        <ToDoItem text={'Some Text'} />
    </div>
)};

export default App;