// Factory for invoices
angular.module('factories.invoices', [])

.factory('InvoicesFactory', function() {
  return {
    create: function(invoice) {
      // creates new invoice
    },
    get: function(invoice) {
      // get invoice data
    },
    update: function(invoice) {
      // update invoice data
    },
    remove: function(invoice) {
      // delete invoice
    }
  };
});