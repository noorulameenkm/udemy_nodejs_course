const mysql = require('mysql2');



const connectionPool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node-complete',
    password: 'noorul123'
});


module.exports = connectionPool.promise();
