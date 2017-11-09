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
  price: {
    type: Number,
    required: 'Kindly enter the price of the product',
    min: 0
  },
  color: {
    type: String,
    default: ''
  },
  year: {
    type: Number
  },
  dimensions: {
    type: [String]
  },
  stock: {
    type: Number,
    required: 'Kindly enter the stock of the product',
    min: 0
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
  rating: {
    type: Number,
    min: 0,
    max: 5
  },
  description: {
    type: String
  },
  img: {
    type: [String]
  },
  highlighted: {
    type: Boolean,
    default: false
  },
  group: {
    type: String,
    default: '0'
  }
});

module.exports = mongoose.model('Products', ProductSchema);
