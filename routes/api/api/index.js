//all routes from this point on start with /api, this is where you break up the routes
//doing the same as the previous file and adding in my user routes. Here is where if I
//had animal routes it would be:
//const animalRoutes = require('./animal')
//router.use('/animal', animalRoutes)
//so you'd have a /api/animal route now

const router = require('express').Router();
const moviesRoutes = require('./movies');
const userRoutes = require('./user');

//now the route is /api/movies  and /api/user
router.use('/movies', moviesRoutes);
router.use('/user', userRoutes);

module.exports = router;
