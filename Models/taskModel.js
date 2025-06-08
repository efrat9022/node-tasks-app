const db=require('../db/config');

exports.GetAllTasks=(callback)=>{
    const sql = 'SELECT * FROM taskTable';
    db.query(sql, callback);
}
exports.AddNewTask = (title, status, callback) => {
    const sql = 'INSERT INTO taskTable (title, status) VALUES (?, ?)';
    db.query(sql, [title, status], callback);
};
exports.ChangeTaskStatus = ( status,id, callback) => {
    const query = 'UPDATE taskTable SET status = ? WHERE id = ?';
    db.query(query, [status, id], callback);
};
exports.DeleteTaskById = (id, callback) => {
    const query = 'DELETE FROM taskTable WHERE id = ?';
    db.query(query, [id], callback);
};
