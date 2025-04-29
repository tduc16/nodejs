const express = require('express');
const dotenv = require('dotenv');
const webrouter = require('./src/routes/web'); 
const mysql = require('mysql2/promise');
const configViewEngine = require('./src/config/viewEngine');
const connection = require('./src/config/database');

// Gọi dotenv
dotenv.config();

const app = express();
const port = process.env.PORT || 8000;
const hostname = process.env.HOSTNAME;

// View engine
configViewEngine(app);

  connection.query(
    'SELECT * FROM users ',
    function(err, results, fields){
      console.log(">>results", results);
    }
  )

// Static file (đã được gọi trong configViewEngine)
// Khai báo route
app.use('/', webrouter);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
