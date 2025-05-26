import { Router } from "express";
import { googleLogin, registerUser } from "../controllers/user.controllers.js";
import { loginUser } from "../controllers/user.controllers.js";
import { logoutUser } from "../controllers/user.controllers.js";
import { refreshAccessToken } from "../controllers/user.controllers.js";
import { verfyJWT } from "../middlewares/auth.Middlewares.js";


const router = Router();


router.route("/register").post(registerUser)

router.route("/login").post(loginUser)
router.route("/google-auth").get(googleLogin)




//secure routes
router.route("/logout").post( verfyJWT, logoutUser);


router.route("/refresh-token").post(refreshAccessToken);





export default router;