const PushNotification = require('node-pushnotifications')

const publicVapidKey = process.env.PUBLIC_VAPID_KEY
const privateVapidKey = process.env.PRIVATE_VAPID_KEY

const subscriber = (req, res) => {
  const subscription = req.body 
  console.log(subscription)
  const settings = {
    web: {
      vapidDetails: {
        subject: "mailto:kobiowuq@gmail.com",
        publicKey: publicVapidKey,
        privateKey: privateVapidKey
        },
        gcmAPIKey: "gcmkey",
        TTL: 2419200,
        contentEncoding: "aes128gcm",
        headers: {}
    },
    isAlwaysUseFCM: false
  }
  // resource created - 201
  const push = new PushNotification(settings)
 
  // create payload
  const payload = { title: "Notification from DevQuat"} 
  push.send(subscription, payload, (err, result) =>{
    if(err){
      console.log(err)
    }else {
      console.log(result)
    }
  })  
}


module.exports = subscriber
