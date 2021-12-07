/* 
    Remember the 4 parts to a reducer:
        1) Initial State
            - Set the initial state.
        2) Action Constants
            - Constants to manipulate.
        3) Action Creators
            - Sets the object with type and payload.
        4) Reducer
            - Executes the desired functions.
*/

// Set initial state.
const initialState = {
    firstName: "",
    lastName: "",
    email: "hello",
    _id: "",
    recipes: [],
    isLoggedIn: false
};

// Set action constants.
const LOGIN_USER = "LOGIN_USER";
const LOGOUT = "LOGOUT";

// Set the necessary action creators. They just dispatch actions.

/*
    Finally, export the functions in one reducer.
    The reducer functions takes an initial state (set to initialState), as well
    as the action (remember the bank analogy? "DEPOSIT" was the action, here it'll
    be "LOGIN").
*/
export default function reducer(state = initialState, action) {
    // switch is typically used instead of if-else. Define what the action is.
    
    switch(action.type) { // What is the type of action?
        case LOGIN_USER:
            const {username} = action.payload; // What is the value attached to the action?
            return {username, isLoggedIn: true};
        case LOGOUT:
            return initialState;
        default:
            return state;
    }
};
