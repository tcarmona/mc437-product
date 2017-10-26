'use strict';
module.exports = function(app) {
  var product = require('../controllers/productController');

  // todoList Routes
  app.route('/products')
    .get(product.list_all_products)
    .post(product.create_a_product);


  app.route('/products/:productId')
    .get(product.read_a_product)
    .put(product.update_a_product)
    .delete(product.delete_a_product);

  app.route('/products/:productId/disable')
    .put(product.disable_a_product);

  app.route('/products/:productId/enable')
    .put(product.enable_a_product);

  app.route('/products/:productId/decrease/stock/:n')
    .put(product.decrease_stock);

  app.route('/products/:productId/increase/stock/:n')
    .put(product.increase_stock);

};
