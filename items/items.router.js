const express = require('express')
const controller = require('./items.controller')

const router = express.Router()



router.get('/get-all', controller.GetAllItems)


module.exports = router