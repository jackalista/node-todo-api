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
  const feedLizardID = '5afe1379631e95fc18f0f8f3';
  const walkLizardID = '5afdd7d1631e95fc18f0de5a';

  // db.collection('Todos').find({
  //   _id: new ObjectID(feedLizardID)
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  db.collection('Users').find().count().then((count) => {
    console.log(`Total Users Count: ${count}`);
  }, (err) => {
    console.log('Unable to fetch user count', err);
  });

  db.collection('Users').find({age: 42}).count().then((count) => {
    console.log(`Queried User Count: ${count}`);
  }, (err) => {
    console.log('Unable to fetch count for query', err);
  });

  db.collection('Users').find({age: 42}).toArray().then((docs) => {
    console.log('Users');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });

  //client.close();
});
