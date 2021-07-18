import React from "react";
import ToDoItem from './components/ToDoItem';
import toDoData from './todosData';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            toDoData: toDoData,
            isLoading: true
        };
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 2000)
    };

    render() {
        return (
            <div>
                {this.state.isLoading ? <h1>Page is loading...</h1> :
                    <div className="todo-items-container">
                        <ToDoItem text={this.state.toDoData} />
                    </div>}
            </div>
        );
    };
}

export default App;