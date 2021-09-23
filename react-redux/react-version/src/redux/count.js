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


function countReducer(count = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: count + action.payload
            };
        case 'DECREMENT':
            return {
                count: count - action.payload
            };
        default:
            return count;
    }
}

export { countReducer, increment, decrement };