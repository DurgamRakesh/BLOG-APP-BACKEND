const express = require('express');
const hollywoodapi = require('../api/Hollywood');

const hollywood = express.Router();
hollywood.route('/hollywood').get(hollywoodapi.apiController);
module.exports = hollywood;