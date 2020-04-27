//I could just put all my routes in this file for just one table in my db such as users,
//but what if I had a table for users, animals, etc... that will end up messy
//so using route.use to separate my routes

//=======================IF YOU WANT TO BREAK UP ALL ROUTES(CONTROLLERS IN SEP FILES... SEE BELOW)=================================

// apiRoutes == everything in the Api Folder
// setting all routes to start with /api and then whats in api will follow hence the const apiRoutes
// basically all routes in the api folder will start with /api

const router = require("express").Router();
const path = require("path");
const apiRoutes = require("./api");
router.use ("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use((req, res) => {
res.sendFile(path.join(__dirname, "../client/build/index.html"))})

module.exports = router;