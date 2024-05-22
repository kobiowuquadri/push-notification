require('dotenv').config()
const express = require('express')
const path = require('path')
const allowPushNotification = require('./Middlewares/allowPushNotification')
const routes = require('./Routes/subscriberRoute')

const app = express()
const port = process.env.PORT

// static files
app.use(express.static(path.join(__dirname, 'public')))

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(allowPushNotification)
app.use(routes)


app.listen(port, ()=> {
  console.log(`Server running on port ${port}`)
})