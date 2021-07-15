import React from 'react';

const ToDoItem = (props) => {
    return (
        <div className="todo-item">
            <p>{props.text}</p>
            <div className="checkbox-single-container">
                <input type="checkbox" />
            </div>
        </div>
    );
}


export default ToDoItem;