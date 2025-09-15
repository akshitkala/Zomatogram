const foodModel = require("../models/food.model");
const storageService = require("../services/storage.service");
const { v4: uuidv4 } = require("uuid");
async function createFood(req, res) {
  console.log("req.body.foodPartner : ", req.body.foodPartner);
  console.log("req.body : ", req.body);
  const fileUploadResult = await storageService.uploadFile(
    req.file.buffer,
    uuidv4()
  );
  console.log("fileuploadresult", fileUploadResult);
  res.send("food item added");
}

module.exports = { createFood };
