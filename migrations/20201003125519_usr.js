
exports.up = function(knex,promise) {
  return knex.schema.createTable('usr',(table)=>{
      table.increments();
      table.text('username').notNullable();
      table.integer('phone')
      table.text('email').notNullable();
      table.text('img_url');
      table.text('google_id').notNullable();
      table.boolean('banned').notNullable().default(false);
  })    
};

exports.down = function(knex,promise) {
  return knex.schema.dropTable('usr');
};
