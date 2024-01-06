const mysql = require("mysql2");

const db = mysql.createPool({
    connectionLimit: 10, 
    host: '',
    user: '',
    password: '',
    database: ''
});

module.exports = db;
