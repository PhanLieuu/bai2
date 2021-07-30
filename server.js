const express=require('express')
const { MongoServerSelectionError } = require('mongodb')
const customerRouter=require('./routes/customer')
const indexRouter=require('./routes/index')
const methodOverride = require('method-override')
require('dotenv').config()
const mongoose=require('mongoose')
const app=express()

//views
app.use(methodOverride('_method'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

const connectFunc = async()=>{
    try{
        await mongoose.connect(process.env.STR_CONNECT)
        console.log("thành công")
    }catch(e){
        console.log("thất bại")
    }
}
connectFunc()
app.use('/customer/',customerRouter)
app.use('/',indexRouter)
app.listen(process.env.PORT||3000)