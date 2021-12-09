import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators} from "../redux/actionCreatorExport.js";

import Home from "../Components/Home.js";
import Header from "../Components/Header.js";

import "../SASS/pages/_homepage.scss";

const HomePage = () => {

    const [open, setOpen] = useState(false);

    /* 
        Attempt at using React Hooks instead of connect().
        
        What's happening here?

            - useSelector() allows you to extract data from the Redux store state, using a selector function.
                a. This is like MapStateToProps() to connect(), conceptually.
                b. It can return values, not just objects.
                c. When action is dispatched, useSelector() checks for changes in state and re-renders accordingly.
                d. useSelector() is a strict comparator by default, compared to connect().

            - useDispatch() is the function that serves the state. 
                a. Remember, useSelector() is used to to retrieve state. useDispatch() is the action to update it.
                b. This refers to the dispatch() function from the Redux store.
    */
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch()

    const {login, logout} = bindActionCreators(actionCreators, dispatch);

    console.log(login, logout);
    console.log(user);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return ( 
        <div id="home-page">
            <Header />
            <Home />
        </div>
    )
}

export default HomePage;