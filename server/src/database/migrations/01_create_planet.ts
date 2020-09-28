import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('planets', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('galaxy').notNullable();
        table.string('color').notNullable();
        table.integer('size').notNullable();
        table.integer('age').notNullable();
        table.integer('temperature').notNullable();
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('planets');
}