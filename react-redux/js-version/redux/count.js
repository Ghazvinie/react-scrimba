function changeCount(amount) {
    return {
        type: 'CHANGE_COUNT',
        payload: amount
    };
}

function countReducer(count = 0, action) {
    switch (action.type) {
        case 'CHANGE_COUNT':
            return count + action.payload;
        default:
            return count;
    }
}

export { changeCount, countReducer };