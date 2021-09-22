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

const initialState = {
    count: 0,
    favoriteThings: [],
    youtubeVideo: {
        title: "",
        viewCount: 0,
        votes: {
            up: 0,
            down: 0
        }
    }
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
                favieThings: [...state.favieThings, action.payload]
            }
        case 'REMOVE_FAVIE_THING': {
            const newThings = state.favieThings.filter(thing => thing !== action.payload)
            return {
                ...state,
                favieThings: [...state.favieThings, newThings]
            }
        }
        case 'ADD_YOUTUBE_TITLE':
            return {
                ...state,
                youtubeVideo: {
                    ...state.youtubeVideo,
                    title: action.payload
                }
            }
        case 'UP_YOUTUBE_COUNT':
            return {
                ...state,
                youtubeVideo: {
                    ...state.youtubeVideo,
                    votes: {
                        ...state.youtubeVideo.votes,
                        up: state.youtubeVideo.votes.up + action.payload
                    }
                }
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


