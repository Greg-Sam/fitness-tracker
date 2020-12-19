const router = require('express').Router()

// router.use('/', require('./viewRoutes.js'))
router.use('/api', require('./workoutRoutes.js'))
router.use('/', require('./htmlRoutes.js'))
module.exports = router
