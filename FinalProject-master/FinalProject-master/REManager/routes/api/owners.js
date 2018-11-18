const router = require("express").Router();
const ownersController = require("../../controllers/ownersController");

// Matches with "/api/books"
router.route("/")
  .get(ownersController.findAll)
  .post(ownersController.create);

  //daisy chaining
  //personal style 
  // don;t have to do it like that

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(ownersController.findById)
  .put(ownersController.update)
  .delete(ownersController.remove);

module.exports = router;
//http methods
//half part is on the controller folder
// you can keep them together