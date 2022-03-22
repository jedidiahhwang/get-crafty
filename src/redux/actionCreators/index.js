// Set the necessary action creators. They just dispatch actions.

export const login = (email, recipes) => {
    return (dispatch) => {
        dispatch({
            type: "login",
            payload: email,
            recipes
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

export const add = (drink) => {
    return (dispatch) => {
        dispatch({
            type: "add",
            payload: drink
        })
    }
}