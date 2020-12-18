const { model, Schema } = require('mongoose')

const Workout = new Schema({
  type: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  duration: {
    type: Schema.Types.Number,
    required: false
  },
  weight: {
    type: Schema.Types.Number,
    required: false
  },
  reps: {
    type: Schema.Types.Number,
    required: false
  },
  sets: {
    type: Schema.Types.Number,
    required: false
  },
  distance: {
    type: Schema.Types.Number,
    required: false
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
}, { timestamps: true })

module.exports = model('Workout', Workout)
