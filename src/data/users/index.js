'use strict';

/*
 * TODO:
 *       [] getUsers SQL
 *       [] getUser SQL
 *       [] createUser SQL
 *       [] updateUser SQL
 *       [] deleteUser SQL
 */

const { loadSqlQueries } = require('../utils');

const register = async ({ sql, getConnection, closePool }) => {
  const sqlQueries = await loadSqlQueries('users');

  const getUsers = async () => {
    /*
     * TODO: getUsers SQL
     */
    await getConnection();
    const request = new sql.Request();
    const results = await request.query(sqlQueries.getUsers);
    if (results) {
      closePool();
      return results;
    }
  };
  const getUser = async () => {
    /*
     * TODO: getUser SQL
     */
    await getConnection();
    const request = new sql.Request();
    const results = await request.query(sqlQueries.getUser);
    if (results) {
      closePool();
      return results;
    }
  };

  const getUserByAzureToken = async (azure_token) => {
    await getConnection();
    const request = new sql.Request();
    request.input('azure_token', azure_token);
    const results = await request.query(sqlQueries.getUserByAzureToken);
    if (results) {
      closePool();
      return results;
    }
  };

  const createUser = async ({
    first_name,
    last_name,
    email,
    is_admin,
    azure_token,
  }) => {
    /*
     * TODO: createUser SQL
     */
    await getConnection();
    const request = new sql.Request();
    request.input('first_name', first_name);
    request.input('last_name', last_name);
    request.input('email', email);
    request.input('is_admin', is_admin);
    request.input('azure_token', azure_token);
    const results = await request.query(sqlQueries.createUser);
    if (results) {
      closePool();
      return results;
    }
  };
  const updateUser = async ({
    user_id,
    first_name,
    last_name,
    email,
    is_admin,
    date_added,
    date_modified,
    date_deleted,
    inserted_by,
    updated_by,
    comment_set_id,
  }) => {
    /*
     * TODO: updateUser SQL
     */
    await getConnection();
    const request = new sql.Request();
    request.input('user_id', user_id);
    request.input('first_name', first_name);
    request.input('last_name', last_name);
    request.input('email', email);
    request.input('is_admin', is_admin);
    request.input('date_added', date_added);
    request.input('date_modified', date_modified);
    request.input('date_deleted', date_deleted);
    request.input('inserted_by', inserted_by);
    request.input('updated_by', updated_by);
    request.input('comment_set_id', comment_set_id);
    const results = await request.query(sqlQueries.updateUser);
    if (results) {
      closePool();
      return results;
    }
  };
  const deleteUser = async ({
    user_id,
    date_modified,
    date_deleted,
    updated_by,
  }) => {
    /*
     * TODO: deleteUser SQL
     */
    await getConnection();
    const request = new sql.Request();
    request.input('user_id', user_id);
    request.input('date_modified', date_modified);

    request.input('date_deleted', date_deleted);
    request.input('updated_by', updated_by);

    const results = await request.query(sqlQueries.deleteUser);
    if (results) {
      closePool();
      return results;
    }
  };

  return {
    getUsers,
    getUser,
    getUserByAzureToken,
    createUser,
    updateUser,
    deleteUser,
  };
};

module.exports = { register };
