var Customer = mongoose.model('Customer');

module.exports = (function() {
	return {
		index: function(request, response){
			console.log("Server / Ctrl / Customers - Index")
			// var users = [{first_name:'Winners!!!!'}];
			Customer.find({}, function(err, customers){
				if(err){
					console.log(err);
					response.json([{name:"Updating, please be patient..."}]);
				}
				else{
					console.log(customers);
					response.json(customers);
				}
			})
		},
		new: function(request, response){
			console.log("Server / Ctrl / Customers - New")
		},
		create: function(request, response){
			console.log("Server / Ctrl / Customers - Create")
			var customer = new Customer;
			customer.name = request.body.name;
			customer.save(function(err){
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
			console.log("Server / Ctrl / Customers - Edit")
		},
		update: function(request, response){
			console.log("Server / Ctrl / Customers - Update", request.body)
			Customer.findOneAndUpdate({_id:request.params.id}, request.body, function(err, record){
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
			console.log("Server / Ctrl / Customers - Show")
		},
		destroy: function(request, response){
			console.log("Server / Ctrl / Customers - Destroy");
			console.log("Destroy params id:", request.params.id);
			Customer.remove({_id:request.params.id}, function(err){
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