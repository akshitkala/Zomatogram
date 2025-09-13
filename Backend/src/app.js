const  express = require('express')
const cookieparser = require('cookie-parser')
const authRoutes=require('./routes/auth.routes')
const app= express()
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("hello world")
})

app.use('/api/auth',authRoutes)
module.exports=app