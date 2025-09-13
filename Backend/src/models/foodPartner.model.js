const mongoose=require('mongoose')

const foodPartnerSchema= mongoose.Schema({
fullName:{type:String,required:true} ,
    email:{type:String,required:true,unique:true},
    password:{type:String}
},{timestamps:true})

const FoodPartnerModel =mongoose.model("foodPartner",foodPartnerSchema)
module.exports=FoodPartnerModel