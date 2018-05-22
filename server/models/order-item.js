var mongoose = require('mongoose');

var { Record } = require('./record');

var OrderItem = mongoose.model('OrderItem', {
  product: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  items: []
});

module.exports = {OrderItem};
