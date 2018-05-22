var mongoose = require('mongoose');

var TeeShirt = mongoose.model('TeeShirt', {
  design: {
    type: String,
    required: true
  },
  size: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
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

module.exports = {TeeShirt};
