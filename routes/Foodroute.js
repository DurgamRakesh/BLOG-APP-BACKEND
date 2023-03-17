const express = require('express');
const foodapi = require('../api/Food');
const food = express.Router();
food.route('/food').get(foodapi.apiController);
module.exports = food;