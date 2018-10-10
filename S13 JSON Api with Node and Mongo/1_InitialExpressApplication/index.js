// GET     /api/todos          List all todos
// POST    /api/todos          Create new todo
// GET     /api/todos/:todoId  Retrieve todo
// PUT     /api/todos/:todoId  Update a todo
// DELETE  /api/todos/:todoId  Delete a todo

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

let todoRoutes = require('./routes/todos');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
    res.send({
        message: 'Hi from / path'
    });
});

app.use('/api/todos', todoRoutes);

app.listen(3000, function() {
    console.log('App is running on port 3000');
});
