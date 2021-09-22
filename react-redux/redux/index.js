const redux = require('redux');
const { combineReducers, createStore } = redux;

import { youtubeReducer } from './youtubeVideo';
import { countReducer } from './count';
import { favieThingsReducer } from './favoriteThings';

const rootReducer = combineReducers({
    count : countReducer,
    favieThings: favieThingsReducer,
    youtubeVideo: youtubeReducer
});

const store = createStore(rootReducer);
store.subscribe(() => {
    console.log(store.sate());
});

export default store;