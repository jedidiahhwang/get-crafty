const mongoose = require("mongoose");
require("./mongooseConnect");

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    password: String,
    email: String,
    recipes: [
        recipe = {
            idDrink: Number,
            name: String,
            ingredients: String,
            instructions: String
        }
    ]
});

let User = mongoose.model("User", userSchema);

module.exports = User;