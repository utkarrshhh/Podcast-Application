//config
const express = require("express")
const app = express()
const cors = require("cors");
const error = require("./middleware/error") 
//router
const auth_router = require("./routes/auth")
const file_router = require("./routes/file")
//database
const dbcon = require("./db/dbcon")

//config
app.use(express.json())
app.use(cors())
require("dotenv").config()
dbcon()

//router
app.use("/auth",auth_router)
app.use("/file",file_router)
app.use(error.error)

app.listen(process.env.port,()=>{
    console.log("Server started with port "+process.env.port)
})