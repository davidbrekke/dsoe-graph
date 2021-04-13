'use strict';

const { ApolloServer } = require('apollo-server');

const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const { dataClient } = require('./data');

const app = async (config) => {
  try {
    const server = new ApolloServer({
      cors: {
        origin: '*',
      },
      typeDefs,
      resolvers,
      context: async () => ({ db: await dataClient(config) }),
    });
    return server;
  } catch (err) {
    console.log('❌ server error', err);
  }
};

module.exports = app;
