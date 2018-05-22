var mongoose = require('mongoose');

var Order = mongoose.model('Order', {
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
  items: []
});

module.exports = {Order};
