import User from "../models/userModel.js";
import bcrypt from "bcrypt";

export const UserRegister = async (req, res) => {
  try {
    const { fullName, email, mobileNumber, password } = req.body;

    if (!fullName || !email || !mobileNumber || !password) {
      const error = new Error("All field required");
      error.statusCode = 400;
      return next(error);
    }

    // check for duplicate user before registration
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      const error = new Error("Email Already Registered");
      error.statusCode = 409;
      return next(error);
    }

    //encrypt the password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    //save data to database
    const newUser = await User.create({
      fullName,
      email,
      mobileNumber,
      password: hashPassword,
    });

    //send response to frontEnd
    console.log(newUser);

    res.status(201).json({ message: "Registration Successfull" });

    //End
  } catch (error) {
    next(error);
  }
};
export const UserLogin = async (req, res) => {
  try {
    //fetch data from frontEnd
    const { email, password } = req.body;

    //verify all data exists
    if (!email || !password) {
      const error = new Error("All field required");
      error.statusCode = 400;
      return next(error);
    }

    // check if user is registered or not
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      const error = new Error("Email Not Registered");
      error.statusCode = 402;
      return next(error);
    }
    //verify the Password
    const isVerified = await bcrypt.compare(password, existingUser.password);
    if (!isVerified) {
      const error = new Error("Password didn't match");
      error.statusCode = 402;
      return next(error);
    }

    // send message to FrontEnd
    res.status(200).json({ message: "Login Successfull", data: existingUser });

    //End
  } catch (error) {
    next(error);
  }
};
export const UserLogout = async (req, res) => {
  try {
    res.status(200).json({ message: "Logout Successfull" });
  } catch (error) {
    next(error);
  }
};
