const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
require("dotenv").config()
const mainroute = require('./routes/mainroute')

const app = express()

//connect database

//moddle ware
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))


// //rout ทดสอบ
// app.get('*',(req, res) =>{
//   res.json({
//     data:"This message from server"
//   })
// })

app.use('/api',mainroute)

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server started at ${port}`))
