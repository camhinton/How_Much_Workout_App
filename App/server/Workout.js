const mongoose = require('mongoose')

const Set = {
  exercise: String,
  repCount: Int16Array,
  weight: Int16Array
}

const SetGroup = {
  sets: Array<Set>
}

const WorkoutSchema = new mongoose.Schema({
  userId: String,
  date: String,
  setGroups: Array<SetGroup>
})