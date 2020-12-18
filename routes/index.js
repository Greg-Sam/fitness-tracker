const router = require('express').Router()

// router.use('/', require('./viewRoutes.js'))
router.use('/api', require('./workoutRoutes.js'))

module.exports = router
