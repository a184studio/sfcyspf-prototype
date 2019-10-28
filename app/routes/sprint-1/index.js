const express = require('express')
const router = new express.Router()

router.post('/countries', (req, res, next) => {
  const whereDoYouLive = req.session.data['where-do-you-live']

  if (whereDoYouLive === 'england') {
    res.redirect('england')
  } else if (whereDoYouLive === 'scotland') {
    res.redirect('scotland')
  } else if (whereDoYouLive === 'wales') {
    res.redirect('wales')
  } else if (whereDoYouLive === 'northern-ireland') {
    res.redirect('northern-ireland')
  }
})

module.exports = router
