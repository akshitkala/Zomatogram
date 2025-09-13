const express =require('express')
const authControllers=require('../controller/auth.controller')
const router = express.Router();

router.post('/user/register',authControllers.registerUser)
router.post('/foodpartner/register',authControllers.registerFoodPartner)
router.post('/user/login',authControllers.loginUser)
router.post('/foodpartner/login',authControllers.loginFoodPartner)
router.post('/user/logout',authControllers.logOutUser)
router.post('/foodpartner/logout',authControllers.logOutFoodPartner)

module.exports=router