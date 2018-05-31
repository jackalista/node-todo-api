var mongoose = require('mongoose');

var Order = mongoose.model('Order', {
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  subtotal: {
    type: Number,
    required: true
  },
  taxes: {
    type: Number,
    required: true
  },
  total: {
    type: Number,
    required: true
  },
  billToAddress: {
    type: String,
    required: true
  },
  shipToAddress: {
    type: String,
    required: true
  },
  items: []
});

module.exports = {Order};
