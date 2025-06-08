const path = require('path');
const express = require('express');
const methodOverride = require('method-override'); 
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method')); 
app.set('views', path.join(__dirname, 'Vews')); 
require('dotenv').config();

const taskRouter = require('./Routers/taskRouter'); 
app.use('/tasks', taskRouter);
const logRouter = require('./Routers/logRouter');
app.use('/logRouter', logRouter);
app.get('/', (req, res) => {
    res.redirect('/tasks');
});
app.get('*', function (req, res) {
    res.send('Sorry, this is an invalid URL.');
});

const PORT = process.env.PORT || 3000; 

app.listen(PORT, function () {
    console.log(`Example app listening on port http://localhost:${PORT}/`);
});
