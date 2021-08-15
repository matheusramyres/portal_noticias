const dotenv = require('dotenv').config();
const {Pool} = require('pg');

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DATABASE,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
});

console.log("Conexão realizada com sucesso!");

  module.exports = pool;