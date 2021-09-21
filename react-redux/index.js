// import redux from 'redux';

// Redux action
function increment(amount) {
    return {
        type: 'INCREMENT',
        payload: amount
    };
}

function decrement() {
    return {
        type: 'DECREMENT'
    };
}

function double() {
    return {
        type: 'DOUBLE'
    };
}

function halve() {
    return {
        type: 'HALVE'
    };
}

function changeCount(amount){
    return {
        type: 'CHANGE_COUNT',
        payload: amount
    };
}

function addFavieThing(thing){
    return {
        type: 'ADD_FAVIE_THING',
        payload: thing
    };
}

const initialState = {
    count : 0,
    favieThings : []
};

function reducer(state = { count: 0 }, action) {

    switch (action.type) {
        case 'CHANGE_COUNT':
        return {
            count: state.count + action.payload
        }
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
        case 'ADD_FAVIE_THING':
            return {
                ...state,
                favieThings : [...state.favieThings, action.payload]
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


