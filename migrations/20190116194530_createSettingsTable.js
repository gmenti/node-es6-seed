const { knexHelper } = require('../src/helpers');

/**
 * @param {import('knex')} knex
 */
const up = knex => {
  return knex.schema.createTable('settings', (tableBuilder) => {
    tableBuilder.bigIncrements('id').unsigned().primary();
    tableBuilder.string('name').notNullable().unique();
    tableBuilder.enum('type', ['BOOLEAN', 'NUMBER', 'FLOAT', 'STRING', 'OBJECT']).notNullable();
    tableBuilder.text('value').notNullable();
    knexHelper.addCreatedAt(knex, tableBuilder);
    knexHelper.addUpdatedAt(knex, tableBuilder);
  });
};

/**
 * @param {import('knex')} knex
 */
const down = knex => {
  return knex.schema.dropTableIfExists('settings');
};

module.exports = { up, down };
