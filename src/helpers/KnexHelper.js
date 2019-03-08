class KnexHelper {
  /**
   * @param {import('knex')} knex
   * @param {import('knex').TableBuilder} tableBuilder
   */
  addUpdatedAt(knex, tableBuilder) {
    return tableBuilder
      .dateTime('updatedAt')
      .notNullable()
      .defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
  }

  /**
   * @param {import('knex')} knex
   * @param {import('knex').TableBuilder} tableBuilder
   */
  addCreatedAt(knex, tableBuilder) {
    return tableBuilder
      .dateTime('createdAt')
      .notNullable()
      .defaultTo(knex.fn.now());
  }
}

module.exports = KnexHelper;
