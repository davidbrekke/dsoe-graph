'use strict'

// apollo server is a module that makes it easy to set up a graphql server
const { ApolloServer } = require('apollo-server')

// all that apollo server needs is a data sheme (typeDefs)
// and functions called resolvers to tell the server how to handle requests
const typeDefs = require('./schema')
const resolvers = require('./resolvers')

// dataClient is a function that gives us access to the database
const { dataClient } = require('./data')

// this function, app, creates a server with the above info and returns that server
// the config object is passed in by index.js and used to configure the server
const app = async (config) => {
  try {
    const server = new ApolloServer({
      // cors makes sure this server can talk to other servers outside of its domain
      cors: {
        origin: '*',
      },
      typeDefs, // the data schema
      resolvers, // functions that define how to handle requests

      // context is an object from apollo that we can pass anything
      // and then we can have access to that context within all of
      // our resolver functions

      // In our case, we are giving it an object with a db (database) property
      // and calling the dataClient function which returns our database

      // so now we have access to the database in all of our resolver funcitons
      context: async () => ({ db: await dataClient(config) }),
    })
    return server
  } catch (err) {
    console.log('❌ server error', err)
  }
}

module.exports = app
