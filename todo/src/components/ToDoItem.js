import React from 'react';

class ToDoItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            toDos: props.text,
        };
        this.handleClick = this.handleClick.bind(this);
    };

    handleClick(id) {
        this.setState((prevState) => {
            const updatedToDos = prevState.toDos.map(element => {
                if (element.id === id) {
                    return {
                        ...element,
                        completed: !element.completed,
                    }
                }
                return element
            });
            return {
                toDos: updatedToDos
            };
        });
    }

    // componentDidUpdate(prevProps, prevState){
    //   prevState.toDos.map((element, idx) => {
    //       if (element.completed !== this.state.toDos[idx].completed){
    //           this.setState({color: this.state.color === 'green' ? 'red' : 'green'})
    //       }
    //   })
    // }



    render() {
        const itemCompletedStyle = {
            color: 'rgba(10, 10, 10, 0.1)',
            textDecoration: 'line-through'
        }
        return (
            this.state.toDos.map(item => {
            return (
                <div className="todo-item" key={item.id} >
                    <p style={item.completed ? itemCompletedStyle : null }>{item.text}</p>
                    <div className="checkbox-single-container" >
                        <input type="checkbox" checked={item.completed} onChange={() => this.handleClick(item.id)} />
                    </div>
                </div>
            );
        })
        );
    };
}

export default ToDoItem;

