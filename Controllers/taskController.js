const taskModel = require('../Models/taskModel');
const taskEmitter = require('../Service/logService');

exports.GetAllTasks = (req, res) => {
    taskModel.GetAllTasks((err, tasks) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error getting tasks');
            return;
        }
        res.render('tasks', { tasks });
    });
};

exports.CgangeTaskToCompleted = (req, res) => {
    const { id } = req.params;
    const status = 'completed';
    taskModel.ChangeTaskStatus(status, id, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error updating task');
            return;
        }
        taskEmitter.emit('taskUpdated', { id, status });
        res.redirect('/tasks');
    });
};

exports.AddNewTask = (req, res) => {
    const { title } = req.body;
    const status = 'not completed';
    taskModel.AddNewTask(title, status, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error adding task');
            return;
        }
        taskEmitter.emit('taskAdded', { id: result.insertId, title, status });
        res.redirect('/tasks');
    });
};

exports.DeleteTaskById = (req, res) => {
    const { id } = req.params;
    taskModel.DeleteTaskById(id, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error deleting task');
            return;
        }
        taskEmitter.emit('taskDeleted', { id });
        res.redirect('/tasks');
    });
};
