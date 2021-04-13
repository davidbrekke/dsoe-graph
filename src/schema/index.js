'use strict';

const { gql } = require('apollo-server');

const typeDefs = gql`
  #/* ---------------------- TYPES --------------------- */
  type User {
    user_id: ID!
    advisor_id: ID
    first_name: String
    last_name: String
    email: String
    password: String
    is_admin: Boolean
    date_added: String
    date_modified: String
    date_deleted: String
    inserted_by: String
    updated_by: String
    comment_set_id: ID
  }
  type Course {
    course_id: ID!
    course_code: String
    credits: Int
    prerequisite_id: Int
    course_title: String
    course_description: String
    program: Program
    required: Boolean
    instruction_type: String
    category: String
    sub_category: String
    date_added: String
    date_modified: String
    date_deleted: String
    inserted_by: String
    updated_by: String
    comment_set_id: ID
  }
  type Program {
    program_id: ID!
    program_code: String
    program_name: String
    program_description: String
    program_credits: Int
    comment_set_id: ID
  }
  type Class {
    class_id: ID!
    course_id: ID!
    spec_term_id: ID!
    start_date: String
    end_date: String
    specificTerm: SpecificTerm
    startDate: String
    endDate: String
    date_added: String
    date_modified: String
    date_deleted: String
    inserted_by: String
    updated_by: String
    comment_set_id: ID
  }
  type SpecificTerm {
    spec_term_id: ID!
    general_term_id: ID!
    year: Int
    credits: Int
    date_added: String
    date_modified: String
    date_deleted: String
    inserted_by: String
    updated_by: String
    comment_set_id: ID
  }
  type Term {
    term_id: ID!
    season: String
    class_level: String
    date_added: String
    date_modified: String
    date_deleted: String
    inserted_by: String
    updated_by: String
    comment_set_id: ID
  }
  type AcademicPlan {
    plan_id: ID!
    user_id: ID
    plan_parent: String
    established_date: String
    closed_date: String
    date_added: String
    date_modified: String
    date_deleted: String
    inserted_by: String
    updated_by: String
    comment_set_id: ID
  }
  #/* ---------------------- QUERIES --------------------- */
  type Query {
    users: [User]
    user(user_id: ID!, email: String): User
    courses: [Course]
    course(course_id: ID!): Course
  }
  #/* ---------------------- MUTATIONS --------------------- */
  type Mutation {
    #/* ------------ users ----------- */
    createUser(
      advisorId: Int
      first: String
      last: String
      email: String
      password: String
      isAdmin: Boolean
      dateAdded: Int
      lastModified: Int
      dateDeleted: Int
    ): User
    updateUser(
      userId: Int
      advisorId: Int
      first: String
      last: String
      email: String
      password: String
      isAdmin: Boolean
      dateAdded: Int
      lastModified: Int
      dateDeleted: Int
    ): User
    deleteUser(userId: Int): User

    #/* ------------ courses ----------- */
    createCourse(
      course_title: String
      course_code: String
      credits: Int
      course_description: String
      required: Boolean
    ): Course
    updateCourse(
      courseId: Int
      courseCode: String
      courseDescription: String
      required: Boolean
      instructionType: String
      category: String
      subCategory: String
    ): Course
    deleteCourse(courseId: Int): Course
  }
`;

module.exports = typeDefs;
