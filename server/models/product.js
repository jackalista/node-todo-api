var mongoose = require('mongoose');

var Record = mongoose.model('Product', {
  design: { // t-shirt
    type: String,
    required: true
  },
  size: { // t-shirt
    type: String,
    required: true
  },
  color: { // t-shirt
    type: String,
    required: true
  },
  title: { // record
    type: String,
    required: true
  },
  artist: { // record
    type: String,
    required: true
  },
  format: { // record
    type: String,
    required: true
  },
  releaseDate: { // record
    type: Number
  },
  sku: {
    type: String,
    required: true
  },
  costPerUnit: {
    type: Number
  },
  pricePerUnit: {
    type: Number
  },
  comp: {
    type: Boolean
  },
  discount: {
    type: Number
  }
});

module.exports = {Record};
