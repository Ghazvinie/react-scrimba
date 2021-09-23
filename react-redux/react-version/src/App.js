import React from "react";
import { connect } from 'react-redux';

function App(props) {
    return (
        <div>
            <h1>{props.count}</h1>
            <button>-</button>
            <button>+</button>
        </div>
    );
}

function mapStateToProps(globalState){
    return {
        count: globalState.count
    };
}

const connectedRedux = connect(mapStateToProps, {})(App)

export default connectedRedux