/**
 * @param {import('knex')} knex
 */
const seed = async (knex) => {
  await knex('settings').insert([
    { name: 'CRON_EVERY_SECOND', type: 'STRING', value: '* * * * * *' },
  ]);
};

module.exports = { seed };
