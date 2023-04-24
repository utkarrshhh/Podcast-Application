const express = require("express")
const app = express()
const cors = require("cors");

//database
const dbcon = require("./db/dbcon")
dbcon()

//cors
app.use(cors())
require("dotenv").config()

//config
app.use(express.json())

//router
const auth_router = require("./routes/auth")
const file_router = require("./routes/file")
app.use("/auth",auth_router)
app.use("/file",file_router)

const error = require("./middleware/error") 
app.use(error.error)
app.listen(process.env.port,()=>{
    console.log("Server started with port "+process.env.port)
})