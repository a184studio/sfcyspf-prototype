const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
router.use('/sprint-1', require('./routes/sprint-1'))
router.use('/sprint-2', require('./routes/sprint-2'))
router.use('/sprint-3', require('./routes/sprint-3'))
router.use('/sprint-4', require('./routes/sprint-4'))
router.use('/sprint-5', require('./routes/sprint-5'))


module.exports = router
