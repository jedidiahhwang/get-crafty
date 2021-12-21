// Set the necessary action creators. They just dispatch actions.

export const login = (email) => {
    return (dispatch) => {
        dispatch({
            type: "login",
            payload: email
        })
    }
};

export const logout = () => {
    return (dispatch) => {
        dispatch({
            type: "logout",
        });
    };
};
