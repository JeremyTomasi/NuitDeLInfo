const express = require('express')
const router = express.Router()
const moment = require('moment')
const Aide = require("../models/Aide")
moment.locale('fr')

router.get('/', (req,res,next) =>{
  res.redirect('/list')
})

router.get('/list', (req,res,next) => {

  Aide.find()
  .then(aides => {
    const data = {
      aides:aides
    }
    res.render("aide",data)
  })
})

router.get('/:aideId', (req,res,next) => {

  Aide.findById(req.params.aideId, (err, aide) => {
    if (err) {
      return next(err)
    }

    const data = {
      aide:aide
    }

    res.render("aideFull",data)

  })
})

module.exports = router
