const winston = require ('winston');
const mongoose = require('mongoose');
const config = require('config');

module.exports = function () {
    const url = config.get('db');
    mongoose.connect(url)
        .then(()=> winston.info(`Connected to database at ${url}...`));
}