const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({
	userID: { type: mongoose.Schema.Types.ObjectId, required: true },
	title: { type: String, required: true },
	description: { type: String, required: true },
	img: { type: String, required: true },
	codelink: { type: String, required: true },
	livelink: { type: String, required: true },
},
	{ timestamps: true, versionKey: false }
)

const PortfolioModel = mongoose.model('portfolios', DataSchema)
module.exports = PortfolioModel
