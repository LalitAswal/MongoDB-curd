const express = require("express");
const app = express();
const employee = require('./routes/employee.route');
const db = require('./config/mongodbConnect');

console.log('checking for app file')
app.use(express.json());
app.use('/api/v1',
employee);

module.exports = app;