const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const { response } = require('express')
require('./Workout')

app.use(express.json())


const Workout = mongoose.model('workout')


const mongoUri = "mongodb+srv://bananashirt200:bananashirt200@howmuchworkoutapp.rnxtq.mongodb.net/HowMuchWorkoutApp?retryWrites=true&w=majority";

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

mongoose.connection.on("connected", () => {
  console.log("connected to mongo")
})

mongoose.connection.on("error", (err) => {
  console.log("error", err)
})

app.get('/get-data', (request, response) => {
  response.send("Welcome to How Much")
})

app.post('/send-data', (request, response) => {
  const workout = new Workout({
    userId: request.body.userId,
    date: request.body.date,
    setGroups: request.body.setGroups
  })
  response.send("posted")
})

app.listen(3000, () => {
  console.log("server running")
})