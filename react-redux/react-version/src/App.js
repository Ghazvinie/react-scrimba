import React from "react";
import { connect } from 'react-redux';
import { increment, decrement } from './redux/count';

function App(props) {
    return (
        <div>
            <h1>{props.count}</h1>
            <button onClick={props.countDec}>-</button>
            <button onClick={props.countInc}>+</button>
        </div>
    );
}

function mapStateToProps(globalState) {
    return {
        count: globalState.count
    };
}

const mapDispatchToProps = {
    countInc: increment,
    countDec: decrement
};

const connectedRedux = connect(mapStateToProps, mapDispatchToProps)(App)

export default connectedRedux