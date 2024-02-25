/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const usersData = require("../seed-data/users");
const listingsData = require("../seed-data/listings");

exports.seed = async function (knex) {
  await knex("listings").del();
  await knex("user").del();
  await knex("user").insert(usersData);
  await knex("listings").insert(listingsData);
};
