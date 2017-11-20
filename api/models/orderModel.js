'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var OrderSchema = new Schema({
  userId: {
    type: Number,
    required: 'Kindly enter the id of the client'
  },
  price: {
    type: Number,
    required: 'Kindly enter the price of the order'
  },
  products: {
    type: [String],
    required: 'Kindly enter products'
  },
  paymentId: {
    type: Number,
    required: ''
  },
  shippingId: {
    type: Number,
    required: ''
  }
});

module.exports = mongoose.model('Order', OrderSchema);
