const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

app.get('/', (request, response) => {
  response.send("Welcome to How Much")
})

app.listen(3000, () => {
  console.log("server running")
})