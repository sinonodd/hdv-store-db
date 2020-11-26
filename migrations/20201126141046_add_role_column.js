exports.up = (knex,promise)=>{
    return knex.schema.table('usr', (table)=>{
        table.integer('role_id').unsigned().references('id').inTable('role')
    });
}
exports.down = (knex,promise)=> {
    return knex.schema.table('usr', (table)=>{
        table.dropColumn('role_id')
    });
}
