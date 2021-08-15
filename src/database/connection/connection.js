const {Pool} = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'portal',
    password: 'postgres',
    port: 5432,
});

console.log("Conexão realizada com sucesso!");

  module.exports = pool;