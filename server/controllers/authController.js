const bcrypt = require("bcrypt");
require("mongoose");

require("../mongoose/mongooseConnect");
const User = require("../mongoose/mongooseSchema");

module.exports = {
    getAllUsers: async (req, res) => {
        let results = await User.find({});
        res.status(200).send(results);
    },
    login: async (req, res) => {
        const {email, password} = req.body;

        let results = await User.findOne({email: email});
      
        const {_id, firstName, lastName, email: userEmail, recipes} = results;
        
        if(Object.keys(results).length === 0) {
          return res.status(400).send("User does not exist.");
        };
      
        const isAuthenticated = bcrypt.compareSync(password, results.password);
      
        if(!isAuthenticated) {
          return res.status(403).send("Incorrect password");
        }
      
        // Create a new object to return with the password filtered out, so front end doesn't get hash.
        let returnUser = {
          _id,
          firstName,
          lastName,
          userEmail,
          recipes
        }
      
        return res.status(200).send(returnUser);
    },
    register: async (req, res) => {
        const {email, password} = req.body;

        let results = await User.findOne({email: email});

        if(results) {
            return res.status(409).send("User already exists");
        }

        const salt = bcrypt.genSaltSync(10);
        const passwordHash = bcrypt.hashSync(password, salt);

        req.body.password = passwordHash;

        let myData = new User(req.body);
        myData.save()
            .then(() => {
            res.send("User saved to database");
            })
            .catch((err) => {
            console.log(err);
            res.status(400).send(err);
            });
    }
}

