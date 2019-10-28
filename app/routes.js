const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
router.use('/sprint-1', require('./routes/sprint-1'))

module.exports = router
