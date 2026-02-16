const express = require('express')
const router = express.Router()
const {resdata} = require('../controllers/resData.js')

// //ทดสอบ route
// router.get('/mainroute',(req, res) => {
// 	res.json({
// 	data: "Hello, this is message from route"
// 	})
// })

//สร้าง Route

router.get('/resdata', resdata)

module.exports = router
