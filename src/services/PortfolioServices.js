const PortfolioModel = require('../models/PortfolioModel')
const mongoose = require('mongoose');

const ObjectId = mongoose.Types.ObjectId;

const CreatePortfolioServices = async (req) => {
	try {
		let userID = new ObjectId(req.headers.user_id);
		let reqBody = req.body;
		reqBody.userID = userID;

		let data = await PortfolioModel.create(reqBody);

		return { status: "success", message: "Portfolio Created Successfully.", data: data };
	}
	catch (e) {
		return { status: "fail", data: e }.toString()
	}
}

const DeletePortfolioServices = async (req) => {
	try {
		let PortfolioID = req.params.PortfolioID;

		const data = await PortfolioModel.deleteOne({ _id: PortfolioID });

		if (data.deletedCount === 0) {
			return { status: "fail", message: "No portfolio found with the given ID." };
		}

		return { status: "success", message: "Portfolio Deleted!" }
	}
	catch (e) {
		return { status: "fail", data: e }.toString()
	}
}

const UpdatePortfolioServices = async (req) => {
	try {
		let PortfolioID = req.params.PortfolioID;
		let reqBody = req.body;

		const data = await PortfolioModel.updateOne({ _id: PortfolioID }, { $set: reqBody });

		return { status: "success", message: "Portfolio Updated Successful" }
	}
	catch (e) {
		return { status: "fail", data: e }.toString()
	}
}

const GetPortfolioServices = async (req) => {
	try {
		let userID = req.headers.user_id;

		const data = await PortfolioModel.find({ userID: new ObjectId(userID) });

		return { status: "success", data: data }
	}
	catch (e) {
		return { status: "fail", data: e }.toString()
	}
}

module.exports = {
	CreatePortfolioServices,
	DeletePortfolioServices,
	UpdatePortfolioServices,
	GetPortfolioServices
}
