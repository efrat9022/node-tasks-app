const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');
const { format } = require('date-fns');
const { v4: uuid } = require('uuid'); 

const logFilePath = path.join(__dirname, '../eventLog.txt');

const ShowAllLogs = () => {
 
    
        if (!fs.existsSync(logFilePath)) {
               throw new Error('Log file not filed')
             }
     const fileContent = fs.readFileSync(logFilePath, 'utf-8');
     return fileContent;
    

};

const deleteLogFile = () => {
    if (!fs.existsSync(logFilePath)) {
        return 'No logs available';
    }
    try {
        fs.unlinkSync(logFilePath);
        return 'Log file deleted successfully';
    } catch (err) {
        return err.message;
    }
};
const writeLog = (message) => {
    const logMessage = `${new Date().toISOString()} - ${message}\n`;
    fs.appendFileSync(logFilePath, logMessage);
};

module.exports = {writeLog, ShowAllLogs, deleteLogFile };