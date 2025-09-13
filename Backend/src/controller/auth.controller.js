const userModel = require("../models/user.model");
const FoodPartnerModel = require("../models/foodPartner.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
async function registerUser(req, res) {
  const { fullName, email, password } = req.body;

  const isUserAlreadyExist = await userModel.findOne({ email });

  if (isUserAlreadyExist) {
    return res.status(400).json({
      message: "user already exist",
    });
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await userModel.create({
    fullName,
    email,
    password: hashedPassword,
  });

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET
  );

  res.cookie("token", token);
  res.status(201).json({
    message: "User registered successfully",
    user: { id: user._id, fullName: user.fullName, email: user.email },
  });
}

async function loginUser(req, res) {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email });

  if (!user) {
    return res.status(400).json({
      message: "Invalid password or email",
    });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(400).json({
      message: "Invalid password or email",
    });
  }
  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET
  );
  res.cookie("token", token);
  res.status(201).json({
    message: "User logged in successfully",
    user: { id: user._id, fullName: user.fullName, email: user.email },
  });
}

async function logOutUser(req, res) {
  res.clearCookie("token");
  res.status(200).json({
    message: "user Logged Out successfully",
  });
}

async function registerFoodPartner(req, res) {
  const { fullName, email, password } = req.body;

  const isUserAlreadyExist = await FoodPartnerModel.findOne({ email });

  if (isUserAlreadyExist) {
    return res.status(400).json({
      message: "Food Partner already exists",
    });
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  const foodPartner = await FoodPartnerModel.create({
    fullName,
    email,
    password: hashedPassword,
  });

  const token = jwt.sign(
    {
      id: foodPartner._id,
    },
    process.env.JWT_SECRET
  );

  res.cookie("token", token);
  res.status(201).json({
    message: "Food Partner registered successfully",
    foodPartner: {
      id: foodPartner._id,
      fullName: foodPartner.fullName,
      email: foodPartner.email,
    },
  });
}

async function loginFoodPartner(req, res) {
  const { email, password } = req.body;
  const foodPartner = await FoodPartnerModel.findOne({ email });

  if (!foodPartner) {
    return res.status(400).json({
      message: "Invalid password or email",
    });
  }

  const isPasswordValid = await bcrypt.compare(password, foodPartner.password);

  if (!isPasswordValid) {
    return res.status(400).json({
      message: "Invalid password or email",
    });
  }
  const token = jwt.sign(
    {
      id: foodPartner._id,
    },
    process.env.JWT_SECRET
  );
  res.cookie("token", token);
  res.status(201).json({
    message: "Food Partner logged in successfully",
    user: {
      id: foodPartner._id,
      fullName: foodPartner.fullName,
      email: foodPartner.email,
    },
  });
}

async function logOutFoodPartner(req, res) {
  res.clearCookie("token");
  res.status(200).json({
    message: "Food Partner Logged Out successfully",
  });
}
module.exports = {
  registerUser,
  loginUser,
  logOutUser,
  registerFoodPartner,
  loginFoodPartner,
  logOutFoodPartner,
};
