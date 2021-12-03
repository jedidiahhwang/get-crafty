const User = require("../mongoose/mongooseSchema");

require("../mongoose/mongooseConnect");

module.exports = {
    getAllRecipes: async (req, res) => {
        if(!req.session.user) {
            return res.status(400).send("No user is logged in");
        } else {
            return res.status(200).send(req.session.user.recipes);
        }
    },
    addRecipe: async (req, res) => {
        const recipe = {
            name: "Gin and Tonic",
            ingredients: "Gin, tonic",
            instructions: "Pour together and mix"
        };

        if(!req.session.user) {
            return res.status(400).send("No user is logged in");
        } else {
            const currentUser = await User.findOne({email: req.session.user.email});
            console.log(currentUser);
            console.log(req.body);
            currentUser.recipes.push(req.body);
            currentUser.save();

            // const filter = {email: req.session.user.email};
            // await User.findOneAndUpdate(filter, {$push: {recipes: req.body}}, {new: true});
            return res.status(200).send(currentUser);
        }
    },
    deleteRecipe: async (req, res) => {
        if(!req.session.user) {
            return res.status(400).send("No user is logged in ");
        } else {
            const {id} = req.params;
            const currentUser = req.session.user;
            for(let i = 0; i < currentUser.recipes.length; i++){
                if(currentUser.recipes[i].idDrink === id) {
                    currentUser.recipes.splice(i, 1);
                    return;
                }
            }
            res.status(200).send("Recipe successfully removed");
        }
    }
}