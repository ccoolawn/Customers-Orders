var mongoose = require('mongoose');

var orderSchema = new mongoose.Schema({
	name: { type: String, trim: true },
	product: {type: String, trim: true},
	quantity:{type: Number},
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now }
});

mongoose.model('Order', orderSchema);
orderSchema.path('name').required(true, "Name is required");