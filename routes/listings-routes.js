const knex = require("knex")(require("../knexfile"));
const router = require("express").Router();
const listingsController = require("../controllers/listings-controller");

router.route("/").get(listingsController.getAllListings);
router.route("/").post(listingsController.createListing);
router.route("/:id").get(listingsController.findSingleListing);
router.route("/edit/:id").patch(listingsController.editListing);
router.route("/:id").delete(listingsController.deleteListing);

module.exports = router;
