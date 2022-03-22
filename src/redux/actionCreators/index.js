// Set the necessary action creators. They just dispatch actions.

export const login = (email, drinks) => {
    return (dispatch) => {
        dispatch({
            type: "login",
            payload: email,
            drinks
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
