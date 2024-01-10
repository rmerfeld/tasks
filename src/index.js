const express = require('express')
const app = express();
require('dotenv').config();
const tasks = require('./routes/tasks')

const port = process.env.PORT || 5000;

// middleware
app.use(express.json());

// routes
app.use('/api/v1/tasks', tasks);


app.listen(port, () => console.log(`Server listening on port ${port} `));