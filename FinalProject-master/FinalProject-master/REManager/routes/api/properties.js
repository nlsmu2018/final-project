const router = require("express").Router();
const propertiesController = require("../../controllers/propertiesController");

// Matches with "/api/books"
router.route("/")
  .get(propertiesController.findAll)
  .post(propertiesController.create);

  //daisy chaining
  //personal style 
  // don;t have to do it like that

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(propertiesController.findById)
  .put(propertiesController.update)
  .delete(propertiesController.remove);

module.exports = router;
//http methods
//half part is on the controller folder
// you can keep them together