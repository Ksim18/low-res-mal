/**
 * @param { import("knex").Knex } knex
 * @returns {Knex.SchemaBuilder}
 */
exports.up = function(knex) {
  return knex.schema.createTableIfNotExists("anime", (table)=> {
    table.increments();
    table.string("title").notNullable();
    table.string("studio").notNullable();
    table.float("avg_score");
    table.specificType("genre", "text ARRAY");
    table.date("start_year");
    table.date("end_year");
    table.enum("status", ["anonsed", "airing", "finished"]);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns {Knex.SchemaBuilder}
 */
exports.down = function(knex) {
  return knex.schema.dropTable("anime");
};
