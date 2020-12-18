module.exports = require('mongoose').connect('mongodb://localhost/workout', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})

// const seed = require('../seeders/seed')