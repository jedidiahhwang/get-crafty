const express = require("express");
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
  recipes: {}
});

let User = mongoose.model("User", userSchema);

const app = express();

app.use(express.json());

app.get("/api/addUser", (req, res) => {
  res.status(200).send("Hello world");
});

app.post("/api/addUser", (req, res) => {
  console.log(req.body);
  let myData = new User(req.body);
  myData.save()
    .then((response) => {
      res.send("User saved to database");
    })
    .catch((err) => {
      res.status(400).send("Unable to save to database");
    });
});

app.listen(5005, () => console.log("Server is ready on port 5005"));