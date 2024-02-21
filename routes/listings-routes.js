const knex = require("knex")(require("../knexfile"));
const router = require("express").Router();
const listingsController = require("../controllers/listings-controller");

router.route("/").get(listingsController.getAllListings);
router.route("/:id").get(listingsController.findSingleListing);
router.route("/").post(listingsController.createListing);

module.exports = router;
