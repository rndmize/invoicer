// Shared components for the app

// Factory for products
angular.module('factories.products', [])

.factory('ProductsFactory', function() {
  return {
    getProducts: function() {
      // get list of products
    },
    getPrice: function(product) {
      // get price of a product
    }
  };
});