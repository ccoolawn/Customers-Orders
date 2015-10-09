
custApp.controller('OrdersController', function($scope, OrderFactory){
	console.log("OrdersController Loaded");
	// var that = this;

	var getOrders = function(){
		OrderFactory.getOrders(function(orders){
			$scope.orders = orders;
		});
	}
	getOrders();
	$scope.add = function(newOrder){
		console.log($scope.newOrder);
			//console.log('im here!',newOrder);
		OrderFactory.add(newOrder, function(){
			getOrders();
		})
	}
	// $scope.remove = function(order){
	// 	OrderFactory.remove(order, function(){
	// 		getOrders();
	// 	})
	// }
	$scope.show = function(order){
		OrderFactory.setOrder(order);
	}

	// $scope.order = OrderFactory.getOrder();
	// $scope.update = function(order){
	// 	OrderFactory.update(order);
	// }


})