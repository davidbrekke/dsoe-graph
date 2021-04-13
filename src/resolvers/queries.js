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

  courses: async (parent, args, { db }) => {
    try {
      const response = await db.courses.getCourses();
      console.log(`📥 QUERY: courses -> ${response ? 'success' : 'error'}`);
      return response.recordset;
    } catch (err) {
      console.log(err);
    }
  },
  course: (parent, { course_id }, { db }) => {
    return course_id;
  },
};

module.exports = queries;
