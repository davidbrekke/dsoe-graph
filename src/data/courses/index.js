'use strict'

/*
 * TODO:
 *       [] getCourse SQL
 *       [] updateCourse SQL
 *       [] deleteCourse SQL
 */

const { loadSqlQueries } = require('../utils')

const register = async ({ sql, getConnection, closePool }) => {
  const sqlQueries = await loadSqlQueries('courses')

  const getAllCourses = async () => {
    await getConnection()
    const request = new sql.Request()
    const results = await request.query(sqlQueries.getAllCourses)
    if (results) {
      closePool()
      return results
    }
  }
  const getCourse = async (course_id) => {
    /*
     * TODO: getCourse SQL
     */
    await getConnection()
    const request = new sql.Request()
    request.input('course_id', course_id)
    const results = await request.query(sqlQueries.getCourse)
    if (results) {
      closePool()
      return results
    }
  }

  const createCourse = async ({
    course_title,
    course_code,
    credits,
    course_description,
    required,
  }) => {
    await getConnection()
    const request = new sql.Request()
    request.input('course_title', course_title)
    request.input('course_code', course_code)
    request.input('credits', credits)
    request.input('course_description', course_description)
    request.input('required', required)
    const results = await request.query(sqlQueries.createCourse)
    if (results) {
      closePool()
      return results
    }
  }
  const updateCourse = async ({
    /*
     * TODO: updateCourse SQL
     */
    course_id,
    course_title,
    course_code,
    credits,
    course_description,
    required,
  }) => {
    await getConnection()
    const request = new sql.Request()
    request.input('course_id', course_id)
    request.input('course_title', course_title)
    request.input('course_code', course_code)
    request.input('credits', credits)
    request.input('course_description', course_description)
    request.input('required', required)
    const results = await request.query(sqlQueries.updateCourse)
    if (results) {
      closePool()
      return results
    }
  }
  const deleteCourse = async (course_id) => {
    await getConnection()
    const request = new sql.Request()
    request.input('course_id', course_id)
    const results = await request.query(sqlQueries.deleteCourse)
    if (results) {
      closePool()
      return results
    }
  }

  return {
    getAllCourses,
    getCourse,
    createCourse,
    updateCourse,
    deleteCourse,
  }
}

module.exports = { register }
