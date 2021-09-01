const mongoose = require('mongoose')

const Set = new mongoose.Schema({
  exercise: String,
  repCount: Number,
  weight: Number
})

const SetGroup = new mongoose.Schema({
  sets: [Set]
})

const WorkoutSchema = new mongoose.Schema({
  userId: String,
  date: Date,
  setGroups: [SetGroup]
})

mongoose.model("workout", WorkoutSchema)