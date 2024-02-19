const knex = require("knex")(require("../knexfile"));

const getAllListings = async (_req, res) => {
  console.log("hi");
  try {
    const data = await knex("listings");
    res.status(200).json(data);
  } catch (err) {
    res.status(400).send(`Error retrieving listings: ${err}`);
  }
};

module.exports = { getAllListings };
