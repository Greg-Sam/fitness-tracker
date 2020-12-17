const router = require('express').Router()

router.use('/api', require('./workoutRoutes.js'))
router.use('/api', require('./userRoutes.js'))

module.exports = router
