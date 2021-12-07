import { createStore, combineReducers, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import { composeWithDevTools } from 'redux-devtools-extension'
import userReducer from "./reducers/userReducer.js";

// Combine the reducers to use them in conjunction
const reducers = combineReducers({
  user: userReducer // Reducers and their corresponding actions to make key-value pairs.
});

/*
    So what's happening in createStore?

        - createStore() takes a reducer as its first param, and default state as its second.
        - composeWithDevTools() lets us setup React DevTools Extension in the browser.
        - applyMiddleware() extends Redux custom functionality.
        - promiseMiddleware lets you handle async action creators.
*/
export default createStore(reducers, composeWithDevTools(applyMiddleware(promiseMiddleware)));