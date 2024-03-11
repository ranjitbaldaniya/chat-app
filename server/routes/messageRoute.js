import express from "express";
import { getMessages, sendMessage } from "../controller/messageController.js";
import protectRoute from "../middleware/protectedRoute.js";

const router = express.Router();

router.get("/:id", protectRoute, getMessages);
router.post("/send/:id", protectRoute, sendMessage);

export default router;
