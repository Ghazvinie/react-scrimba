const redux = require('redux');
const { combineReducers, createStore } = redux;

import { youtubeReducer } from './youtubeVideo';
import { countReducer } from './count';
import { favieThingsReducer } from './favoriteThings';
import { userReducer } from './user';

const rootReducer = combineReducers({
    count: countReducer,
    favieThings: favieThingsReducer,
    youtubeVideo: youtubeReducer,
    user: userReducer
});

const store = createStore(rootReducer);
store.subscribe(() => {
    console.log(store.state());
});

export default store;