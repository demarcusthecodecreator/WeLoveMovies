const path = require("path");

require("dotenv").config();

const {
  DATABASE_URL = "postgresql://postgres@localhost/postgres",
} = process.env;

module.exports = {
  development: {

    //For hosted database
    // client: "pg",
    // connection: {
    //   connectionString: "postgres://qglieewgctwajs:fff18bee46a5c0074523f4c8a723f04f059868d096bc975597390949f9ea9233@ec2-35-153-35-94.compute-1.amazonaws.com:5432/d6g6nqg8j8u2ak",
    //   ssl: { rejectUnauthorized: false },
    // },

    //For Local Database
    client: "postgresql",
    connection: {
      database: 'postgres',
      user: 'postgres',
      password: ''
    },

    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },
};