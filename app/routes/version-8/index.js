const express = require('express')
const router = new express.Router()

  router.post('/start-work-router', (req, res, next) => {
    const workCheck = req.session.data['start-work']

    if (workCheck === 'Telephone') {
      res.redirect('telephone-national-insurance-check')
    } else if (workCheck === 'Paper') {
      res.redirect('paper-national-insurance-check')
    } else {
      res.redirect('xxx')
    }
  })

  router.post('/telephone-national-insurance-check-router', (req, res, next) => {
    const telephoneNIcheck = String(req.session.data['telephone-national-insurance-check']).toUpperCase()

    if (telephoneNIcheck === 'E1') {
      res.redirect('exclusion-1')
    } else if (telephoneNIcheck === 'E2') {
      res.redirect('exclusion-2')
    } else if (telephoneNIcheck === 'E3') {
      res.redirect('exclusion-3')
    } else if (telephoneNIcheck === 'E4') {
      res.redirect('exclusion-4')
    } else if (telephoneNIcheck === 'E5') {
      res.redirect('exclusion-5')
    } else if (telephoneNIcheck === 'E6') {
      res.redirect('exclusion-6')
    } else if (telephoneNIcheck === 'E7') {
      res.redirect('exclusion-7')
    } else if (telephoneNIcheck === 'E8') {
      res.redirect('exclusion-8')
    } else if (telephoneNIcheck === 'E9') {
      res.redirect('exclusion-9')
    } else if (telephoneNIcheck === 'E10') {
      res.redirect('exclusion-10')
    } else if (telephoneNIcheck === 'MCI') {
      res.redirect('exclusion-telephone-MCI')

    } else if (telephoneNIcheck === 'RRE') {
      res.redirect('telephone-enquiry-type')

    } else if (telephoneNIcheck === 'NOCOPE') {
      res.redirect('telephone-cope-check')

    } else if (telephoneNIcheck === 'YESCOPE') {
      res.redirect('telephone-enquiry-type')

    } else if (telephoneNIcheck === 'MISSINGNI') {
      res.redirect('exclustion-missing-ni')

    } else if (telephoneNIcheck === 'NI 00 11 22 A') {
      res.redirect('telephone-enquiry-type') // Normal

    } else if (telephoneNIcheck === 'NI 00 11 22 B') {
      res.redirect('exclusion-telephone-MCI')

    } else if (telephoneNIcheck === 'NI 00 11 22 C') {
      res.redirect('exclusion-telephone-isle-of-man')

    } else if (telephoneNIcheck === 'NI 00 11 22 D') {
      res.redirect('telephone-cope-check')

    } else if (telephoneNIcheck === 'NI 00 11 22 E') {
      res.redirect('exclusion-telephone-DEAD')

    } else if (telephoneNIcheck === 'NI 00 11 22 F') {
      res.redirect('telephone-enquiry-type')

    } else {
      res.redirect('exclusion-validation')
    }
  })

  router.post('/paper-national-insurance-check-router', (req, res, next) => {
    const paperNIcheck = String(req.session.data['paper-national-insurance-check']).toUpperCase()

    if (paperNIcheck === 'E1') {
      res.redirect('exclusion-1')
    } else if (paperNIcheck === 'E2') {
      res.redirect('exclusion-2')
    } else if (paperNIcheck === 'E3') {
      res.redirect('exclusion-3')
    } else if (paperNIcheck === 'E4') {
      res.redirect('exclusion-4')
    } else if (paperNIcheck === 'E5') {
      res.redirect('exclusion-5')
    } else if (paperNIcheck === 'E6') {
      res.redirect('exclusion-6')
    } else if (paperNIcheck === 'E7') {
      res.redirect('exclusion-7')
    } else if (paperNIcheck === 'E8') {
      res.redirect('exclusion-8')
    } else if (paperNIcheck === 'E9') {
      res.redirect('exclusion-9')
    } else if (paperNIcheck === 'E10') {
      res.redirect('exclusion-10')
    } else if (paperNIcheck === 'MCI') {
      res.redirect('exclusion-paper-MCI')

    } else if (paperNIcheck === 'RRE') {
      res.redirect('paper-who-is-caller')

    } else if (paperNIcheck === 'NOCOPE') {
      res.redirect('paper-cope-check')

    } else if (paperNIcheck === 'YESCOPE') {
      res.redirect('paper-who-is-caller')

    } else if (paperNIcheck === 'MISSINGNI') {
      res.redirect('exclustion-missing-ni')

    } else if (paperNIcheck === 'NI 00 11 22 A') {
      res.redirect('paper-who-is-caller') // Normal

    } else if (paperNIcheck === 'NI 00 11 22 B') {
      res.redirect('exclusion-paper-MCI')

    } else if (paperNIcheck === 'NI 00 11 22 C') {
      res.redirect('exclusion-paper-isle-of-man')

    } else if (paperNIcheck === 'NI 00 11 22 D') {
      res.redirect('paper-cope-check')

    } else if (paperNIcheck === 'NI 00 11 22 E') {
      res.redirect('exclusion-paper-DEAD')

    } else if (paperNIcheck === 'NI 00 11 22 F') {
      res.redirect('paper-who-is-caller')

    } else {
      res.redirect('exclusion-validation')
    }
  })



  router.post('/telephone-cope-check-router', (req, res, next) => {
    const telephoneCOPEcheck = req.session.data['telephone-cope-check']

    if (telephoneCOPEcheck === 'Yes') {
      res.redirect('telephone-who-is-caller')
    } else if (telephoneCOPEcheck === 'No') {
      res.redirect('telephone-enquiry-type')
    } else {
      res.redirect('xxx')
    }
  })

  router.post('/paper-cope-check-router', (req, res, next) => {
    const paperCOPEcheck = req.session.data['paper-cope-check']

    if (paperCOPEcheck === 'Yes') {
      res.redirect('paper-who-is-caller')
    } else {
      res.redirect('paper-who-is-caller')
    }
  })




  router.post('/paper-overview-continue-router', (req, res, next) => {
    const paperOverviewContinue = req.session.data['paper-overview-continue']

    if (paperOverviewContinue === 'Create forecast') {
      res.redirect('paper-who-is-caller')
    } else if (paperOverviewContinue === 'End call') {
      res.redirect('outcome-done')
    } else {
      res.redirect('other')
    }
  })

  router.post('/telephone-forecast-enquiry-router', (req, res, next) => {
    const telephoneForecastEnquiry = req.session.data['telephone-forecast-enquiry']

    if (telephoneForecastEnquiry === 'Forecast') {
      res.redirect('contact-formats')
    } else if (telephoneForecastEnquiry === 'Enquiry') {
      res.redirect('telephone-overview-ab')
    } else {
      res.redirect('service-rre')
    }
  })


  router.post('/address-check-router', (req, res, next) => {
    const addressCheck = req.session.data['address-check']

    if (addressCheck === 'United Kingdom') {
      res.redirect('address-postcode')
    } else if (addressCheck === 'Overseas') {
      res.redirect('address-manual')
    } else {
      res.redirect('XXX')
    }
  })



  router.post('/address-choice-router', (req, res, next) => {
    const postCode = req.session.data['postcode']

  if (postCode.includes('G42 9BT') === true) {
    res.redirect('address-choice-hard')
  }
  else if (postCode.includes('NE1 6BJ') === true) {
    res.redirect('address-choice-medium')
  }
  else {
    res.redirect('address-choice')
  }
  })




router.post('/contact-accessible-check-router', (req, res, next) => {
  const accessibleCheck = req.session.data['contact-accessible-check']

  if (accessibleCheck === 'Yes') {
    res.redirect('contact-formats')
  } else if (accessibleCheck === 'No') {
    res.redirect('outcome-forecast-check-notify')
  } else {
    res.redirect('XXX')
  }
})


router.post('/telephone-statement-check-router', (req, res, next) => {
  const telephoneStatementCheck = req.session.data['telephone-statement-check']

  if (telephoneStatementCheck === 'Yes') {
    res.redirect('telephone-overview')
  } else {
    res.redirect('telephone-online-prompt-forecast')
  }
})

router.post('/telephone-overview-ab-router', (req, res, next) => {
  const overViewAB = req.session.data['telephone-overview-ab']

  if (overViewAB === 'A') {
    res.redirect('telephone-overview-a')
  }
  if (overViewAB === 'A1') {
    res.redirect('telephone-overview-a1')
  }
  if (overViewAB === 'B') {
    res.redirect('telephone-overview-b')
  }
  if (overViewAB === 'B1') {
    res.redirect('telephone-overview-b1')
  } else {
    res.redirect('XXX')
  }
})

router.post('/fpc1-check-router', (req, res, next) => {
  const fpc1Check = req.session.data['fpc1-check']

  if (fpc1Check === 'Yes') {
    res.redirect('download-fpc1')
  } else {
    res.redirect('outcome-done')
  }
})

router.post('/telephone-enquiry-type-router', (req, res, next) => {
  const enquiryType = req.session.data['telephone-enquiry-type']
  const seenAForecastYN = req.session.data['seenAForecast-YN']
  const seenAForecastYN2 = req.session.data['seenAForecast-YN2']


  if (enquiryType === 'I want to improve my State Pension') {
    if (seenAForecastYN === 'Yes') {
      res.redirect('telephone-overview-ab')
    } else {
      res.redirect('telephone-who-is-caller')
    }

  } else if (enquiryType === 'Help with a forecast I have seen') {
    res.redirect('telephone-overview-ab')

  } else if (enquiryType === 'Request a forecast') {
  if (seenAForecastYN2 === 'telephone-overview-ab') {
    res.redirect('seenAForecastYN2Yes')
  } else {
    res.redirect('telephone-who-is-caller')
  }


  } else {
    res.redirect('XXX')
  }
})




// — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — — —





router.post('/telephone-rre-marital-status-router', (req, res, next) => {
  const rreMaritalStatus = req.session.data['telephone-rre-marital-status']

  if (rreMaritalStatus === 'Married') {
    res.redirect('telephone-rre-partner')
  } else if (rreMaritalStatus === 'Civil partnership') {
    res.redirect('telephone-rre-partner')
  } else if (rreMaritalStatus === 'Widowed') {
    res.redirect('telephone-rre-scenarios-separated')
  } else if (rreMaritalStatus === 'Divorced') {
    res.redirect('telephone-rre-scenarios-separated')
  } else if (rreMaritalStatus === 'Dissolved civil partnership') {
    res.redirect('telephone-rre-scenarios-separated')
  } else {
    res.redirect('contact-welsh')
  }
})



router.post('/telephone-rre-scenarios-router', (req, res, next) => {
  const rreScenarios = req.session.data['telephone-rre-scenarios']

  if (rreScenarios === 'RRE FLAG senario B') {
    res.redirect('telephone-rre-marital-status')
  } else if (rreScenarios === 'RRE FLAG senario C') {
    res.redirect('telephone-rre-marital-status')
  } else {
    res.redirect('contact-welsh')
  }
})

router.post('/telephone-rre-scenarios-continued-router', (req, res, next) => {
  const rreScenariosContinued = req.session.data['telephone-rre-scenarios-continued']

  if (rreScenariosContinued === 'RRE FLAG senario D') {
    res.redirect('telephone-rre-cope-check')
  } else if (rreScenariosContinued === 'RRE FLAG senario F') {
    res.redirect('telephone-rre-marital-status')
  } else {
    res.redirect('contact-welsh')
  }
})

router.post('/telephone-rre-scenarios-separated-router', (req, res, next) => {
  const rreScenariosSeparated = req.session.data['telephone-rre-scenarios-continued']

  if (rreScenariosSeparated === 'RRE FLAG senario D') {
    res.redirect('telephone-rre-cope-check')
  } else if (rreScenariosSeparated === 'RRE FLAG senario F') {
    res.redirect('telephone-rre-marital-status')
  } else {
    res.redirect('contact-welsh')
  }
})







router.post('/telephone-rre-cope-check-router', (req, res, next) => {
  const rreCopeCheck = req.session.data['telephone-rre-cope-check']

  if (rreCopeCheck === 'Yes') {
    res.redirect('telephone-rre-citizen-dob')
  } else {
    res.redirect('contact-formats')
  }
})


router.post('/contact-formats-router', (req, res, next) => {
  const contactFormats = req.session.data['contact-formats'] || []

if (contactFormats.includes('Audio form') === true) {
  res.redirect('contact-formats-fallout')
}
else if (contactFormats.includes('Audio CD, cassette or MP3') === true) {
  res.redirect('contact-formats-fallout')
}
else if (contactFormats.includes('Braille') === true) {
  res.redirect('contact-formats-fallout')
}
else if (contactFormats.includes('Large print') === true) {
  res.redirect('contact-formats-fallout')
}
else if (contactFormats.includes('Letters in Welsh') === true) {
  res.redirect('contact-formats-fallout')
}
else if (contactFormats.includes('TexBox') === true) {
  res.redirect('contact-formats-fallout')
}
else if (contactFormats.includes('TypeTalk') === true) {
  res.redirect('contact-formats-fallout')
}
else {
  res.redirect('outcome-forecast-check-notify')
}
})















module.exports = router
