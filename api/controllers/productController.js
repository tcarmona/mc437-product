'use strict';

var mongoose = require('mongoose'),
  Product = mongoose.model('Products');

exports.search = function(req, res) {
	  Product.find(req.query, function(err, product) {
    if (err)
      res.send(err);
    res.json(product);
  });
};

exports.create_a_product = function(req, res) {
  console.log(req.body);
  var new_product = new Product(req.body);
  new_product.save(function(err, product) {
    if (err)
      res.send(err);
    res.json(product);
  });
};


exports.read_a_product = function(req, res) {
  Product.findById(req.params.productId, function(err, product) {
    if (err)
      res.send(err);
    res.json(product);
  });
};


exports.update_a_product = function(req, res) {
  Product.findOneAndUpdate({_id: req.params.productId}, req.body, {new: true}, function(err, product) {
    if (err)
      res.send(err);
    res.json(product);
  });
};


exports.delete_a_product = function(req, res) {
  Product.remove({
    _id: req.params.productId
  }, function(err, product) {
    if (err)
      res.send(err);
    res.json({ message: 'Product successfully deleted' });
  });
};

exports.disable_a_product = function(req, res) {
  Product.findOneAndUpdate({_id: req.params.productId}, {enabled: false} , {new: true}, function(err, product) {
    if (err)
      res.send(err);
    res.json({ message: 'Product successfully disabled' });
  });
};

exports.enable_a_product = function(req, res) {
  Product.findOneAndUpdate({_id: req.params.productId}, {enabled: true} , {new: true}, function(err, product) {
    if (err)
      res.send(err);
    res.json({ message: 'Product successfully enabled' });
  });
};

exports.decrease_stock = function(req, res) {
  Product.findById(req.params.productId, function(err, product) {
    if(err) {
      res.send(err);
    }
    else if(product.stock - req.params.n < 0) {
      res.status(304).send('Cannot decrease product ' + product.name + ' in ' + req.params.n + ' units.');
    }
    else {
      product.stock = product.stock - req.params.n;
      product.save();
      res.json({ message: 'Stock successfully decreased' });
    }
  });
};

exports.increase_stock = function(req, res) {
  Product.findById(req.params.productId, function(err, product) {
    if(err) {
      res.send(err);
    }
    else {
      product.stock = parseInt(product.stock) + parseInt(req.params.n);
      product.save();
      res.json({ message: 'Stock successfully increased' });
    }
  });
};
