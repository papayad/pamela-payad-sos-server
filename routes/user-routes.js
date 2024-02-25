const knex = require("knex")(require("../knexfile"));
const router = require("express").Router();
const userController = require("../controllers/user-controller");

router.route("/").get(userController.getAllUsers);
router.route("/:id/listings").get(userController.getUsersListings);

module.exports = router;
