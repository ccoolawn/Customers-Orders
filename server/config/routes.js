module.exports = function(app) {
  	var customers = require('../controllers/customers.js');
  	var orders = require('../controllers/orders.js');
	app

	// - - - User - - -
    // Index
	.get('/customers', function(request, response) { customers.index(request, response) })
	// New
	.get('/customers/new', function(request, response) { customers.create(request, response) })
	// Show
	.get('/customers/:id', function(request, response) { customers.show(request, response) })
	// Edit
	.post('/customers/:id/edit', function(request, response) { customers.update(request, response) })
	// Create
	.post('/customers', function(request, response) { customers.create(request, response) })
	// Destroy
	.delete('/customers/:id', function(request, response) { customers.destroy(request, response) })
	// Update
	.put('/customers/:id', function(request, response) { customers.update(request, response) })

	var customers = require('../controllers/customers.js');
	app

	// - - - Orders- - -
    // Index
	.get('/orders', function(request, response) { orders.index(request, response) })
	// New
	.get('/orders/new', function(request, response) { orders.create(request, response) })
	// Show
	.get('/orders/:id', function(request, response) { orders.show(request, response) })
	// Edit
	.post('/orders/:id/edit', function(request, response) { orders.update(request, response) })
	// Create
	.post('/orders', function(request, response) { orders.create(request, response) })
	// Destroy
	.delete('/orders/:id', function(request, response) { orders.destroy(request, response) })
	// Update
	.put('/orders/:id', function(request, response) { orders.update(request, response) })

};

