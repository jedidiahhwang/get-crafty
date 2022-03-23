const express = require("express");
const session = require("express-session");
const cors = require("cors");

require("./mongoose/mongooseConnect");

const {getAllUsers, getUserSession, login, logout, register} = require("./controllers/authController");
const {getAllRecipes, addRecipe, deleteRecipe} = require("./controllers/recipesController");

const app = express();

app.use(cors());
app.use(express.json());

app.use(
  session({
    resave: true, // Forces the session to be saved back to the session store, even if the session was never modified during the request.
    saveUninitialized: true, // Forces a session that is "uninitialized" to be saved to the store. False is useful when you need to require permission before setting a cookie.
    secret: "demoSecret", // Kind of a hash for verifying cookie sessions.
    cookie: {
      expires: 20 * 1000
    }
  })
);

// Authorization endpoints
app.get("/api/userAll", getAllUsers); // Dummy endpoint to confirm the server is working
app.get("/api/userSession", getUserSession); // Endpoint to check if session exists
app.post("/auth/login", login);
app.post("/auth/logout", logout);
app.post("/auth/register", register);

// Drink endpoints
app.get("/drinks/recipe", getAllRecipes);
app.post("/drinks/recipe", addRecipe);
app.delete("/drinks/recipe", deleteRecipe);

app.listen(5005, () => console.log("Server is ready on port 5005"));