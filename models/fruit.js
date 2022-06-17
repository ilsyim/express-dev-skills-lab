import mongoose from 'mongoose'

const Schema = mongoose.Schema
const fruitSchema = new Schema({
  text: String,
  done: Boolean
})

const Fruit = mongoose.model('Fruit', fruitSchema)

export {
  Fruit
}