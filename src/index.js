const express = require('express')
const app = express();
require('dotenv').config();

const port = process.env.PORT || 5000;

// middleware
app.use(express.json());

// routes
app.get('/api/v1/tasks', (req, res) => {
    res.send('get all tasks ...');
});

app.post('/api/v1/tasks', (req, res) => {
    res.send(`create task: ${JSON.stringify(req.body)}`);
});

app.put('/api/v1/tasks/:id', (req, res) => {
    res.send(`change task with id: ${req.params.id}`);
});

app.delete('/api/v1/tasks/:id', (req, res) => {
    res.send(`delete task ${req.params.id}`);
})

app.listen(port, () => console.log(`Server listening on port ${port} `));