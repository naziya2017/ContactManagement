// db.js
const mysql = require('mysql2');

const connectDB = () => {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Naz@1705',
    database: 'contact_db'
  });

  connection.connect((err) => {
    if (err) {
      console.error('Error connecting to the database:', err);
      return;
    }
    console.log('Connected to the database');
  });

  return connection;
};

module.exports = connectDB;
