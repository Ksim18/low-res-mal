/**
 * @param { import("knex").Knex } knex
 * @returns {Knex.SchemaBuilder}
 */
exports.up = function(knex) {
  return knex.schema.createTableIfNotExists("users", (table)=> {
    table.increments();
    table.string("username").notNullable();
    table.string("password").notNullable();
    table.integer("age");
    table.string("city");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns {Knex.SchemaBuilder}
 */
exports.down = function(knex) {
  return knex.schema.dropTable("users");
};
