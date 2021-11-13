// Define All required NPM packages
const express = require('express')
const app = express()
const Router = require('express').Router({ mergeParams: true })

Router.use('/', require('./routes/index'))
Router.use('/users', require('./routes/users'))

module.exports = Router
