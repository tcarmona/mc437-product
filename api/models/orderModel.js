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
    type: [Number],
    required: 'Kindly enter products'
  }
});

module.exports = mongoose.model('Order', OrderSchema);
