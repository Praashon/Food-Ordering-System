import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import validator from "validator";
import "dotenv/config";

// Login User
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Check If User Exists
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "User Doesn't Exist!" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ success: false, message: "Invalid Credentials!" });
    }

    // Generate Token
    const token = createToken(user._id);
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Internal Server Error!" });
  }
};

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

// Register User
const registerUser = async (req, res) => {
  const { name, password, email, phone, street, city, state, zipcode, country } = req.body;
  try {
    // Check If User Already Exists
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "User Already Exists!" });
    }
    // Validate Email Format and Strong Password
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Invalid Email!" });
    }
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Password must be at least 8 characters!",
      });
    }
    // Hash Password
    const hashPassword = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, hashPassword);

    // Create New User
    const newUser = new userModel({
      name: name,
      email: email,
      password: hashedPassword,
      phone: phone || "",
      street: street || "",
      city: city || "",
      state: state || "",
      zipcode: zipcode || "",
      country: country || "",
      profileImage: req.file ? req.file.filename : "",
    });
    const user = await newUser.save();

    // Generate Token
    const token = createToken(user._id);
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Internal Server Error!" });
  }
};

// Get User Profile
const getUserProfile = async (req, res) => {
  try {
    const userId = req.body.userId || req.userId;
    console.log("Get profile - User ID:", userId);
    
    const user = await userModel.findById(userId).select("-password");
    if (!user) {
      return res.json({ success: false, message: "User not found!" });
    }
    res.json({ success: true, user });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Internal Server Error!" });
  }
};

// Update User Profile
const updateUserProfile = async (req, res) => {
  try {
    // Use req.userId if req.body.userId is not available (can happen with FormData)
    const userId = req.body.userId || req.userId;
    
    if (!userId) {
      return res.json({ success: false, message: "User ID not found in request!" });
    }

    const { name, phone, street, city, state, zipcode, country } = req.body;
    const updateData = {
      name,
      phone,
      street,
      city,
      state,
      zipcode,
      country,
    };
    
    // Add profile image if uploaded
    if (req.file) {
      updateData.profileImage = req.file.filename;
    }

    const user = await userModel.findByIdAndUpdate(
      userId,
      updateData,
      { new: true }
    ).select("-password");

    if (!user) {
      return res.json({ success: false, message: "User not found!" });
    }

    res.json({ success: true, message: "Profile updated successfully!", user });
  } catch (error) {
    console.log("Error updating profile:", error);
    res.json({ success: false, message: "Internal Server Error!" });
  }
};

export { loginUser, registerUser, getUserProfile, updateUserProfile };
