// this file will init & start the app
var express = require('express');
var bodyParser = require('body-parser');

var { mongoose } = require('./db/mongoose');
var { Todo } = require('./models/todo');
var { User } = require('./models/user');
var { TeeShirt } = require('./models/teeshirt');
var { Record } = require('./models/record');
var { Order } = require('./models/order');
var { OrderItem } = require('./models/order-item');

var app = express();
app.use(bodyParser.json());


/* POST */
app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

// fire up server
app.listen(3000, ()  => {
  console.log('Started on port 3000');
});

module.exports = {app};
