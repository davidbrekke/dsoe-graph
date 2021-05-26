'use strict'

const sql = require('mssql') // https://www.npmjs.com/package/mssql

// importing all the sql functions
const courses = require('./courses')
const users = require('./users')
const plans = require('./plans')

/*
// dataClient is a function that takes a config and 
// returns an object with
*/
const dataClient = async (config) => {
  let pool = null

  const closePool = async () => {
    try {
      await pool.close()
      pool = null
    } catch (err) {
      pool = null
      console.log('❌ pool close error', err)
    }
  }

  const getConnection = async () => {
    try {
      if (pool) return

      pool = await sql.connect(config.sql)

      pool.on('error', async (err) => {
        console.log(err)
        await closePool()
      })
      return
    } catch (err) {
      console.log('❌ pool connection error', err)
      pool = null
    }
  }

  return {
    courses: await courses.register({ sql, getConnection, closePool }),
    users: await users.register({ sql, getConnection, closePool }),
    plans: await plans.register({ sql, getConnection, closePool }),
  }
}

module.exports = { dataClient }
