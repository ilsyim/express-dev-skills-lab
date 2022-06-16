import mongoose from 'mongoose'

const Schema = mongoose.Schema
const skillSchema = new Schema({
  text: String,
  done: Boolean
})

// Compile Schema into a model & export it

const Skill = mongoose.model('Skill', skillSchema)

export {
  Skill
}