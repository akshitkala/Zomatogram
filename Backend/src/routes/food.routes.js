const express =require('express')
const authMiddleware=require('../middlewares/food.middleware')
const foodController=require('../controller/food.controller')
const multer= require('multer')
const router = express.Router();

const upload =multer({storage:multer.memoryStorage()})


// post /api/food [Protected]
router.post(
  '/',
  upload.single('video'),
  authMiddleware.authFoodPartnerMiddleware,
  foodController.createFood
);
module.exports=router