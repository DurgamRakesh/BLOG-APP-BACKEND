const express = require('express');
const technologyapi = require('../api/Technology');

const technology = express.Router();
technology.route('/technology').get(technologyapi.apiController);
module.exports = technology;