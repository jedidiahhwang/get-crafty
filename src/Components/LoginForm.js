import axios from "axios";
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators} from "../redux/actionCreatorExport.js";

import "../SASS/components/_loginform.scss";

const LoginForm = (props) => {
    let navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [currentUser, setCurrentUser] = useState({});
    const [errorMessage, setErrorMessage] = useState("");

    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const {login, logout} = bindActionCreators(actionCreators, dispatch);

    const userLogin = (e) => {
        e.preventDefault();

        axios
            .post("/auth/login", {email, password})
            .then((res) => {
                console.log(res.data);
                setCurrentUser(res.data);
                login(res.data.email, res.data.recipes);
                console.log("Logged in");
                navigate("/userpage");
            })
            .catch((err) => {
                console.log("Request did not go through");
                console.log(err.response.data);
            })
    }

    const userLogout = (e) => {
        e.preventDefault();

        axios
            .post("/auth/logout")
            .then((res) => {
                console.log(res.data);
                logout();
            })
            .catch((err) => {
                console.log(err.response.data);
            });
    }

    return (
        <div id="login-form-container">
            <form id="login-form">
                <h3>Login</h3>
                <label>
                    Email:
                    <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                </label>
                <label>
                    Password:
                    <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                </label>
                <button type="submit" onClick={userLogin}>Submit</button>
            </form>
            <button onClick={userLogout}>Logout</button>
        </div>
    )
}

export default LoginForm