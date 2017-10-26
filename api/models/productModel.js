'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ProductSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the product'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  category: {
    type: String,
    required: 'Kindly enter the category of the product'
  },
  model: {
    type: String,
    default: ''
  },
  brand: {
    type: String,
    default: ''
  },
  color: {
    type: String,
    default: ''
  },
  year: {
    type: Number,
    default: ''
  },
  dimensions: {
    type: String,
    default: ''
  },
  stock: {
    type: Number,
    default: 0,
    required: 'Kindly enter the stock of the product'
  },
  weight: {
    type: Number
  },
  enabled: {
    type: Boolean,
    default: true
  },
  reviews: {
    type: [String]
  },
  description: {
    type: String
  }

});

module.exports = mongoose.model('Products', ProductSchema);
