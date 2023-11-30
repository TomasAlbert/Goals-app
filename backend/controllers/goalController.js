import asyncHandler from "express-async-handler";
import Goal from "../model/goalModel.js";
import User from "../model/userModel.js";

// @desc Get Goals
// @route GET /api/goals
// @acces Private

const getGoals = asyncHandler(async (req, res) => {
	const goals = await Goal.find({
		user: req.user.id,
	});
	res.status(200).json(goals);
});

// @desc Set Goals
// @route POST /api/goals
// @acces Private

const setGoal = asyncHandler(async (req, res) => {
	if (!req.body.text) {
		res.status(400);
		throw new Error("Add text field");
	}
	const newGoal = await Goal.create({
		text: req.body.text,
		user: req.user.id,
	});
	res.status(200).json(newGoal);
});

// @desc Upadate Goals
// @route PUT /api/goals/:id
// @acces Private

const updateGoal = asyncHandler(async (req, res) => {
	const id = req.params.id;
	const user = await User.findById(req.user.id);

	// Check for user
	if (!user) {
		res.status(401);
		throw new Error("User not found");
	}

	// User matches goal user
	if (goal.user.toString() !== user.id) {
		res.status(401);
		throw new Error("User not authorized");
	}

	const updateGoal = await Goal.findByIdAndUpdate(id, { text: req.body.text }, { new: true });
	if (!updateGoal) {
		res.status(400);
		throw new Error("Goal not found");
	}

	res.status(200).json(updateGoal);
});

// @desc Delete Goals
// @route DELETE /api/goals/:id
// @acces Private

const deleteGoal = asyncHandler(async (req, res) => {
	const id = req.params.id;
	const deleteGoal = await Goal.findByIdAndDelete(id);

	if (!deleteGoal) {
		res.status(400);
		throw new Error("Goal not found");
	}

	const user = await User.findById(req.user.id);

	// Check for user
	if (!user) {
		res.status(401);
		throw new Error("User not found");
	}

	// User matches goal user
	if (deleteGoal.user.toString() !== user.id) {
		res.status(401);
		throw new Error("User not authorized");
	}

	res.status(200).json(deleteGoal);
});

export { getGoals, setGoal, updateGoal, deleteGoal };
