import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

export const Protect = async (req, res, next) => {
  try {
    const biscut = req.cookies.parleG;

    console.log("Token recieved in Cookies", biscut);

    const tea = jwt.verify(biscut, process.env.JWT_SECRET);
    console.log(tea);

    const verifiedUser = await User.findById(tea.id);

    if (!tea) {
      const error = new Error("Unauthorized! Please Login Again");
      error.statuscode = 401;
      return next(error);
    }

    if (!verifiedUser) {
      const error = new Error("Unauthorized! Please Login Again");
      error.statuscode = 401;
      return next(error);
    }

    req.user= verifiedUser;

    next();
  } catch (error) {
    next(error);
  }
};
