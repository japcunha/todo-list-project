const express = require('express');
const router = require('./router');
const cors = require('cors');

const app = express();

app.use(router);
app.use(express.json());
app.use(cors());



module.exports = app;
