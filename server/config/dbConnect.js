const mysql = require("mysql2");

const db = mysql.createPool({
    connectionLimit: 10, 
    host: 'db4free.net',
    user: 'riyagandhiiiiiii',
    password: 'Tower@321',
    database: 'instagramclonerg'
});

module.exports = db;
