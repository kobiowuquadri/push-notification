const routes = require('express').Router()
const subscriber = require('../Controllers/subscriber')

routes.post('/subcribe', subscriber)

module.exports = routes