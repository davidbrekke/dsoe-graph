'use strict'

// this file combines the query resolvers and mutation resolvers into a single 'resolvers' object
// this is how apolloserver expects it

const queries = require('./queries')
const mutations = require('./mutations')

const resolvers = { Query: queries, Mutation: mutations }

module.exports = resolvers
