const mysql = require('mysql2/promise');
require('dotenv').config();

// Create the connection to database
async function getConnection() {
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    });
    return connection;
}


// Xuất ra connection
module.exports = {
    getConnection
};
