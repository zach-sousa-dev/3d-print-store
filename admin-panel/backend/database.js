import mysql from 'mysql2';
import 'dotenv/config';

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: process.env.DB_PASSWORD,
    database: '3d_print_store'
}).promise();

const result = await pool.query("SELECT * FROM series");
console.log(result);