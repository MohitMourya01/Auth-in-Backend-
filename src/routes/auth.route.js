import { Router } from "express";
import { signup, loginUser, logoutUser } from "../controller/auth.controller.js";

const router = Router()

router.route('/signup').get(signup)
router.route('/login').get(loginUser)
router.route('/logout').get(logoutUser)
export default router