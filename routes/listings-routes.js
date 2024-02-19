const knex = require("knex")(require("../knexfile"));
const router = require("express").Router();
const listingsController = require("../controllers/listings-controller");

router.route("/").get(listingsController.getAllListings);

module.exports = router;
