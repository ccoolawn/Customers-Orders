var Order = mongoose.model('Order');

module.exports = (function() {
	return {
		index: function(request, response){
			console.log("Server / Ctrl / Orders - Index")
			// var users = [{first_name:'Winners!!!!'}];
			Order.find({}, function(err, orders){
				if(err){
					console.log(err);
					response.json([{name:"Updating, please be patient..."}]);
				}
				else{
					console.log(orders);
					response.json(orders);
				}
			})
		},
		new: function(request, response){
			console.log("Server / Ctrl / Orders - New")
		},
		create: function(request, response){
			console.log("Server / Ctrl / Orders - Create")
			var order = new Order;
			order.name = request.body.name;
			order.product = request.body.product;
			order.quantity = request.body.quantity;
			order.save(function(err){
				if(err){
					console.log(err);
					response.json({status:false});
				}
				else{
					response.json({status:true});
				}
			})
		},
		edit: function(request, response){
			console.log("Server / Ctrl / Orders - Edit")
		},
		update: function(request, response){
			console.log("Server / Ctrl / Orders - Update", request.body)
			Order.findOneAndUpdate({_id:request.params.id}, request.body, function(err, record){
				if(err){
					console.log(err);
					response.json({status:false});
				}
				else{
					response.json({status:true});
				}
			})
		},
		show: function(request, response){
			console.log("Server / Ctrl / Orders - Show")
		},
		destroy: function(request, response){
			console.log("Server / Ctrl / Orders - Destroy");
			console.log("Destroy params id:", request.params.id);
			Order.remove({_id:request.params.id}, function(err){
				if(err){
					console.log(err);
					response.json({status:false});
				}
				else{
					response.json({status:true});
				}
			})
		}
	}
})();