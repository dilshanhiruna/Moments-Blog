import express from "express";
import { signin, signin } from "../controllers/user.js";

const router = express.Router();

router.post("/signin", signin);
router.post("/signup", signin);

export default router;
