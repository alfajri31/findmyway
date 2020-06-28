const express = require('express');
const searchController = require('../controllers/search');
const Router = express.Router()

Router.get('/search',searchController.getSearch)

module.exports = Router;