import React from "react";
import { connect } from 'react-redux';
import { increment, decrement } from './redux/count';

function App(props) {
    return (
        <div>
            <h1>{props.count}</h1>
            <button onClick={props.decrement}>-</button>
            <button onClick={props.increment}>+</button>
        </div>
    );
}

function mapStateToProps(globalState) {
    return {
        count: globalState.count
    };
}

const mapDispatchToProps = {
    increment,
    decrement
};

const connectedRedux = connect(mapStateToProps, mapDispatchToProps)(App)

export default connectedRedux