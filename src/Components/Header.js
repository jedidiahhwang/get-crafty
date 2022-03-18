import React, {useState, useEffect} from "react";
import Headroom from "react-headroom";
import {Link as scrollLink, Button, animateScroll} from "react-scroll";
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators} from "../redux/actionCreatorExport.js";
import axios from "axios";

import "../SASS/components/_header.scss";
import logo from "../images/icons/icons8-glass-of-whiskey-50.png";

const Header = (props) => {
    const [currentUser, setCurrentUser] = useState({});
    const [open, setOpen] = useState(false);

    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const {login, logout} = bindActionCreators(actionCreators, dispatch);

    const handleClick = (e) => {
        setOpen(true);
    };

    // console.log(login, logout);
    console.log(user);

    return (
        <Headroom id="headroom">
            <div id="logo-holder">
                <img src={logo} alt="Get Crafty icon" id="logo-image"/>
                <h3 id="logo-text">Get Crafty</h3>
            </div>
            <section id="link-section">
                <Link to="/about" className="header-links">About</Link>
                <Link to="/login" className="header-links">Login</Link>
                <Link to="/register" className="header-links">Register</Link>
                <Link to="/" className="header-links" onClick={logout}>Logout</Link>
            </section>
        </Headroom>
    )
}

export default Header;