import redux, { createStore, combineReducers } from 'redux';
import { countReducer, increment } from './count';

const rootReducer = combineReducers({
    count: countReducer
});

const store = createStore(rootReducer);
store.subscribe(() => {
    console.log(store.getState());
});

export default store;