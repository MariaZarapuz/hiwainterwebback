const express = require('express');
const app = express();
const cors = require('cors');

const apiRouter = require('./routes/api');

require('dotenv').config();
require('./db').connect();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRouter)

app.listen(3000, () => {
    console.log('hola puerto')
});





