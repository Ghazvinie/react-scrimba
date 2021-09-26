import React from "react";
import { connect, useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './redux/count';

function App(props) {
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(increment())}>+</button>
        </div>
    );
}

// function mapStateToProps(globalState) {
//     return {
//         count: globalState.count
//     };
// }

// const mapDispatchToProps = {
//     increment,
//     decrement
// };

// const connectedRedux = connect(mapStateToProps, mapDispatchToProps)(App)

// export default connectedRedux





export default App;