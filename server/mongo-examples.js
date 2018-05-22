var { mongoose } = require('./db/mongoose');

var newTodo = new Todo({
  text: '   boogie till ya puke    '
});

newTodo.save().then((doc) => {
  console.log(JSON.stringify(doc, undefined, 4));
}, (e) => {
  console.log('Unable to save todo', e);
});

var newUser = new User({
  email: '   j@t.com    '
});

newUser.save().then((doc) => {
  console.log(JSON.stringify(doc, undefined, 2));
}, (e) => {
  console.log('Unable to save todo', e);
});

var newTeeShirt = new TeeShirt({
  design: 'Out My Way',
  size: 'Large',
  color: 'Dark Grey',
  sku: 'MPLrgDkGryOutWyDesign1', // or: 'Eaip634Jrghp9088FRNiolJ', etc.
  costPerUnit: 7.50,
  pricePerUnit: 20.00,
  comp: false,
  discount: 0.0
});

newTeeShirt.save().then((doc) => {
  console.log(JSON.stringify(doc, undefined, 2));
}, (e) => {
  console.log('Unable to save TeeShirt, Error: ', e);
});

newTeeShirt = new TeeShirt({
  design: 'Too High to Die',
  size: 'Large',
  color: 'Blue/Purple',
  sku: 'MPLrgGryTooHiDesign1', // or: 'Eaip634Jrghp9088FRNiolJ', etc.
  costPerUnit: 7.50,
  pricePerUnit: 20.00,
  comp: false,
  discount: 0.0
});

newTeeShirt.save().then((doc) => {
  console.log(JSON.stringify(doc, undefined, 2));
}, (e) => {
  console.log('Unable to save TeeShirt, Error: ', e);
});

newTeeShirt = new TeeShirt({
  design: 'No Joke',
  size: 'Large',
  color: 'Black/Purple',
  sku: 'MPLrgBlkPrplNoJkDesign1', // or: 'Eaip634Jrghp9088FRNiolJ', etc.
  costPerUnit: 7.50,
  pricePerUnit: 20.00,
  comp: false,
  discount: 0.0
});

newTeeShirt.save().then((doc) => {
  console.log(JSON.stringify(doc, undefined, 2));
}, (e) => {
  console.log('Unable to save TeeShirt, Error: ', e);
});


var newRecord = new Record({
  title: 'Out My Way',
  artist: 'The Meat Puppets',
  format: 'Vinyl',
  releaseDate: 6747623421,
  sku: 'MPOutWyVinylLP',
  costPerUnit: 9.25,
  pricePerUnit: 20.00,
  comp: false,
  discount: 0.00
});

newRecord.save().then((doc) => {
  console.log(JSON.stringify(doc, undefined, 2));
}, (e) => {
  console.log('Unable to save Record, Error: ', e);
});

newRecord = new Record({
  title: 'Too High to Die',
  artist: 'The Meat Puppets',
  format: 'Vinyl',
  releaseDate: 799847323421,
  sku: 'MPTooHiVinylLP',
  costPerUnit: 9.25,
  pricePerUnit: 20.00,
  comp: false,
  discount: 0.00
});

newRecord.save().then((doc) => {
  console.log(JSON.stringify(doc, undefined, 2));
}, (e) => {
  console.log('Unable to save Record, Error: ', e);
});

newRecord = new Record({
  title: 'No Joke',
  artist: 'The Meat Puppets',
  format: 'Vinyl',
  releaseDate: 99999979421,
  sku: 'MPNoJkVinylLP',
  costPerUnit: 9.25,
  pricePerUnit: 20.00,
  comp: false,
  discount: 0.00
});

newRecord.save().then((doc) => {
  console.log(JSON.stringify(doc, undefined, 2));
}, (e) => {
  console.log('Unable to save Record, Error: ', e);
});
