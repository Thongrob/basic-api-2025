const express = require('express')
const router = express.Router()
const {cal} = require('../controllers/callController.js')

// //ทดสอบ route
// router.get('/mainroute',(req, res) => {
// 	res.json({
// 	data: "Hello, this is message from route"
// 	})
// })

//สร้าง Route

router.get('/resData', cal)

module.exports = router
