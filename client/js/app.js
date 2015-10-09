var custApp = angular.module('custApp', ['ngRoute']);

custApp.config(function($routeProvider){
	$routeProvider
	.when('/', {
		// controller: 'HomeController'
		templateUrl: '/partials/customers.html'
	})
	.when('/customers', {
		controller: 'CustomersController',
		controllerAs: 'custCtrl',
		templateUrl: '/partials/customers.html'
	})
	.when('/orders', {
		controller: 'OrdersController',
		controllerAs: 'orderCtrl',
		templateUrl: '/partials/orders.html'
	})

	.otherwise('/')
})