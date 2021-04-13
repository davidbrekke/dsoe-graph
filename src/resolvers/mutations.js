'use strict';

const mutations = {
  createCourse: async (
    parent,
    { course_title, course_code, credits, course_description, required },
    { db }
  ) => {
    try {
      const response = await db.courses.createCourse({
        course_title,
        course_code,
        credits,
        course_description,
        required,
      });
      console.log(`📤 MUTATION: createCourse -> ${course_title}`);

      return response.recordset;
    } catch (err) {
      console.log(err);
    }
  },
};

module.exports = mutations;
