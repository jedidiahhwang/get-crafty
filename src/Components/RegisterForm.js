import React, {useState} from "react";
import axios from "axios";
import {Navigate} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators} from "../redux/actionCreatorExport.js";

import "../SASS/components/_registerform.scss";

const RegisterForm = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordValidate, setPasswordValidate] = useState("");
    const [currentUser, setCurrentUser] = useState({});

    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const {login, logout} = bindActionCreators(actionCreators, dispatch);

    const userRegister = (e) => {
        e.preventDefault();

        axios
            .post("/auth/register", {firstName, lastName, email, password})
            .then((res) => {
                setCurrentUser(res.data);
                login(res.data.email);
                console.log("Logged in");
            })
            .catch((err) => {
                console.log("Request did not go through");
                console.log(err);
            });
        
    };

    return (
        <div id="register-form-container">
            <form id="register-form" onSubmit={userRegister}>
                <label className="form-labels">
                    First Name:
                </label>
                <input className="form-inputs" type="text" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)}/>
                <label className="form-labels">
                    Last Name:
                </label>
                <input className="form-inputs" type="text" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)}/>
                <label className="form-labels">
                    Email:
                </label>
                <input className="form-inputs" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                <label className="form-labels">
                    Password:
                </label>
                <input className="form-inputs" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                <label className="form-labels">
                    Confirm Password:
                </label>
                <input className="form-inputs" type="password" placeholder="Confirm Password"/>
                <input id="register-button" type="submit" value="Register" />
            </form>
        </div>
    )
}

export default RegisterForm