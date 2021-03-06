const express = require('express')
const router = new express.Router()





  router.post('/start-work-router', (req, res, next) => {
    const workCheck = req.session.data['start-work']

    if (workCheck === 'Telephone') {
      res.redirect('call-type')
    } else if (workCheck === 'Paper') {
      res.redirect('paper-national-insurance')
    } else {
      res.redirect('xxx')
    }
  })

  router.post('/who-is-caller-router', (req, res, next) => {
    const whoIsCaller = req.session.data['who-is-caller']

  if (whoIsCaller === 'Citizen') {
    res.redirect('yourself-national-insurance')
  } else if (whoIsCaller === 'Corporate Acting Body (CAB)') {
    res.redirect('adviser-id-check')
  } else if (whoIsCaller === 'Personal Acting Body (PAB)') {
    res.redirect('adviser-id-check')
  } else if (whoIsCaller === 'Third party (EG)') {
    res.redirect('adviser-id-unofficial')
  } else {
    res.redirect('paper-who-is-caller')
  }
})



router.post('/call-type-router', (req, res, next) => {
  const callType = req.session.data['call-type']

if (callType === 'Forecast request') {
  res.redirect('telephone-who-is-caller')
} else if (callType === 'Personal enquiry') {
  res.redirect('yourself-national-insurance')
} else if (callType === 'Top general enquiry') {
  res.redirect('general-enquiry-top')
} else if (callType === 'Other general enquiries') {
  res.redirect('general-enquiry-all')
} else if (callType === 'HMRC Top enquiry') {
  res.redirect('hmrc-enquiry-top')
} else if (callType === 'Other HMRC enquiries') {
  res.redirect('hmrc-enquiry-all')
} else if (callType === 'Pension signposting') {
  res.redirect('pension-signposting')
} else if (callType === 'Answered without aid') {
  res.redirect('exit-check')
} else {
  res.redirect('xxx')
}
})












router.post('/paper-who-is-caller-router', (req, res, next) => {
  const whoIsCaller = req.session.data['paper-who-is-caller']

if (whoIsCaller === 'Citizen') {
  res.redirect('paper-address-check')
} else if (whoIsCaller === 'Corporate Acting Body (CAB)') {
  res.redirect('paper-address-check')
} else if (whoIsCaller === 'Personal Acting Body (PAB)') {
  res.redirect('paper-address-check')
} else if (whoIsCaller === 'Third party (EG)') {
  res.redirect('paper-address-check')
} else {
  res.redirect('paper-who-is-caller')
}
})


router.post('/who-is-caller-other-router', (req, res, next) => {
  const whoIsCaller = req.session.data['who-is-caller-other']

  if (whoIsCaller === 'Personal capacity') {
    res.redirect('legal-adviser-id-check')
  } else if (whoIsCaller === 'Organisation') {
    res.redirect('notlegal-adviser-id-check')
  } else {
    res.redirect('XXX')
  }
})



router.post('/yourself-cope-check-yn-router', (req, res, next) => {
  const whoIsCaller = req.session.data['yourself-cope-check-yn']

  if (whoIsCaller === 'No') {
    res.redirect('yourself-ni-found')
  } else if (whoIsCaller === 'Yes') {
    res.redirect('outcome-no-cope')
  } else {
    res.redirect('paper-address-check')
  }
})

router.post('/paper-cope-check-router', (req, res, next) => {
  const whoIsCaller = req.session.data['paper-cope-check-yn']

  if (whoIsCaller === 'No') {
    res.redirect('paper-who-is-caller')
  } else if (whoIsCaller === 'Yes') {
    res.redirect('paper-outcome-no-cope')
  } else {
    res.redirect('XXX')
  }
})



router.post('/paper-address-check-router', (req, res, next) => {
  const addressCheck = req.session.data['paper-address-check']

  if (addressCheck === 'United Kingdom') {
    res.redirect('paper-address-postcode')
  } else if (addressCheck === 'Overseas') {
    res.redirect('paper-address-manual')
  } else {
    res.redirect('XXX')
  }
})



router.post('/yourself-find-claimant-router', (req, res, next) => {
  const addressCheck = req.session.data['yourself-find-claimant-workAddress']

  if (addressCheck === 'United Kingdom') {
    res.redirect('yourself-address-postcode')
  } else if (addressCheck === 'Overseas') {
    res.redirect('yourself-address-manual')
  } else {
    res.redirect('XXX')
  }
})

router.post('/yourself-ni-found-yn-router', (req, res, next) => {
  const niFound = req.session.data['yourself-ni-found-yn']

  if (niFound === 'Yes') {
    res.redirect('yourself-overview-options')
  } else if (niFound === 'No') {
    res.redirect('yourself-adviser-prompt')
  } else {
    res.redirect('yourself-adviser-prompt')
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
    res.redirect('yourself-overview-not-gaining')
  }
})

router.post('/yourself-employment-none-router', (req, res, next) => {
  const yourselfEmploymentYn = req.session.data['yourself-employment-none']

  if (yourselfEmploymentYn === 'Yes - I am receiving credits') {
    res.redirect('outcome-forecast-a')
  } else if (yourselfEmploymentYn === 'Yes - I am on benefits') {
    res.redirect('outcome-forecast-a')
  } else {
    res.redirect('yourself-overview-not-gaining')
  }
})






router.post('/yourself-employment-yes-router', (req, res, next) => {
  const yourselfEmploymentYn = req.session.data['yourself-employment-yes']

  if (yourselfEmploymentYn === 'Yes') {
    res.redirect('yourself-employment-end-known')
  } else if (yourselfEmploymentYn === 'No') {
    res.redirect('yourself-overview-not-gaining')
  } else {
    res.redirect('yourself-overview-not-gaining')
  }
})

router.post('/yourself-self-employment-yes-router', (req, res, next) => {
  const yourselfEmploymentYn = req.session.data['yourself-self-employment-yes']

  if (yourselfEmploymentYn === 'Yes') {
    res.redirect('yourself-self-employment-end-known')
  } else if (yourselfEmploymentYn === 'No') {
    res.redirect('yourself-overview-not-gaining')
  } else {
    res.redirect('yourself-overview-not-gaining')
  }
})


router.post('/yourself-employment-end-router', (req, res, next) => {
  const yourselfEmploymentYn = req.session.data['yourself-employment-end']

  if (yourselfEmploymentYn === 'Yes') {
    res.redirect('yourself-employment-end-known')
  } else if (yourselfEmploymentYn === 'No') {
    res.redirect('outcome-forecast-a')
  } else {
    res.redirect('outcome-forecast-a')
  }
})

router.post('/yourself-employment-end-known-router', (req, res, next) => {
  const yourselfEmploymentYn = req.session.data['yourself-employment-end-known']

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

  if (yourselfEmploymentYn === 'Yes') {
    res.redirect('yourself-self-employment-class2-end-known')
  } else if (yourselfEmploymentYn === 'No') {
    res.redirect('outcome-forecast-a')
  } else {
    res.redirect('outcome-forecast-a')
  }
})


router.post('/yourself-self-employment-class2-end-known-router', (req, res, next) => {
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
