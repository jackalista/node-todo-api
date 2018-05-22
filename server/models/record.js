var mongoose = require('mongoose');

var Record = mongoose.model('Record', {
  title: {
    type: String,
    required: true
  },
  artist: {
    type: String,
    required: true
  },
  format: {
    type: String,
    required: true
  },
  releaseDate: {
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
