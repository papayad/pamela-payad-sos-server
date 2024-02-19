const knex = require("knex")(require("../knexfile"));
const router = require("express").Router();
const userController = require("../controllers/user-controller");

router.route("/").get(userController.getAllUsers);

module.exports = router;
