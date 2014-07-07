var invoicer = angular.module('invoicer', [
  'ngRoute',
  'factories.users',
  'factories.invoices',
  'factories.products'
]);

invoicer.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'home/partial.html',
        controller: 'home'
      }).
      when('/invoice', {
        templateUrl: 'invoice/partial.html',
        controller: 'invoice'
      }).
      when('/products', {
        templateUrl: 'products/partial.html',
        controller: 'products'
      }).
      otherwise({
        redirectTo: '/'
      });
  }
]);