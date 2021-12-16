const express = require('express');
const app = express();

const roleRouter = require('./routes/Role.js');
const availableActionRouter = require('./routes/AvailableAction.js');

app.use(express.json());
app.use('/role', roleRouter);
app.use('/availableaction', availableActionRouter);

module.exports = app;