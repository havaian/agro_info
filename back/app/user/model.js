// Importing mongoose
const mongoose = require('mongoose');

// Calling mongoose schema
const Schema = mongoose.Schema;

// Creating data schema
const formDataSchema = new Schema({
	"stir": {
		type: Number,
		required: true
	},
	"role": {
		type: String,
		required: true
	},
	"login": {
		type: Number,
		required: true
	},
	"password": {
		type: Number,
		required: true
	},
	"login_data": {
		type: Array,
		required: false
	}
}, { timestamps: true });

const FormData = mongoose.model('Data', formDataSchema);

// export default FormData schema;
module.exports = FormData;