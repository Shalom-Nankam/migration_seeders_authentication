const express = require("express");
const bCrypt = require("bcrypt");
const User = require("../models/user");
const middlware = require("../middlewares/global.middlware");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const router = express.Router();

router.post("/login", middlware, async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({
    where: {
      email: email,
    },
  });

  if (!user) {
    res
      .status(400)
      .json({ message: "User with email " + email + " not found." });
    return;
  }

  const isValidPassword = bCrypt
    .compare(password.toString(), user.password.toString())
    .then({})
    .catch((err) => {
      console.log({
        err,
      });
    });

  if (!isValidPassword) {
    res.status(401).json({ message: "Wrong password, not authenticated" });
    return;
  }

  const userToken = jwt.sign({ email: email }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  res.status(200).json({
    message: "Logged in successfully",
    token: userToken,
  });
});

router.post("/register", middlware, async (req, res) => {
  try {
    const userInfo = req.body;
    const hashedPassword = bCrypt.hash(userInfo.password, 10);
    userInfo.password = (await hashedPassword).toString();
    const newUser = await User.create({
      first_name: userInfo.first_name,
      last_name: userInfo.last_name,
      email: userInfo.email,
      password: userInfo.password,
      role: userInfo.role,
    });
    res.status(201).json({
      message: "User created successfully",
      user: { userInfo },
    });
  } catch (error) {
    console.log({
      error,
    });
    res.status(500).json({
      message: "An error occured.",
      data: null,
    });
  }
});

router.post("*", (req, res) => {
  res.status(404).json({
    message: "Resource not found!",
  });
});

module.exports = { router, users };
