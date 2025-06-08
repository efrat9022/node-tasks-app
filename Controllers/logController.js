const logModel = require('../Models/logModel');

exports.getLogList = (req, res) => {
    try {
        const logLines = logModel.ShowAllLogs();  
        res.render('logTask', { logLines });  
    } catch (error) {
        console.error('Error reading log file:', error.message);
        res.status(500).send(error.message); 
    }
};

exports.deleteLog = (req, res) => {
    try {
        logModel.deleteLogFile();
        res.send('Log file deleted successfully');
    } catch (error) {
        console.error('Error deleting log file:', error.message);
        res.status(404).send(error.message); 
    }
};
