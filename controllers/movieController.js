//All routes lead to the controllers file
//require your models and export your functions

const db = require('../models');
const mongoose = require("mongoose");


module.exports = {
	findAll: (req, res) => {
		db.Movie
			.find({})
			.then((movies) => {
				res.json(movies);
			})
			.catch((err) => {
				res.json(err);
			});
	},

	createMovie: (req,res) => {
		db.Movie
		.create(req.body)
		.then(movie => res.json(movie))
		.catch(err => res.json(err))
	},

	addMovie: (req,res) => {
		let id = mongoose.Types.ObjectId(req.body.movieID);
		db.Movie.findOneAndUpdate(
			{_id: id}, {$set: { quantity: req.body.quantity }})
			.then((movie) => {res.json(movie)})
			.catch((err) => {res.json(err)})		

	},

	minusMovie: (req,res) => {
		let id = mongoose.Types.ObjectId(req.body.movieID);	
		db.Movie.findOneAndUpdate(
			{_id: id}, {$set: { quantity: req.body.quantity }})
			.then((movie) => {res.json(movie)})
			.catch((err) => {res.json(err)})
	},

	deleteMovie: (req,res) => {
		console.log(req.body);	
		let id = mongoose.Types.ObjectId(req.body.movieID);
		db.Movie.deleteOne({_id: id})
		.then((movie) => {res.json(movie)})
		.catch((err) => {res.json(err)})
	}
};
