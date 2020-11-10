exports.up = function(knex) {
  return knex.schema.createTable('boletos', function(table) {
    table.increments();

    table.string('value_total').notNullable();
    table.string('value_parcelas').notNullable();
    table.string('date_vencimento').notNullable();
    table.string('payd_status').notNullable();

    table.string('user_id').notNullable();
    table.foreign('user_id').references('id').inTable('users');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('boletos');
};