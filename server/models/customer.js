var mongoose = require('mongoose');

var customerSchema = new mongoose.Schema({
	name: { type: String, trim: true },
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now }
});

mongoose.model('Customer', customerSchema);
customerSchema.path('name').required(true, "Name is required");

