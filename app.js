require('dotenv').config()
const express = require('express')
const webpush = require('web-push')
const path = require('path')
const PushNotification = require('node-pushnotifications')
const allowPushNotification = require('./Middlewares/allowPushNotification')

const app = express()
const port = process.env.PORT

// middlewares
app.use(allowPushNotification)
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.listen(port, ()=> {
  console.log(`Server running on port ${port}`)
})