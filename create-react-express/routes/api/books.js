const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// searches for saved books
router.route("/api/books")
  .get(booksController.findAll)
//creates/posts a new book from mongo db
  .post(booksController.create);
//deletes a book with a id
router.route("/api/books/:id")
  .delete(booksController.remove);



module.exports = router;

