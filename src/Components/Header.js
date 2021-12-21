import React, {useState, useEffect} from "react";
import Headroom from "react-headroom";
import {Link as scrollLink, Button, animateScroll} from "react-scroll";
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators} from "../redux/actionCreatorExport.js";
import axios from "axios";

import Modal from "./SubComponents/Modal.js";

import "../SASS/components/_header.scss";

const Header = (props) => {
    const [currentUser, setCurrentUser] = useState({});
    const [open, setOpen] = useState(false);

    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const {login, logout} = bindActionCreators(actionCreators, dispatch);

    const loginUser = () => {
        axios.post("/auth/login", {email: "sehgalsasha711@gmail.com", password: "123456"})
            .then((res) => {
                setCurrentUser(res.data);
                login(res.data.email);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleClick = (e) => {
        setOpen(true);
    };

    // console.log(login, logout);
    console.log(user);

    return (
        <Headroom id="headroom">
            <section id="logo-section">
                <Link to="/" className="logo-links">get crafty</Link>
            </section>
            <section id="link-section">
                {/* <Link to="/about" className="header-links">about</Link> */}
                <button onClick={() => handleClick()}>login</button>
                <Link to="/login" className="header-links">login</Link>
                <button onClick={() => logout()}>logout</button>
                <Link to="/" className="header-links">logout</Link>
                <Link to="/register" className="header-links">register</Link>
            </section>
            <>
                {user.isLoggedIn && user.email ? 
                    <h1>{user.email}</h1>
                    : null}
            </>
            <>
                <Modal show={open} />
            </>
        </Headroom>
    )
}

export default Header;