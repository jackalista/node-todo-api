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
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');
  const feedLizardID = '5afe1379631e95fc18f0f8f3';
  const walkLizardID = '5afdd7d1631e95fc18f0de5a';

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'let go'}).then((result) => {
  //   console.log(result);
  // });

  // deleteOne
  // db.collection('Todos').deleteOne({text: 'let go'}).then((result) => {
  //   console.log(result);
  // });

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  // delete dupes w/ deleteMany() and a single object w/ findOneAndDelete by ID
  db.collection('Users').deleteMany({location: 'Hollywood'}).then((result) => {
    console.log(result);
  }, (err) => {
    console.log('Unable to deleteMany({location: Hollywood})', err);
  });

  db.collection('Users').findOneAndDelete({_id: 123}).then((result) => {
    console.log(result);
  }, (err) => {
    console.log('Unable to deleteMany({_id: ObjectID(5afdd17041dd8d309c223af6)})', err);
  });
  //client.close();
});
