const express = require('express')
const app = express();
require('dotenv').config();
const tasks = require('./route/tasks')
const mongoose = require('mongoose');

const port = process.env.PORT || 5000;

// middleware
app.use(express.json());

// routes
app.use('/api/v1/tasks', tasks);

const start = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        app.listen(port, () =>
            console.log(`Server listening on port ${port} ...`)
        );
    } catch (error) {
        console.log(error);
    }
};

start();

