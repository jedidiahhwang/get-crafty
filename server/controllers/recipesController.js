const User = require("../mongoose/mongooseSchema");

require("../mongoose/mongooseConnect");

/*
    Every endpoint has a preliminary check to make sure there is a session. Even though you
    can assume that there is always a session to access recipes, this is just a safety check, 
    along with using Postman.
*/

module.exports = {
    getAllRecipes: async (req, res) => {
        if(!req.session.user) {
            return res.status(400).send("No user is logged in");
        } else {
            return res.status(200).send(req.session.user.recipes);
        }
    },
    addRecipe: async (req, res) => {
        if(!req.session.user) {
            return res.status(400).send(req.session.user);
        } else {
            // Grab the current user using the session user's email.
            const currentUser = await User.findOne({email: req.session.user.email});

            currentUser.recipes.push(req.body); // Assuming the data is saved on body.
            currentUser.save();

            req.session.user = currentUser;

            req.session.save((err) => {
                req.session.reload((err) => {

                })
            });

            return res.status(200).send(currentUser);
        }
    },
    deleteRecipe: async (req, res) => {
        if(!req.session.user) {
            return res.status(400).send("No user is logged in ");
        } else {
            // Grab the current user using the session user's email.
            const currentUser = await User.findOne({email: req.session.user.email});

            // Grab the drink's id off of the body (for now).
            const {idDrink: selectedId} = req.body;

            // Cycle through the recipes array and check the drink ID to see if it matches the selected.
            for(let i = 0; i < currentUser.recipes.length; i++){
                if(currentUser.recipes[i].idDrink === selectedId) {
                    currentUser.recipes.splice(i, 1);
                    currentUser.save();

                    return res.status(200).send("Recipe successfully removed");
                }
            }
            return res.status(400).send("Recipe not found");
        }
    }
}