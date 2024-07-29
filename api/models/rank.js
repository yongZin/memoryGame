const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
		userName: { type: String, require: true },
		userRecord: { type: String, require: true }
	},{ timestamps: true }
);

module.exports = mongoose.model('rank', UserSchema);