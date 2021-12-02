const bcrypt = require("bcrypt");
const User = require("../mongoose/mongooseSchema");

require("../mongoose/mongooseConnect");

module.exports = {
    getAllUsers: async (req, res) => {
        let results = await User.find({});
        res.status(200).send(results);
    },
    getUserSession: async (req, res) => {
        if(req.session.user) {
            return res.status(200).send(req.session.user);
        } else {
            return res.status(400).send("No session exists");
        }
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

        req.session.user = returnUser;
      
        return res.status(200).send(returnUser);
    },
    logout: async (req, res) => {
        req.session.destroy();
        res.status(200).send("User has logged out");
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
        const {_id, firstName, lastName, email: userEmail, recipes} = myData;

        myData.save()
            .then(() => {
                let returnUser = {
                    _id,
                    firstName,
                    lastName,
                    userEmail,
                    recipes
                  }
                req.session.user = returnUser;
                res.send("User saved to database");
            })
            .catch((err) => {
                console.log(err);
                res.status(400).send(err);
            });
    }
}

