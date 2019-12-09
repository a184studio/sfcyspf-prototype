const express = require('express')
const router = new express.Router()

  router.post('/start-work-router', (req, res, next) => {
    const workCheck = req.session.data['start-work']

    if (workCheck === 'Telephone') {
      res.redirect('telephone-who-is-caller')
    } else if (workCheck === 'Paper') {
      res.redirect('paper-who-is-caller')
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
    } else if (telephoneNIcheck === 'RRE') {
      res.redirect('telephone-rre')
    } else if (telephoneNIcheck === 'NOCOPE') {
      res.redirect('telephone-cope-check')
    } else if (telephoneNIcheck === 'NI00112233A') {
      res.redirect('telephone-cope-check')
    } else {
      res.redirect('validation')
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
    } else if (paperNIcheck === 'RRE') {
      res.redirect('paper-rre')
    } else if (paperNIcheck === 'NOCOPE') {
      res.redirect('paper-cope-check')
    } else if (paperNIcheck === 'NI00112233A') {
      res.redirect('contact-formats')
    } else {
      res.redirect('validation')
    }
  })



  router.post('/telephone-cope-check-router', (req, res, next) => {
    const telephoneCOPEcheck = req.session.data['telephone-cope-check']

    if (telephoneCOPEcheck === 'No') {
      res.redirect('telephone-forecast-enquiry')
    } else if (telephoneCOPEcheck === 'Yes') {
      res.redirect('telephone-forecast-enquiry')
    } else {
      res.redirect('xxx')
    }
  })

  router.post('/paper-cope-check-router', (req, res, next) => {
    const paperCOPEcheck = req.session.data['paper-cope-check']

    if (paperCOPEcheck === 'Yes') {
      res.redirect('outcome-no-cope')
    } else {
      res.redirect('address-check')
    }
  })

  router.post('/telephone-forecast-enquiry-router', (req, res, next) => {
    const telephoneForecastEnquiry = req.session.data['telephone-forecast-enquiry']

    if (telephoneForecastEnquiry === 'Forecast') {
      res.redirect('contact-formats')
    } else if (telephoneForecastEnquiry === 'Enquiry') {
      res.redirect('telephone-statement-check')
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
  } else {
    res.redirect('telephone-overview-b')
  }
})












module.exports = router
