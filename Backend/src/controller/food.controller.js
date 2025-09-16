const foodModel = require("../models/food.model");
const storageService = require("../services/storage.service");
const { v4: uuidv4 } = require("uuid");
async function createFood(req, res) {
  // console.log("req.body.foodPartner : ", req.body.foodPartner);
  // console.log("req.body : ", req.body);
  const fileUploadResult = await storageService.uploadFile(
    req.file.buffer,
    uuidv4()
  );
  const foodItem= await foodModel.create({
    name:req.body.name,
    description:req.body.description,
    video:fileUploadResult.url,
    foodPartner:req.foodPartner._id
  })
  res.status(201).json({message:"food created succesfully",
    food:foodItem
  })
  // console.log("fileuploadresult", fileUploadResult);
  // res.send("food item added");
}


async function getFoodItems(req,res){
  const foodItems= await foodModel.find({})
  res.status(200).json({
    message:"food items fetched successfully",
    foodItems:foodItems
  })
}

module.exports = { createFood ,getFoodItems};
