require('dotenv').config()
const connectDb=require('./db/db')
const express=require('express')
const app=express()
connectDb()

app.listen(process.env.PORT,()=>{
    console.log(`Server is listening to ${process.env.PORT}`)
})