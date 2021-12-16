const express = require('express');
const app = express();

const roleRouter = require('./routes/Role.js');
const availableAction = require('./routes/AvailableAction.js');

app.use(express.json());
app.use('/roles', roleRouter);
app.use('/availableaction', availableAction);

module.exports = app;