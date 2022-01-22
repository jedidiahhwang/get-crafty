import React from "react";
import {Route, Navigate} from "react-router-dom";

const AuthenticatedRoutes = ({component: Component, ...rest}) => {

    return (
        <Route 
            {...rest} 
            render={(props) => {
                if(rest.isLoggedIn) {
                    return <Component {...props}/>;
                } else {
                    return <Navigate to={
                        {
                            pathname: "/login",
                            state: {
                                from: props.location
                            }
                        }
                    } />
                } 
            }}
        />
    )
}

export default AuthenticatedRoutes;