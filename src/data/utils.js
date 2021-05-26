'use strict'

// this file contains a utility function (loadSqlQueries) to load all the raw sql files into an object for simple access throughout the server

const fs = require('fs-extra')
const { join } = require('path')

const loadSqlQueries = async (folderName) => {
  const filePath = join(process.cwd(), 'src', 'data', folderName)
  const files = await fs.readdir(filePath)
  const sqlFiles = files.filter((file) => file.endsWith('.sql'))
  const queries = {}
  for (const sqlFile of sqlFiles) {
    const query = fs.readFileSync(join(filePath, sqlFile), {
      encoding: 'utf-8',
    })
    queries[sqlFile.replace('.sql', '')] = query
  }
  return queries
}

module.exports = {
  loadSqlQueries,
}
