import knex from "knex";

export const knexCon = knex({
  client: 'pg',
  connection: {
    host : process.env.DB_HOST,
    port : parseInt(<string>process.env.DB_PORT, 10),
    user : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_NAME,
    ssl: {rejectUnauthorized: false}
  }
});