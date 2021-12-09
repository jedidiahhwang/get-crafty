import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer} from "redux-persist";
import logger from "redux-logger";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage"; // Defaults to localStorage for web.

import userReducer from "./reducers/userReducer.js";

const persistConfig = {
    key: "user",
    storage: storage
};

// Combine the reducers to use them in conjunction.
// Even though we are currently using one reducer, this sets up potential for mroe in the future.
const reducers = combineReducers({
  user: userReducer // Reducers and their corresponding actions to make key-value pairs.
});

const persistedReducer = persistReducer(persistConfig, reducers);

/*
    So what's happening in createStore?

        - createStore() takes a reducer as its first param, and default state as its second.
        - composeWithDevTools() lets us setup React DevTools Extension in the browser.
        - applyMiddleware() extends Redux custom functionality.
        - promiseMiddleware lets you handle async action creators.
*/
export default () => {
    let store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk, logger)));
    let persistor = persistStore(store);
    return {store, persistor};
};