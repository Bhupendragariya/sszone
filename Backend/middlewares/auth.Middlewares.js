import jwt from "jsonwebtoken";
import User  from "../model/user.model.js";

export const verfyJWT = async (req, res, next) => {
  try {
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      return res.status(401).json({ success: false, message: "Unauthorized access - no token" });
    }

    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    const user = await User.findById(decoded._id).select(
      "-password -refreshToken"
    );

    if (!user) {
      return res.status(401).json({ success: false, message: "Invalid token - user not found" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error("JWT verification error:", error.message);
    return res.status(401).json({
      success: false,
      message: "Invalid or expired access token",
      error: error.message,
    });
  }
};




