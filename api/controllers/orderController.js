'use strict';

var mongoose = require('mongoose'),
  Order = mongoose.model('Order');

exports.create_order = function(req, res) {
  var new_order = Order(req.body);
  new_order.save(function(err, order) {
    if (err)
      res.send(err);
    res.json(order);
  });
};

exports.get_orders = function(req, res) {
  Order.find({userId: req.params.userId}, function(err, orders) {
    if (err)
      res.send(err);
    res.json(orders);
  });
};
