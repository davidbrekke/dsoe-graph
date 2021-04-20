'use strict';

const queries = {
  users: async (parent, { user_id, email }, { db }) => {
    try {
      const response = await db.users.getUsers();
      console.log(`📥 QUERY: users -> ${response ? 'success' : 'error'}`);
      return response.recordset;
    } catch (err) {
      console.log(err);
    }
  },
  user: (parent, { user_id, email }, { db }) => {
    return user_id, email;
  },
  userAzureToken: async (parent, { azure_token }, { db }) => {
    try {
      const response = await db.users.getUserByAzureToken(azure_token);
      console.log(
        `📥 QUERY: user by azure token -> ${response ? 'success' : 'error'}`
      );
      return response.recordset[0];
    } catch (err) {
      console.log(err);
    }
  },

  courses: async (parent, args, { db }) => {
    try {
      const response = await db.courses.getAllCourses();
      console.log(`📥 QUERY: courses -> ${response ? 'success' : 'error'}`);
      return response.recordset;
    } catch (err) {
      console.log(err);
    }
  },
  course: async (parent, { course_id }, { db }) => {
    try {
      const response = await db.courses.getCourse(course_id);
      console.log(response);
      console.log(`📥 QUERY: course -> ${response ? 'success' : 'error'}`);
      return response.recordset[0];
    } catch (err) {
      console.log(err);
    }
  },
};

module.exports = queries;
