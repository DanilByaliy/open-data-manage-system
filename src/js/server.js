const express = require('express');
const app = express();

const roleRouter = require('./routes/Role.js');

app.use(express.json());
app.use('/roles', roleRouter);

module.exports = app;