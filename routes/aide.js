const express = require('express')
const router = express.Router()
const moment = require('moment')
const Aide = require("../models/Aide")
moment.locale('fr')

router.get('/', (req,res,next) =>{
  res.render("aide")

})

router.get('/list', (req,res,next) => {

  Aide.find()
  .then(aides => {
    res.json({
      confirmation:'success',
      data:aides
    })
    const data = {
      aides:aides
    }
})

module.exports = router
/*
res.json({
  test:"test"
})
*/
