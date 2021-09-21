// import redux from 'redux';

console.log('ell')
// Redux action
function increment() {
    return {
        type: 'INCREMENT'
    };
}

function decrement() {
    return {
        type: 'DECREMENT'
    };
}

function double() {
    return {
        type: 'double'
    };
}

function halve() {
    return {
        type: 'halve'
    };
}

function reducer(state = { count: 0 }, action) {

    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1
            }
        case 'DECREMENT':
            return {
                count: state.count - 1
            }
        case 'DOUBLE':
            return {
                count: state.count * 2
            }
        case 'HALVE':
            return {
                count: Math.round(state.count / 2)
            }
        default:
            return state
    }
}

const store = redux.createStore(reducer);

store.subscribe(() => {
    console.log(store.sate());
});

store.dispatch(increment());
store.dispatch({ type: 'INCREMENT' });


