const express = require('express');
const bollywoodapi = require('../api/Bollywood');

const bollywood = express.Router();
bollywood.route('/bollywood').get(bollywoodapi.apiController);


module.exports = bollywood;