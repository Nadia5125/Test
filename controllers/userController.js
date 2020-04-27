//All routes lead to the controllers file
//require your models and export your functions

const db = require('../models');
const mongoose = require("mongoose");


module.exports = {
	findAll: (req, res) => {
		db.Users
			.find({})
			.then((users) => {
				res.json(users);
			})
			.catch((err) => {
				res.json(err);
			});
	},

	createUser: (req,res) => {
		db.Users
		.create(req.body)
		.then(user => res.json(user))
		.catch(err => res.json(err))
	},

	addUser: (req,res) => {
		let id = mongoose.Types.ObjectId(req.body.userID);
		db.Users.findOneAndUpdate(
			{_id: id}, {$set: { quantity: req.body.quantity }})
			.then((user) => {res.json(user)})
			.catch((err) => {res.json(err)})		

	},

	minusUser: (req,res) => {
		let id = mongoose.Types.ObjectId(req.body.userID);	
		db.Users.findOneAndUpdate(
			{_id: id}, {$set: { quantity: req.body.quantity }})
			.then((user) => {res.json(user)})
			.catch((err) => {res.json(err)})
	},

	deleteUser: (req,res) => {
		let id = mongoose.Types.ObjectId(req.body.userID);
		db.User.deleteOne({_id: id})
		.then((user) => {res.json(user)})
		.catch((err) => {res.json(err)})
	}
};
