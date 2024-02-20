const knex = require("knex")(require("../knexfile"));

// homepage
const getAllListings = async (_req, res) => {
  try {
    const data = await knex("listings");
    res.status(200).json(data);
  } catch (err) {
    res.status(400).send(`Error retrieving listings: ${err}`);
  }
};

// homepage - clicking single listing
const findSingleListing = async (req, res) => {
  try {
    // find id in listings
    const listingsFound = await knex("listings").where({ id: req.params.id });

    // check if exists
    if (listingsFound.length === 0) {
      return res
        .status(404)
        .json({ message: `User with ID ${req.params.id} not found.` });
    }

    // return the listing if exists
    const listingData = listingsFound[0];
    res.json(listingData);
  } catch (error) {
    res.status(500).json({
      message: `Unable to retrieve user data for user with ID ${req.params.id}`,
    });
  }
};

module.exports = { getAllListings, findSingleListing };
