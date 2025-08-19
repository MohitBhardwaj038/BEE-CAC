import { Router } from "express";
import { registerUSer } from "../controllers/user.controller.js";

const router = Router()

router.route("/register").post(registerUSer)



export default router