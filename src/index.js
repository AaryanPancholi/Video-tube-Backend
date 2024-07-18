require('dotenv').config()
const connectDb=require('./db/db')
const express=require('express')
const app=require('./app')
connectDb().then(()=>{
    app.listen(process.env.PORT||8000,()=>{
        console.log('server is running at '+process.env.PORT)
    })
}).catch((err)=>{
    console.log(`There is error ${err}`)
})

