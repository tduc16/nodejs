const express = require('express');
const dotenv = require('dotenv');
const webrouter = require('./src/routes/web'); // KHÔNG cần thêm .js
const mysql = require('mysql2/promise');
const configViewEngine = require('./src/config/viewEngine');
const { getConnection } = require('./src/config/database'); // import từ module.exports

// Gọi dotenv
dotenv.config();

const app = express();
const port = process.env.PORT || 8000;
const hostname = process.env.HOSTNAME;

// View engine
configViewEngine(app);

// Test connection
async function testDatabase() {
  const connection = await getConnection(); // <- Gọi đúng connection
  const [err, results, fields] = await connection.query('SELECT * FROM users');
  console.log('>>>Results', results);
}

// Static file (đã được gọi trong configViewEngine)
testDatabase();
// Khai báo route
app.use('/', webrouter);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
