const express=require('express')
const app=express()
const cors=require('cors')
const cookiParser=require('cookie-parser')
app.use(cors({
    origin:process.env.Cors_Origin,
    credentials:true
}))
app.use(express.json({limit:"16kb"}))
app.use(cookiParser())
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))


module.exports=app