
exports.up = function(knex,promise) {
    return knex.schema.createTable('role',(table)=>{
      table.increments();
      table.text('name');
    });
  };
  
  exports.down = function(knex,promise) {
    return knex.schema.dropTable('role');
  };
