require("dotenv").config()
const express = require("express")
const app = express()

const port = process.env.PORT

app.get("/" ,(req,res)=>{
    res.send("Hello welcome to Home page")
})
app.get("/login" ,(req,res)=>{
    res.sendFile("/backend-cac"+ "/index.html")
})
app.get("/signup" ,(req,res)=>{
    res.send("<h1>Welcome to Signup Page</h1>")
})


app.listen(port,(req,res)=>{
    console.log(`Listening to port ${port}`)
})
