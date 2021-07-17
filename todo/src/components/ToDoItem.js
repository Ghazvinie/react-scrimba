import React from 'react';

class ToDoItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isChecked: false,
            toDos: props.text
        };
        this.handleClick = this.handleClick.bind(this);
    };

    handleClick(id) {
        this.setState((prevState) => {
            const updatedToDos = prevState.toDos.map(element => {
                if (element.id === id) {
                    element.completed = !element.completed;
                }
                return element;
            });
            return {
                toDos: updatedToDos
            }
        });
    }

    render() {
        return this.state.toDos.map(item => {
            return (
                <div className="todo-item" key={item.id} >
                    <p>{item.text}</p>
                    <div className="checkbox-single-container" >
                        <input type="checkbox" checked={this.state.isChecked} onChange={() => this.handleClick(item.id)} />
                    </div>
                </div>
            );
        });
    }
}



export default ToDoItem;