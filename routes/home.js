const express = require('express')
const router = express.Router()
const moment = require('moment')
moment.locale('fr')

router.get('/', (req,res,next) =>{
  res.render("home")
})

module.exports = router
