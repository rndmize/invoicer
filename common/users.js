// Shared components for the app

// Factory for users
angular.module('factories.users', [])

.factory('UsersFactory', function() {
  return {
    create: function(user) {
      // creates user
    },
    get: function(user) {
      // get user data/attached invoices
    },
    update: function(user) {
      // update user data
    },
    remove: function(user) {
      // delete user
    }
  };
});