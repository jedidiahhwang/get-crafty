const express = require("express");
const session = require("express-session");
const cors = require("cors");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
require("./mongoose/mongooseConnect");
const User = require("./mongoose/mongooseSchema");

const {getAllUsers} = require("./controllers/authController");

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

app.get("/api/user", getAllUsers);

// app.post("/api/login", async (req, res) => {
//   const {email, password} = req.body;

//   let results = await User.findOne({email: email});

//   const {_id, firstName, lastName, email: userEmail, recipes} = results;
  
//   if(Object.keys(results).length === 0) {
//     return res.status(400).send("User does not exist.");
//   };

//   const isAuthenticated = bcrypt.compareSync(password, results.password);

//   if(!isAuthenticated) {
//     return res.status(403).send("Incorrect password");
//   }

//   // Create a new object to return with the password filtered out, so front end doesn't get hash.
//   let returnUser = {
//     _id,
//     firstName,
//     lastName,
//     userEmail,
//     recipes
//   }

//   return res.status(200).send(returnUser);
// });

// app.post("/api/user", async (req, res) => {
//   const {email, password} = req.body;

//   let results = await User.findOne({email: email});

//   console.log(results);

//   if(results) {
//     return res.status(409).send("User already exists");
//   }

//   const salt = bcrypt.genSaltSync(10);
//   const passwordHash = bcrypt.hashSync(password, salt);

//   req.body.password = passwordHash;

//   let myData = new User(req.body);
//   myData.save()
//     .then(() => {
//       res.send("User saved to database");
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(400).send(err);
//     });
// });

app.listen(5005, () => console.log("Server is ready on port 5005"));