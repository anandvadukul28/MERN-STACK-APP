
const connectDB = require('./config/db');
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const users = require('./routes/api/users')
const app = express();

app.use(cors())
// converts API responses to JSON for easy use
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
// Connect Database
connectDB();
app.use('/api/users', users)
app.get('/', (req, res) => res.send('Hello world!'));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on port ${port}`));
