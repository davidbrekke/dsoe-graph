'use strict';

/*
 * TODO:
 *       [] getPlans SQL
 *       [] getPlan SQL
 *       [] createPlan SQL
 *       [] updatePlan SQL
 *       [] deletePlan SQL
 */

const { loadSqlQueries } = require('../utils');

const register = async ({ sql, getConnection, closePool }) => {
  const sqlQueries = await loadSqlQueries('plans');

  const getPlans = async () => {
    /*
     * TODO: getPlans SQL
     */
    await getConnection();
    const request = new sql.Request();
    const results = await request.query(sqlQueries.getPlans);
    if (results) {
      closePool();
      return results;
    }
  };
  const getPlan = async () => {
    /*
     * TODO: getPlan SQL
     */
    await getConnection();
    const request = new sql.Request();
    const results = await request.query(sqlQueries.getPlan);
    if (results) {
      closePool();
      return results;
    }
  };

  const createPlan = async ({
    user_id,
    plan_parent,
    established_date,
    date_added,
    inserted_by,
  }) => {
    /*
     * TODO: createPlan SQL
     */
    await getConnection();
    const request = new sql.Request();
    request.input('user_id', user_id);
    request.input('plan_parent', plan_parent);
    request.input('established_date', established_date);
    request.input('date_added', date_added);
    request.input('inserted_by', inserted_by);
    const results = await request.query(sqlQueries.createPlan);
    if (results) {
      closePool();
      return results;
    }
  };
  const updatePlan = async ({
    user_id,
    plan_parent,
    established_date,
    date_modified,
    updated_by,
  }) => {
    /*
     * TODO: updatePlan SQL
     */
    await getConnection();
    const request = new sql.Request();
    request.input('user_id', user_id);
    request.input('plan_parent', plan_parent);
    request.input('established_date', established_date);
    request.input('date_modified', date_modified);
    request.input('updated_by', updated_by);
    const results = await request.query(sqlQueries.updatePlan);
    if (results) {
      closePool();
      return results;
    }
  };
  const deletePlan = async ({
    user_id,
    date_modified,
    date_deleted,
    updated_by,
  }) => {
    /*
     * TODO: deletePlan SQL
     */
    await getConnection();
    const request = new sql.Request();
    request.input('user_id', user_id);
    request.input('date_modified', date_modified);

    request.input('date_deleted', date_deleted);
    request.input('updated_by', updated_by);

    const results = await request.query(sqlQueries.deletePlan);
    if (results) {
      closePool();
      return results;
    }
  };

  return {
    getPlans,
    getPlan,
    createPlan,
    updatePlan,
    deletePlan,
  };
};

module.exports = { register };
