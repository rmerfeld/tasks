const Task = require('../model/Task');

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json(error);
    }
}

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json(error);
    }
}

const getTask = async (req, res) => {
    try {
        const { id: taskID } = req.params;
        const task = await Task.findById(taskID);
        if (task) {
            res.status(200).json(task);
        } else {
            res.status(404)
                .json({ error: `No Task with _id: ${taskID} found` });
        }
    } catch (error) {
        res.status(500).json(error);
    }
}



const deleteTask = async (req, res) => {
    try {
        const { id: taskID } = req.params;
        const task = await Task.findByIdAndDelete(taskID);
        if (task) {
            res.status(200).json(task);
        } else {
            res.status(404)
                .json({ error: `No Task with _id: ${taskID} found` });
        }
    } catch (error) {
        res.status(500).json(error);
    }
}

const updateTask = async (req, res) => {
    try {
        const { id: taskID } = req.params;
        const task = await Task.findByIdAndUpdate(taskID, req.body, {
            new: true,
            runValidators: true,
        });
        if (task) {
            res.status(200).json(task);
        } else {
            res.status(404)
                .json({ error: `No Task with _id: ${taskID} found` });
        }
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask }