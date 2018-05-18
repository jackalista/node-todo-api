//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

var obj = new ObjectID();
console.log('obj: ', obj);

// -=j=-: destructuring example
// var user = {name: 'jack', age: 74};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to mongodb server');
  }
  const db = client.db('TodoApp');
  console.log('Connected to MongoDB server');

  db.collection('Todos').findOneAndUpdate()

  //client.close();
});
