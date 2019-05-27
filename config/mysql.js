const mysql = require('mysql');
const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'MyNewPass4!',
  database: 'wall_admin',
  connectionLimit: 20
});
module.exports = connection;
