import asyncHandler from "express-async-handler";
import Goal from "../model/goalModel.js";

// @desc Get Goals
// @route GET /api/goals
// @acces Private

const getGoals = asyncHandler(async (req, res) => {
	const goals = await Goal.find();
	console.log(goals);
	res.status(200).json(goals);
});

// @desc Set Goals
// @route POST /api/goals
// @acces Private

const setGoal = asyncHandler(async (req, res) => {
	console.log(req.body.text);
	if (!req.body.text) {
		res.status(400);
		throw new Error("Add text field");
	}
	const newGoal = await Goal.create({
		text: req.body.text,
	});
	res.status(200).json(newGoal);
});

// @desc Upadate Goals
// @route PUT /api/goals/:id
// @acces Private

const updateGoal = asyncHandler(async (req, res) => {
	const id = req.params.id;
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

	res.status(200).json(deleteGoal);
});

export { getGoals, setGoal, updateGoal, deleteGoal };
