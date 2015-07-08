var mongoose = require('mongoose');
var urlSlugs = require('mongoose-url-slugs');

// 	language: { type: String, default: 0, get: getPrice, set: setPrice },
// 	_producer: { type: mongoose.Schema.Types.ObjectId, ref: 'Producer' }

var ListSchema = new mongoose.Schema({
	name: { type: String, required: true },
	language: { type: Number, required: true },
});

ListSchema.plugin(urlSlugs('name'));

module.exports = mongoose.model('List', ListSchema);