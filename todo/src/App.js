import React from "react";
import ToDoItem from './components/ToDoItem';
import toDoData from './todosData';

class App  extends React.Component {
    constructor() {
        super()
        this.state = {
            toDoData: toDoData
        };
    };
    render () {
        return (
            <div className="todo-items-container">
                <ToDoItem text={this.state.toDoData} />
            </div>
        )
    }
}

export default App;