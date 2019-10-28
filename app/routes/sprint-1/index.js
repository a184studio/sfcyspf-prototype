const express = require('express')
const router = new express.Router()

router.post('/who-is-caller-router', (req, res, next) => {
  const whoIsCaller = req.session.data['who-is-caller']

  if (whoIsCaller === 'Yourself') {
    res.redirect('yourself-national-insurance')
  } else if (whoIsCaller === 'POA') {
    res.redirect('adviser-id-check')
  } else if (whoIsCaller === 'Appointee') {
    res.redirect('adviser-id-check')
  } else if (whoIsCaller === 'Charity') {
    res.redirect('adviser-id-unofficial')
  } else if (whoIsCaller === 'Family') {
    res.redirect('adviser-id-unofficial')
  } else if (whoIsCaller === 'Friend') {
    res.redirect('adviser-id-unofficial')
  } else if (whoIsCaller === 'SomeoneElse') {
    res.redirect('adviser-id-unofficial')
  } else {
    res.redirect('adviser-id-unofficial')
  }
})

router.post('/yourself-ni-found-yn-router', (req, res, next) => {
  const niFound = req.session.data['yourself-ni-found-yn']

  if (niFound === 'Yes') {
    res.redirect('yourself-overview-options')
  } else if (niFound === 'No') {
    res.redirect('yourself-adviser-prompt')
  } else {
    res.redirect('yourself-find-claimant')
  }
})

router.post('/yourself-live-in-uk-router', (req, res, next) => {
  const yourselfLiveInUk = req.session.data['yourself-live-in-uk']

  if (yourselfLiveInUk === 'Yes') {
    res.redirect('yourself-address-postcode')
  } else if (yourselfLiveInUk === 'No') {
    res.redirect('yourself-address-manual')
  } else {
    res.redirect('yourself-adviser-fallout')
  }
})


router.post('/yourself-employment-yn-router', (req, res, next) => {
  const yourselfEmploymentYn = req.session.data['yourself-employment-yn']

  if (yourselfEmploymentYn === 'Yes') {
    res.redirect('yourself-employment-type')
  } else if (yourselfEmploymentYn === 'No') {
    res.redirect('yourself-employment-none')
  } else {
    res.redirect('yourself-adviser-fallout')
  }
})

router.post('/yourself-employment-type-router', (req, res, next) => {
  const yourselfEmploymentYn = req.session.data['yourself-employment-type']

  if (yourselfEmploymentYn === 'Employed in the UK') {
    res.redirect('yourself-employment-yes')
  } else if (yourselfEmploymentYn === 'Self-employed in the UK') {
    res.redirect('yourself-self-employment-yes')
  } else {
    res.redirect('yourself-adviser-fallout')
  }
})

router.post('/yourself-employment-none-router', (req, res, next) => {
  const yourselfEmploymentYn = req.session.data['yourself-employment-none']

  if (yourselfEmploymentYn === 'I am retired') {
    res.redirect('outcome-estimate')
  } else if (yourselfEmploymentYn === 'I am receiving benefits') {
    res.redirect('outcome-estimate')
  } else {
    res.redirect('outcome-estimate')
  }
})






router.post('/yourself-employment-yes-router', (req, res, next) => {
  const yourselfEmploymentYn = req.session.data['yourself-employment-yes']

  if (yourselfEmploymentYn === 'Yes') {
    res.redirect('Yes')
  } else if (yourselfEmploymentYn === 'No') {
    res.redirect('No')
  } else {
    res.redirect('yourself-adviser-fallout')
  }
})

router.post('/yourself-self-employment-yes-router', (req, res, next) => {
  const yourselfEmploymentYn = req.session.data['yourself-self-employment-yes']

  if (yourselfEmploymentYn === 'Yes') {
    res.redirect('yourself-employment-end')
  } else if (yourselfEmploymentYn === 'No') {
    res.redirect('yourself-self-employment-class2-end')
  } else {
    res.redirect('outcome-forecast-a')
  }
})

router.post('/yourself-employment-end-router', (req, res, next) => {
  const yourselfEmploymentYn = req.session.data['yourself-employment-end']

  if (yourselfEmploymentYn === 'I reach a particular age') {
    res.redirect('outcome-bespoke')
  } else if (yourselfEmploymentYn === 'I reach a particular date') {
    res.redirect('outcome-bespoke')
  } else {
    res.redirect('outcome-forecast-a')
  }
})




router.post('/yourself-self-employment-class2-end-router', (req, res, next) => {
  const yourselfEmploymentYn = req.session.data['yourself-self-employment-class2-end']

  if (yourselfEmploymentYn === 'I reach a particular age') {
    res.redirect('outcome-bespoke')
  } else if (yourselfEmploymentYn === 'I reach a particular date') {
    res.redirect('outcome-bespoke')
  } else {
    res.redirect('outcome-forecast-a')
  }
})









module.exports = router
