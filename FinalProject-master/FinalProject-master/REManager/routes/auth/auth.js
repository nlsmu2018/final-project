// const router = require("express").Router();
// const propertiesController = require("../../controllers/propertiesController");

// // Matches with "/api/books"
// router.route("/")
//   .get(propertiesController.findAll)
//   .post(propertiesController.create);

//   //daisy chaining
//   //personal style 
//   // don;t have to do it like that

// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(propertiesController.findById)
//   .put(propertiesController.update)
//   .delete(propertiesController.remove);

// module.exports = router;

const express = require("express");
const router = express.Router();
const db = require("../../models");
router.post("/api/login", function(req, res){
    db.User.findOne({username:req.body.username},function(error, user){
        user.comparePassword(req.body.password, function (error, response) {
            if(error){
                res.send(error)
            }
            res.redirect("/profile");
        });
    })
})
router.post("/api/signup", function (req, res) {
    console.log(req.body);
    db.User.create(req.body, function (error, response) {
        if (error) {
            console.log(error);
            res.send(error)
        }
        else {
            res.json(response);
        }
    });
});

module.exports = router;