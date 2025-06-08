const express = require('express');
const router = express.Router();
const taskController = require('../Controllers/taskController');

router.get('/', taskController.GetAllTasks);
router.post('/add', valideBeforeAddNewTask, taskController.AddNewTask);
router.put('/:id', valideBeforeChangeToComplete, taskController.CgangeTaskToCompleted);
router.delete('/:id', taskController.DeleteTaskById);
router.get('/addTask', (req, res) => {
    res.render('addTask');
});

function valideBeforeAddNewTask(req, res, next) {
    const { title } = req.body;
    if (!title || title.trim() === "") {
         return res.send('title cannot be empty!');
    }
    next();
}

function valideBeforeChangeToComplete(req, res, next) {
    const { id } = req.params;
    if (id && isNaN(id)) {
         return res.status(400).json({ error: "id must be a number" });
    }
    next();
}

module.exports = router;
