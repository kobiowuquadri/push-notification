require('dotenv').config()
const express = require('express')
const path = require('path')
const allowPushNotification = require('./Middlewares/allowPushNotification')
const routes = require('./Routes/subscriberRoute')

const app = express()
const port = process.env.PORT

// static files
app.use(express.static(path.join(__dirname, "client")));

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(allowPushNotification)
app.use(routes)

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/main.js", (req, res) => {
  res.sendFile(__dirname + "/main.js");
});
app.get("/serviceWorker.js", (req, res) => {
  res.sendFile(__dirname + "/serviceWorker.js");
});


app.listen(port, ()=> {
  console.log(`Server running on port ${port}`)
})