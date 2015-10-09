
custApp.controller('CustomersController', function($scope, CustomerFactory){
	console.log("CustomersController Loaded");
	// var that = this;

	var getCustomers = function(){
		CustomerFactory.getCustomers(function(customers){
			$scope.customers = customers;
		});
	}
	getCustomers();
	$scope.add = function(newCustomer){
			console.log('im here!',newCustomer);
		CustomerFactory.add(newCustomer, function(){
			getCustomers();
		})
	}
	$scope.remove = function(customer){
		CustomerFactory.remove(customer, function(){
			getCustomers();
		})
	}
	$scope.show = function(customer){
		CustomerFactory.setCustomer(customer);
	}
})

custApp.controller('CustomerController', function(CustomerFactory){
	console.log("CustomerController Loaded");
	$scope.customer = CustomerFactory.getCustomer();
	$scope.update = function(customer){
		CustomerFactory.update(customer);
	}
})