'use strict'

// this is where all of our configuration variables are initialized

// this loads in the .env file and the environment variables
const dotenv = require('dotenv')
dotenv.config()

// library to help dev with what env vars are required
const assert = require('assert')

// destructuring the env vars for simpiler access
const { PORT, HOST, SQL_SERVER, SQL_USER, SQL_PASSWORD, SQL_DATABASE } =
  process.env

assert(PORT, 'PORT is required')
assert(HOST, 'HOST is required')
assert(SQL_SERVER, 'SQL_SERVER is required')
assert(SQL_USER, 'SQL_USER is required')
assert(SQL_PASSWORD, 'SQL_PASSWORD is required')
assert(SQL_DATABASE, 'SQL_DATABASE is required')

// exporting the env vars as an object for simple access throughout the server
module.exports = {
  port: PORT,
  host: HOST,
  sql: {
    server: SQL_SERVER,
    database: SQL_DATABASE,
    user: SQL_USER,
    password: SQL_PASSWORD,
    options: {
      encrypt: true,
      enableArithAbort: true,
    },
  },
}
