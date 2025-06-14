import User from "../model/user.model.js";
import jwt from "jsonwebtoken";
import oauth2Client from "../utils/googleConfi.js";
import axios from "axios"



const generateAccessAndRefreshTokens = async (userId) => {
    try {
      const user = await User.findById(userId);
      const accessToken = user.generateAccessToken();

      const refreshToken = user.generateRefreshToken();
  
      user.refreshToken = refreshToken;
      await user.save({ validateBeforeSave: false });
  
      return { accessToken, refreshToken };
    } catch (error) {
        console.error("Token generation error:", error);
      throw new Error("Something went wrong while generating refresh and access tokens");
    }
  };
  
  

const registerUser = async (req, res) => {
  try {
    const { fullName, email, username, password } = req.body;
    console.log("email", email);

    if (
      [fullName, email, username, password].some(
        (field) => field?.trim() === ""
      )
    ) {
      throw new (400, "All fields are required")();
    }

    // console.log( req.files)

    const existedUser = await User.findOne({
      $or: [{ email }, { username }],
    });

    if (existedUser) {
      throw new Error(409, "User already exists");
    }

    const user = await User.create({
      fullName,
      email,
      password,
      username: username.toLowerCase(),
    });

    const createUser = await User.findById(user._id).select(
      "-password -refreshToken"
    );
    if (!createUser) {
      throw new Error(500, "somthing went wrong while registering user");
    }

    return res.status(201).json({
      success: true,
      message: "User registered",
    });
  } catch (error) {
    console.error("Register error:", error);
    res
      .status(500)
      .json({ success: false, message: "Server Error", error: error.message });
  }
};




const googleLogin = async (req,  res ) =>{
  try {
    const {code} =req.body;

  if (!code) {
      return res.status(400).json({ success: false, message: "Code is required" });
    }
    const { tokens } = await oauth2Client.getToken(code);
oauth2Client.setCredentials(tokens);


const userRes = await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${googleRes.tokens.access_token}`);
    
    const {fullName, email, username, } = userRes.data;
    let user = await User.findOne({email});

    if(!user){
      user = await User.create({
        username,
        email,
        fullName
      })
    }

    const{_id} = user;
     const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(
      user._id
    );

     return res
      .status(200)
      .cookie("accessToken", accessToken)
      .cookie("refreshToken", refreshToken)
      .json({

        accessToken,
        refreshToken,

        success: true,
        user,
        message: "User logged in successfully",
      });

    

  } catch (error) {
     console.error("user logged error:", error);
    res
      .status(500)
      .json({ success: false, message: "Server Error", error: error.message });

    
  }
}





const loginUser = async (req, res) => {
  // req body --> data
  // username or email
  // find the user
  // password check
  // access and refresh
  // sen cookies
  try {
    const { email,  password } = req.body;
    if (!email) {
      throw new Error(400, "username or email is required");
    }

    const user = await User.findOne({
      $or: [ { email }],
    });

    if (!user) {
      throw new Error(404, "User does not exist");
    }

    const isPasswordValid = await user.isPasswordCorrect(password);

    if (!isPasswordValid) {
      throw new Error(401, "invalid user credentials");
    }

    const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(
      user._id
    );

    const loggedInUser = await User.findById(user._id).select(
      "-password  -refreshToken"
    );
    

    return res
      .status(200)
      .cookie("accessToken", accessToken)
      .cookie("refreshToken", refreshToken)
      .json({

        accessToken,
        refreshToken,

        success: true,
        user: loggedInUser,
        message: "User logged in successfully",
      });
  } catch (error) {
    console.error("user logged error:", error);
    res
      .status(500)
      .json({ success: false, message: "Server Error", error: error.message });
  }
};


const logoutUser = async (req, res) => {
  try {
    await User.findByIdAndUpdate(
      req.user._id,
      {
        $set: { refreshToken: undefined },
      },
      {
        new: true,
      }
    );

    return res.status(201)
    .clearCookie("accessToken")
    .clearCookie("refreshToken")
    .json({
      success: true,
      message: "user logged out",
    });
  } catch (error) {
    console.error("user logged out error:", error);
    res
      .status(500)
      .json({ success: false, message: "Server Error", error: error.message });
  }

  //   return res.status(200).json(new Respons(200, {}, "user logged out"));
};

const refreshAccessToken = async (req, res) => {
  const incomingRefreshToken =
    req.cookies.refreshToken || req.body.refreshToken;

  if (!incomingRefreshToken) {
    throw new Error(401, "unauthorized request");
  }

  try {
    const decodedToken = jwt.verify(
      incomingRefreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );

    const user = User.findById(decodedToken.id);
    if (!user) {
      throw new Error(401, "invalid refresh  token");
    }

    if (incomingRefreshToken !== user?.refreshToken) {
      throw new Error(401, "refresh token is not valid");
    }

    const { accessToken, newRefreshToken } =
      await generateAccessAndRefreshTokens(user._id);

    return res
      .status(200)
      .cookie("accessToken", accessToken)
      .cookie("refreshToken", newRefreshToken)
      .json({
        success: true,
        message: "New access token refreshed successfully",
        accessToken,
        refreshToken: newRefreshToken,
      });
  } catch (error) {
    throw new error(401, "invalid refresh token");
  }
};



const getAllCourse = async( req, res)=>{
  try {
    
    
  } catch (error) {
    
  }
}

export { registerUser, loginUser, logoutUser, refreshAccessToken, googleLogin, getAllCourse };
