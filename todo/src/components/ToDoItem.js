import React from 'react';

class ToDoItem extends React.Component {
    constructor() {
        super()
        this.state = {
            isChecked: false
        };
    };

    handleClick(e) {
        this.state.isChecked = false;
    }

    render() {
        return this.props.text.map(item => {
            this.state.isChecked = item.completed;
            return (
                <div className="todo-item" key={item.id} >
                    <p>{item.text}</p>
                    <div className="checkbox-single-container" >
                        <input type="checkbox" checked={this.state.isChecked} onChange={this.handleClick} />
                    </div>
                </div>
            );
        });
    }
}



export default ToDoItem;