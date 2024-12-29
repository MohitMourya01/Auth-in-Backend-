import { Router } from "express";
import { signup, loginUser, logoutUser } from "../controller/auth.controller.js";

const router = Router()

router.route('/signup').post(signup)
router.route('/login').post(loginUser)
router.route('/logout').post(logoutUser)
// router.route('/verify-email').post(verifyEmail)
export default router