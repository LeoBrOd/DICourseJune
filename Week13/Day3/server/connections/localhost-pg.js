const knex = require("knex");
const dotenv = require("dotenv");
dotenv.config();

//require("dotenv").config(); --- 2nd option

const db = knex({
  client: "pg",
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    //ssl:{rejectUnauthorized:flase}  --- for heroku or db with free plan
  },
});

module.exports = db;
