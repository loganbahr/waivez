/**
 * @file index.js
 * @author Devin Arena
 * @description Main file for the backend server of waivez
 * @since 3/10/2022
*/
const PORT = 5000; // still kinda undecided, consult with Logan

const express = require('express');

// Gonna have to fix cors eventually.
const app = express();

/**
 * Test request to ping the server.
 */
app.get('/hello', (req, res) => {
    res.send('hi!');
});

app.listen(PORT);
console.log('Server started on port ' + PORT);