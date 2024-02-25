const knex = require("knex")(require("../knexfile"));

const getAllListings = async (_req, res) => {
  try {
    const data = await knex("listings");
    res.status(200).json(data);
  } catch (err) {
    res.status(400).send(`Error retrieving listings: ${err}`);
  }
};

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

const createListing = async (req, res) => {
  // check if these values are provided
  if (
    !req.body.series ||
    !req.body.name ||
    !req.body.price ||
    !req.body.contact ||
    !req.body.user_id
  ) {
    return res.status(400).json({
      message: "Please provide all values for the listings in the request",
    });
  }

  try {
    // insert into the table
    const [newListing] = await knex("listings").insert(req.body);
    const createdListing = await knex("listings").where({ id: newListing }).first();
    res.status(200).json(createdListing);
  } catch (error) {
    res.status(500).json({
      message: `Unable to create listing`,
    });
  }
};

const editListing = async (req, res) => {
  try {
    // update any changes made
    const rowsUpdated = await knex("listings")
      .where({ id: req.params.id })
      .update(req.body);

    // check if nothing was updated
    if (rowsUpdated === 0) {
      return res
        .status(404)
        .json({ message: `Listing with ID ${req.params.id} not found` });
    }

    const updatedListing = await knex("listings").where({ id: req.params.id });

    res.json(updatedListing[0]);
  } catch (error) {
    res.status(500).json({
      message: `Unable to update listing`,
    });
  }
};

const deleteListing = async (req, res) => {
  try {
    const rowsdeleted = await knex("listings").where({ id: req.params.id }).delete();

    if (rowsdeleted === 0) {
      return res
        .status(404)
        .json({ message: `Listing with ID ${req.params.id} not found` });
    }

    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({
      message: `Unable to delete listing`,
    });
  }
};

module.exports = {
  getAllListings,
  findSingleListing,
  createListing,
  editListing,
  deleteListing,
};
