import mysql from 'mysql2';
import 'dotenv/config';

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
}).promise();

/**
 * getSeriesList
 * @returns array of all the rows in the series table
 */
export async function getSeriesList() {
    const [rows] = await pool.query("SELECT * FROM series");
    return rows;
}

// for testing
const result = await getSeriesList();
console.log(result);