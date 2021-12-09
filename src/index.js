import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import createStore from "./redux/store.js";

import {Provider} from "react-redux"; // Allows whole app to access store.
import {PersistGate} from "redux-persist/integration/react";
/*
What are the following router imports?

- BrowserRouter as Router is the entire route functionality.
- Routes is like the old Switch.
- Route is the actualy specific route.
*/
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

const {store, persistor} = createStore();

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
