import mysql from 'mysql2';
import 'dotenv/config';

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
}).promise();

async function getNotes() {
    const [rows] = await pool.query("SELECT * FROM series");
    return rows;
}

const notes = await getNotes();
console.log(notes);