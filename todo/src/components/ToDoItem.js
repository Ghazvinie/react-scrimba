import React from 'react';

const ToDoItem = (props) => {
    return props.text.map(item => (
        <div className="todo-item" key={item.id}>
            <p>{item.text}</p>
            <div className="checkbox-single-container">
                <input type="checkbox" checked={item.completed} />
            </div>
        </div>
    ));
}


export default ToDoItem;