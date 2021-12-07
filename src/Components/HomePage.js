import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import RegisterModal from "./SubComponents/RegisterModal";
import {bindActionCreators} from "redux";
import {actionCreators} from "../redux/actionCreatorExport.js";

import "../SASS/_homepage.scss";

const HomePage = () => {

    const [open, setOpen] = useState(false);

    // Attempt at using React Hooks instead of connect().
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch()

    const {login, logout} = bindActionCreators(actionCreators, dispatch);

    console.log(login, logout);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return ( 
        <div id="home-page">
                <div id="welcome-box">
                    <h1>{user.email}</h1>
                    <h2>bartending, simplified</h2>
                    <p>generate hundreds of cocktail recipes instantly</p>
                    <button class="account-buttons">LEARN MORE</button>
                </div>
        </div>
    )
}

export default HomePage;