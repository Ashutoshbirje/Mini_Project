import { Router } from "express";
import { getUserProfile, registerUser } from "../controllers/user.controller.js";
import { loginUser } from "../controllers/user.controller.js";
import { logoutUser } from "../controllers/user.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";
import { refreshAccessToken } from "../controllers/user.controller.js"
const router = Router();

router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.route("/logout").post(verifyJWT, logoutUser)
router.route("/get-user-profile").get( verifyJWT, getUserProfile)

export default router