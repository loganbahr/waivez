/**
 * @file index.js
 * @author Devin Arena
 * @description Main file for the backend server of waivez
 * @since 3/10/2022
*/
const PORT = 5000; // still kinda undecided, consult with Logan

const express = require('express');
require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool(
    {
        user: process.env.PGUSER,
        host: process.env.PGHOST,
        database: process.env.PGDB,
        password: process.env.PGPASS,
        port: process.env.PGPORT,
    }
);

// Gonna have to fix cors eventually.
const app = express();

/**
 * Test request to ping the server.
 */
app.get('/user/:id', (req, resp) => {
    const id = req.params.id;

    pool.query('SELECT * FROM users WHERE id=$1', [id], (err, res) => {
        if (err) {
            resp.send(err.message);
        } else {
            resp.send({
                id: id,
                first_name: res.rows[0].first_name,
                last_name: res.rows[0].last_name,
                date_of_birth: res.rows[0].date_of_birth,
                address: res.rows[0].address,
                email: res.rows[0].email,
                phone_number: res.rows[0].phone_number,
            });
        }
        pool.end();
    });
});

app.listen(PORT);
console.log('Server started on port ' + PORT);