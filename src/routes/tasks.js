const express = require('express');
const router = express.Router();

router.route('/')
    .get((req, res) => {
        res.send('get all tasks ...')
    })
    .post((req, res) => {
        res.send(`create task: ${JSON.stringify(req.body)}`);
    });

router.route('/:id')
    .get((req, res) => {
        res.send(`get task with id: ${req.params.id}`);
    })
    .put((req, res) => {
        res.send(`change task with id: ${req.params.id}`);
    })
    .delete((req, res) => {
        res.send(`delete task with id: ${req.params.id}`);
    });

module.exports = router;