const db = require("../models");
const passport = require('passport');
require('../config/passport')(passport);

//Mongoose query abstractions
module.exports = {
    createUser: function (req, res) {
        db.User.create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    createRecommendation: function (req, res) {
        console.log(req.body.data);
        db.Recommendation.create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }, 
    getRecommendation: function (req, res) {
        var id = req.params.id;
        db.Recommendation.find({receiver : id})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    getUser: function(req,res){
        db.User.findOne({id : req.params.id})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
};