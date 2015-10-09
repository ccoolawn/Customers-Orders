custApp.factory('CustomerFactory', function($http, $location){
	return {
		getCustomers: function(callback){
			console.log("CustomersFactory getCustomers");
			$http.get('/customers').success(function(response){
				callback(response);
			})
		},
		add: function(newCustomer, callback){
			if(newCustomer){
				console.log("CustomersFactory add ", newCustomer);
				$http.post('/customers', newCustomer).success(function(response){
					callback(response);
				})
			}
		},
		remove: function(customer, callback){
			console.log("CustomersFactory remove ", customer);
			$http.delete('/customers/'+customer._id).success(function(response){
				callback();
			})
		},
		update: function(customer){
			console.log("CustomersFactory remove ", customer);
			$http.put('/customers/'+customer._id, user).success(function(response){
				$location.path('/customers');
			})
		},
		setCustomer: function(customer){
			this.customer = customer;
			$location.path('/customers/details');
		},
		getCustomer: function(){
			if(!this.customer)
				$location.path('/customers');
			return this.customer;
		}
	}
})