import { Router } from "express";
import * as controller from "./controller.js";
const router=Router();
router.route("/register").post(controller.addTask)
export default router;