const express = require('express')
const Router = express.Router({ mergeParams: true })


Router.use('/v1.0/', require('./v1.0/index')) /// For each version we need to manage separate folder with all routes,models,controllers,config's inside it.

module.exports = Router