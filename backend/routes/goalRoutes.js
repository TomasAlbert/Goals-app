import express from "express";
import { getGoals, setGoal, updateGoal, deleteGoal } from "../controllers/goalController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

//  Get goals and add goal
router.route("/").get(protect, getGoals).post(protect, setGoal);

// Update goal and delete goal
router.route("/:id").put(protect, updateGoal).delete(protect, deleteGoal);

export default router;
