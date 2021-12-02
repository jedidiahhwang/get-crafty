const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

require("../mongoose/mongooseConnect");
const User = require("../mongoose/mongooseSchema");

module.exports = {
    getAllUsers: async (req, res) => {
        let results = await User.find({});
        res.status(200).send(results);
    }
}

