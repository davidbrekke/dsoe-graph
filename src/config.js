'use strict';

const dotenv = require('dotenv');
const assert = require('assert');

dotenv.config();

const {
  PORT,
  HOST,
  SQL_SERVER,
  SQL_USER,
  SQL_PASSWORD,
  SQL_DATABASE,
} = process.env;

assert(PORT, 'PORT is required');
assert(HOST, 'HOST is required');
assert(SQL_SERVER, 'SQL_SERVER is required');
assert(SQL_USER, 'SQL_USER is required');
assert(SQL_PASSWORD, 'SQL_PASSWORD is required');
assert(SQL_DATABASE, 'SQL_DATABASE is required');

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
};
