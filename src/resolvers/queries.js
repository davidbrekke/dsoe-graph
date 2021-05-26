'use strict'

const queries = {
  users: async (parent, args, { db }) => {
    try {
      const response = await db.users.getAllUsers()
      console.log(`📥 QUERY: users -> ${response ? 'success' : 'error'}`)
      return response.recordset
    } catch (err) {
      console.log(err)
    }
  },
  user: async (parent, { user_id }, { db }) => {
    try {
      const response = await db.users.getUser(user_id)
      console.log(`📥 QUERY: user -> ${response ? 'success' : 'error'}`)
      return response.recordset
    } catch (err) {
      console.log(err)
    }
  },
  userAzureToken: async (parent, { azure_token }, { db }) => {
    try {
      const response = await db.users.getUserByAzureToken(azure_token)
      console.log(
        `📥 QUERY: user by azure token -> ${response ? 'success' : 'error'}`
      )
      return response.recordset[0]
    } catch (err) {
      console.log(err)
    }
  },

  courses: async (parent, args, { db }) => {
    try {
      const response = await db.courses.getAllCourses()
      console.log(`📥 QUERY: courses -> ${response ? 'success' : 'error'}`)
      return response.recordset
    } catch (err) {
      console.log(err)
    }
  },
  course: async (parent, { course_id }, { db }) => {
    try {
      const response = await db.courses.getCourse(course_id)
      console.log(response)
      console.log(`📥 QUERY: course -> ${response ? 'success' : 'error'}`)
      return response.recordset[0]
    } catch (err) {
      console.log(err)
    }
  },
}

module.exports = queries
