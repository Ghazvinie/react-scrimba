function increment(num) {
    return {
        type: 'INCREMENT',
        payload: num
    };
}

function decrement(num) {
    return {
        type: 'DECREMENT',
        payload: num
    };
}


function countReducer(state = { count: 0 }, action) {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.payload
            };
        case 'DECREMENT':
            return {
                count: state.count - action.payload
            };
        default:
            return state;
    }
}

export { countReducer, increment, decrement };