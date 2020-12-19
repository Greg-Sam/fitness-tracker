const router = require('express').Router()
const { Workout } = require('../models')


router.get('/workouts', (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: '$exercises.duration'
        }
      }
    }
  ])
    .then(exercises => res.json(exercises))
    .catch(err => console.log(err))
})



router.get('/workouts/range', (req, res) => {
  // Workout.aggregate([
  //   {
  //     $addFields: {
  //       totalDuration: {
  //         $sum: '$exercises.duration'
  //       }
  //     }
  //   }
  // ])
  Workout.find({ })
    .sort({ _id: -1 })
    .limit(7)
    .then(exercises => res.json(exercises))
    .catch(err => console.log(err))
})

router.get('/workouts/:id', (req, res) => {
  Workout.findById(req.params.id)
    .then(workout => res.json(workout))
    .catch(err => console.log(err))
})

router.post('/workouts', (req, res) => {
  Workout.create({})
    .then(workout => res.json(workout))
    .catch(err => console.log(err))
})

router.put('/workouts/:id', (req, res) => {
  Workout.findByIdAndUpdate(
    req.params.id,
    { $push: { exercises: req.body } },
    { new: true, runValidators: true }
  )
    .then(workout => res.json(workout))
    .catch(err => console.log(err))
})

router.delete('/workouts/:id', (req, res) => {
  Workout.findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

module.exports = router
