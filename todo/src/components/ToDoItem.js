import React from 'react';

class ToDoItem extends React.Component {
    constructor() {
        super()
        this.state = {
            isChecked: false
        };
        this.handleClick = this.handleClick.bind(this);
    };

    handleClick(e) {
        this.setState({isChecked : true})
    }

    render() {
        return this.props.text.map(item => {
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