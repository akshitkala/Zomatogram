const  express = require('express')
const cookieparser = require('cookie-parser')
const authRoutes=require('./routes/auth.routes')
const foodRoutes = require('./routes/food.routes')
const app= express()
app.use(express.json());
app.use(cookieparser());

app.get("/",(req,res)=>{
    res.send("hello world")
})

app.use('/api/auth',authRoutes)
app.use('/api/food',foodRoutes)

module.exports=app