import express from "express";
import { getGoals, setGoal, updateGoal, deleteGoal } from "../controllers/goalController.js";

const router = express.Router();

//  Get goals and add goal
router.route("/").get(getGoals).post(setGoal);

// Update goal and delete goal
router.route("/:id").put(updateGoal).delete(deleteGoal);

export default router;
