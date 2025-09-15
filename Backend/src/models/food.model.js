const mongoose=require('mongoose')

const foodModelSchema= mongoose.Schema({
    name:{type:String,required:true} ,
    video:{type:String,},
    description:{type:String},
    foodPartner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"foodPartner"
    }

},{timestamps:true})

const foodModel =mongoose.model("food",foodModelSchema)
module.exports=foodModel