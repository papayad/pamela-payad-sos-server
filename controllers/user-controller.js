const knex = require("knex")(require("../knexfile"));

const getAllUsers = async (_req, res) => {
  try {
    const data = await knex("user");
    res.status(200).json(data);
  } catch (err) {
    res.status(400).send(`Error retrieving Users: ${err}`);
  }
};

// get all specific users listings (my listings page)
const getUsersListings = async (req, res) => {
  try {
    const listings = await knex("user")
      .join("listings", "listings.user_id", "user.id")
      .where({ user_id: req.params.id });

    res.json(listings);
  } catch (error) {
    res.status(500).json({
      message: `Unable to retrieve posts for user with ID ${req.params.id}: ${error}`,
    });
  }
};

module.exports = { getAllUsers, getUsersListings };
