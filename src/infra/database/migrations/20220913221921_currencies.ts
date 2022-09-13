import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('currencies', (table) => {
    table
      .string('id')
      .primary()
      .defaultTo(knex.raw('gen_random_uuid()'))
      .unique()
      .unsigned();
    table.string('code').notNullable().unique();
    table.decimal('value', 10, 2).notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('currencies');
}
