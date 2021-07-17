import React from 'react';

class ToDoItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            toDos: props.text,
            color: 'red'
        };
        this.handleClick = this.handleClick.bind(this);
    };

    handleClick(id){
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

    componentDidUpdate(prevProps, prevState){
      prevState.toDos.map((element, idx) => {
          if (element.completed !== this.state.toDos[idx].completed){
              this.setState({color: 'green'})
          }
      })
    }

    render() {
        return this.state.toDos.map(item => {
            return (
                <div className="todo-item" key={item.id} >
                    <p style={{color: this.state.color}}>{item.text}</p>
                    <div className="checkbox-single-container" >
                        <input type="checkbox" checked={item.completed} onChange={() => this.handleClick(item.id)} />
                    </div>
                </div>
            );
        });
    }
}

export default ToDoItem;