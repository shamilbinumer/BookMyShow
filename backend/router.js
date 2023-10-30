import { Router } from "express";
import * as controller from "./controller.js";
const router=Router();
router.route("/register").post(controller.addTask)
router.route("/movies").get(controller.getTask)
router.route("/MovieDetails/:id").post(controller.getDetails);
router.route("/DelMovie/:id").delete(controller.delMovie)
router.route("/EditMovie/:id").post(controller.editMovie)

export default router;