let db = require('../models');

exports.getTodos = function(req, res) {
    db.Todo.find()
    .then(function(todos) {
        res.json(todos);
    })
    .catch(function(err) {
        res.send(err);
    });
}

exports.createTodo = function(req, res) {
    let todo = req.body;
    db.Todo.create(todo)
    .then(function(newTodo) {
        res.status(201).json(newTodo);
    })
    .catch(function(err) {
        res.send(err);
    });
}

exports.getTodo = function(req, res) {
    let id = req.params.todoId;
    db.Todo.findById(id)
    .then(function(todo) {
        res.status(201).json(todo);
    })
    .catch(function(err) {
        res.send(err);
    });
}

exports.updateTodo = function(req, res) {
    let id = req.params.todoId;
    db.Todo.findOneAndUpdate({ _id: id }, req.body) // { new: true } returns the new object just created instead of the old one
    .then(function(todo) {
        res.json(todo);
    })
    .catch(function(err) {
        res.send(err);
    });
}

exports.deleteTodo = function(req, res) {
    let id = req.params.todoId;
    db.Todo.remove({ _id: id })
    .then(function() {
        res.status(200).json({ message: "Todo deleted successfully "});
    })
    .catch(function(err) {
        res.send(err);
    })
}
