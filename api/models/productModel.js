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
  status: {
    type: [{
      type: String,
      enum: ['disabled', 'enabled']
    }],
    default: ['enabled']
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
  },
  year: {
    type: Number,
    required: 'Kindly enter the year of the product'
  },
  dimensions: {
    type: [Number],
    default: [1,1,1]
  },
  stock: {
    type: Number,
    default: 0
  },
  weight: {
    type: Number,
    required: 'Kindly enter the product weight in kg'
  },
  enabled: {
    type: Boolean,
    default: true
  },

});

module.exports = mongoose.model('Products', ProductSchema);
