/**
 * @typedef ExistsResult
 * @type {Object}
 * @property {String} id
 */

/**
 * @template T
 * @typedef {Promise<T> & { transacting: function(import('knex').Transaction): Promise<T> }} ResultTransaction
 */

/**
 * @template T
 */
class Model {
  /**
   * @param {String} tableName
   * @param {import('knex')} database
   */
  constructor(database, tableName) {
    this.tableName = tableName;
    this.database = database;
    this.transaction = this.database.transaction.bind(database);
  }

  /**
   * @return {import('knex').QueryBuilder}
   */
  get table() {
    return this.database(this.tableName);
  }

  /**
   * @param {String} id
   * @return {ResultTransaction<ExistsResult>}
   */
  exists(id) {
    return this.table.where('id', id).first('id');
  }

  /**
   * @return {ResultTransaction<T[]>}
   */
  all() {
    return this.table;
  }

  /**
   * @param {String} id
   * @return {ResultTransaction<T>}
   */
  getById(id) {
    return this.table.where('id', id).first();
  }

  /**
   * @param {Object|Object[]} data
   * @return {ResultTransaction<string[]>}
   */
  create(data) {
    return this.table.insert(data);
  }

  /**
   * @param {String} id
   * @param {Object} data
   * @return {ResultTransaction<void>}
   */
  update(id, data) {
    return this.table.where('id', id).update(data);
  }

  /**
   * @param {String} id
   * @return {ResultTransaction<void>}
   */
  delete(id) {
    return this.table.where('id', id).delete();
  }
}

module.exports = Model;
