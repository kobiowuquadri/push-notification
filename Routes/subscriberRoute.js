const routes = require('express').Router()
const subscriber = require('../Controllers/subscriber')

routes.post('/subscribe', subscriber)

module.exports = routes