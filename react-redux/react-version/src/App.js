import React from "react";
import { connect } from 'react-redux';

function App(props) {
    return (
        <div>
            <h1>{props.test}</h1>
            <button>-</button>
            <button>+</button>
        </div>
    );
}

function mapStateToProps(globalState){
    return {
        test: 'hello'
    };
}

const connectedRedux = connect(mapStateToProps, {})(App)

export default connectedRedux