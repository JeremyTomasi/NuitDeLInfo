const express = require('express')
const router = express.Router()
const moment = require('moment')
moment.locale('fr')

router.get('/', (req,res,next) =>{
  res.render("aide")

})

module.exports = router
/*
res.json({
  test:"test"
})
*/
