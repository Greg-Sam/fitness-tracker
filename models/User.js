const { model, Schema } = require('mongoose')

const User = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  workouts: [{
    type: Schema.Types.ObjectId,
    ref: 'Workout'
  }]
}, { timestamps: true })

module.exports = model('User', User)
