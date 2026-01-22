import jwt from "jsonwebtoken";

export const genToken =  (user, res) => {
  try {
    const payload = {
      id: user._id,
      role: user.role || "admin",
    };
    const token =  jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1d",
    }); // 1h, default-60sec and empty for forever

    console.log(token);

    res.cookie("parleG", token, {
      maxAge: 1000 * 60 * 60 * 24, //1 day
      httpOnly: true, // works only for http
      secure: false,
      sameSite: "lax",//lax is code for thunderClient

    });
  } catch (error) {
    throw error;
  }
};
