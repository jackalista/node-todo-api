//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

var obj = new ObjectID();
console.log('obj: ', obj);

// -=j=-: destructuring example
// var user = {name: 'jack', age: 74};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) =>{
  if (err) {
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name: 'Bogie Dogwan',
  //   age: 42,
  //   location: 'Hollywood'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert user', err);
  //   }
  //
  //   //console.log(JSON.stringify(result.ops, undefined, 2));
  //   console.log(result.ops[0]._id.getTimestamp());
  // });

  db.collection('Todos').insertOne({
    text: 'repark the cars',
    completed: false
  }).then((response) => {
    console.log('New User Response: ');
    console.log(JSON.stringify(response, undefined, 2));
  }, (err) => {
    console.log('Unable to create todos', err);
  });

  client.close();
});
