const express = require("express");
const session = require("express-session");
const cors = require("cors");

require("./mongoose/mongooseConnect");

const {getAllUsers, getUserSession, login, register} = require("./controllers/authController");

const app = express();

app.use(cors());
app.use(express.json());

app.use(
  session({
    resave: false, // Forces the session to be saved back to the session store, even if the session was never modified during the request.
    saveUninitialized: false, // Forces a session that is "uninitialized" to be saved to the store. False is useful when you need to require permission before setting a cookie.
    secret: "demoSecret", // Kind of a hash for verifying cookie sessions.
  })
);

app.get("/api/userAll", getAllUsers); // Dummy endpoint to confirm the server is working
app.get("/api/userSession", getUserSession);
app.post("/auth/login", login);
app.post("/auth/user", register);

app.listen(5005, () => console.log("Server is ready on port 5005"));