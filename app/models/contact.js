var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var contactSchema = new mongoose.Schema({
    firstName: String,
	lastName: String,
	phoneNumber : Number
});

// Return model
module.exports = restful.model('Contacts', contactSchema);
