const express = require('express');
const users = require('../routes/user.routes');
const auth = require('../routes/auth.routes');
const error = require('../middleware/error');

module.exports = function(app) {
    app.use(express.json());
    app.use('/api/users', users);
    app.use('/api/auth', auth);
    app.use(error);
}  