import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer} from "redux-persist"; // Required imports for redux-persist.
import logger from "redux-logger";
import thunk from "redux-thunk"; // Handle async functionality.
import storage from "redux-persist/lib/storage"; // Defaults to localStorage for web.

import userReducer from "./reducers/userReducer.js";

const persistConfig = {
    key: "user",
    storage: storage
};

// Combine the reducers to use them in conjunction.
// Even though we are currently using one reducer, this sets up potential for mroe in the future.
const reducers = combineReducers({
    user: userReducer, // Reducers and their corresponding actions to make key-value pairs.
});

const persistedReducer = persistReducer(persistConfig, reducers);

/*
    So what's happening in createStore?

        - createStore() takes a reducer as its first param, and default state as its second.
        - composeWithDevTools() lets us setup React DevTools Extension in the browser.
        - applyMiddleware() extends Redux custom functionality.
        - promiseMiddleware lets you handle async action creators.
*/

// Refer to https://www.npmjs.com/package/redux-persist for redux-persist tutorial.
// Also refer to https://stackoverflow.com/questions/59984052/react-redux-thunk-persist-typeerror-store-getstate-is-not-a-function-in-s for calling createStore().
export default () => {
    let store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk, logger)));
    let persistor = persistStore(store); // Make your store persist (make the state stay).
    return {store, persistor}; // You're going to return both the store and persisted store.
};