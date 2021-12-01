const express = require("express");
const session = require("express-session");
const cors = require("cors");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://jedidiahhwang:!Finnegan042020!@get-crafty-test.auo7v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err));

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  password: String,
  email: String,
  recipes: [
    {
      recipe: {
        name: String,
        ingredients: String,
        instructions: String
      }
    }
  ]
});

let User = mongoose.model("User", userSchema);

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

app.get("/api/addUser", async (req, res) => {
  let results = await User.find({});
  res.status(200).send(results);
});

app.post("/api/addUser", (req, res) => {
  console.log(req.body);
  let myData = new User(req.body);
  myData.save()
    .then((result) => {
      res.send("User saved to database");
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send(err);
    });
});

app.listen(5005, () => console.log("Server is ready on port 5005"));