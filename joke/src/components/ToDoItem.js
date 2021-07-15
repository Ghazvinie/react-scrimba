import React from 'react';

const ToDoItem = (props) => {
    return props.text.map(text => (
        <div className="todo-item">
            <p>{text}</p>
            <div className="checkbox-single-container">
                <input type="checkbox" />
            </div>
        </div>
    ));
}


export default ToDoItem;