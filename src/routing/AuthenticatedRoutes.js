import React from "react";
import {Route, Routes, Navigate, Outlet} from "react-router-dom";

const AuthenticatedRoutes = ({children}) => {
    let userExist = localStorage.getItem("persist:user");

    return (
        userExist ? children : <Navigate to="/" /> 
            // <Route 
            //     {...rest} 
            //     render={(props) => {
            //         if(rest.isLoggedIn) {
            //             return <Component {...props}/>;
            //         } else {
            //             return <Navigate to={
            //                 {
            //                     pathname: "/login",
            //                     state: {
            //                         from: props.location
            //                     }
            //                 }
            //             } />
            //         } 
            //     }}
            // />
    )
}

export default AuthenticatedRoutes;