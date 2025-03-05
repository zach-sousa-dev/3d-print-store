import mysql from 'mysql2';
import 'dotenv/config';

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
}).promise();

/**
 * Gets all rows from a table
 * @param {*} table 
 * @returns rows JSON
 */
export async function getAllFrom(table) {
    if(table === "series") {
        const [rows] = await pool.query("SELECT * FROM series");
        return rows;
    } else if(table === "products") {
        const [rows] = await pool.query("SELECT * FROM products");
        return rows;
    } else if(table === "images") {
        const [rows] = await pool.query("SELECT * FROM images");
        return rows;
    } else if(table === "emails") {
        const [rows] = await pool.query("SELECT * FROM emails");
        return rows;
    } else if(table === "orders") {
        const [rows] = await pool.query("SELECT * FROM orders");
        return rows;
    } else if(table === "order_lines") {
        const [rows] = await pool.query("SELECT * FROM order_lines");
        return rows;
    }

    throw new Error("Table does not exist.");
}

/**
 * getSeriesList
 * @returns array of all the rows in the series table
 */
export async function getSeriesList() {
    const [rows] = await pool.query("SELECT * FROM series");
    return rows;
}

/**
 * addSeries
 */
export async function addSeries(name, description) {
    const [rows] = await pool.query(`INSERT INTO series (series_name, series_description)
                                      VALUES (?, ?)`, [name, description]);
    return rows;
}

/**
 * deleteSeries
 */
export async function deleteSeries(id) {
    const [rows] = await pool.query(`DELETE FROM series
                                      WHERE series_id=?`, [id]);
    return rows;
}


// for testing
// const result = await getSeriesList();
// console.log(result);