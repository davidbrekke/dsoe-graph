'use strict';

const { gql } = require('apollo-server');

const typeDefs = gql`
  #/* ---------------------- TYPES --------------------- */
  type User {
    user_id: String!
    advisor_id: String
    first_name: String
    last_name: String
    email: String
    azure_token: String
    is_admin: Boolean
    date_added: String
    date_modified: String
    date_deleted: String
    inserted_by: String
    updated_by: String
    comment_set_id: String
  }
  type Course {
    course_id: String!
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
    comment_set_id: String
  }
  type Program {
    program_id: String!
    program_code: String
    program_name: String
    program_description: String
    program_credits: Int
    comment_set_id: String
  }
  type Class {
    class_id: String!
    course_id: String!
    spec_term_id: String!
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
    comment_set_id: String
  }
  type SpecificTerm {
    spec_term_id: String!
    general_term_id: String!
    year: Int
    credits: Int
    date_added: String
    date_modified: String
    date_deleted: String
    inserted_by: String
    updated_by: String
    comment_set_id: String
  }
  type Term {
    term_id: String!
    season: String
    class_level: String
    date_added: String
    date_modified: String
    date_deleted: String
    inserted_by: String
    updated_by: String
    comment_set_id: String
  }
  type AcademicPlan {
    plan_id: String!
    user: User
    plan_parent: AcademicPlan
    established_date: String
    closed_date: String
    date_added: String
    date_modified: String
    date_deleted: String
    inserted_by: String
    updated_by: String
    comment_set_id: String
  }
  #/* ---------------------- QUERIES --------------------- */
  type Query {
    users: [User]
    user(user_id: ID!): User
    userAzureToken(azure_token: String!): User
    courses: [Course]
    course(course_id: ID!): Course
  }
  #/* ---------------------- MUTATIONS --------------------- */
  type Mutation {
    #/* ------------ users ----------- */
    createUser(
      first_name: String
      last_name: String
      email: String
      azure_token: String
      is_admin: Boolean
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
    deleteCourse(course_id: String!): Course
  }
`;

module.exports = typeDefs;
