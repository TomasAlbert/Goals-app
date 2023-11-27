import asyncHandler from "express-async-handler";

// @desc Get Goals
// @route GET /api/goals
// @acces Private

const getGoals = asyncHandler(async (req, res) => {
	res.status(200).json({
		message: "Get Goals",
	});
});

// @desc Set Goals
// @route POST /api/goals
// @acces Private

const setGoal = asyncHandler(async (req, res) => {
	if (!req.body.text) {
		res.status(400);
		throw new Error("Add text field");
	}
	res.status(200).json({
		message: "Set Goals",
	});
});

// @desc Upadate Goals
// @route PUT /api/goals/:id
// @acces Private

const updateGoal = asyncHandler(async (req, res) => {
	const id = req.params.id;
	res.status(200).json({
		message: `Update Goals ${id}`,
	});
});

// @desc Delete Goals
// @route DELETE /api/goals/:id
// @acces Private

const deleteGoal = asyncHandler(async (req, res) => {
	const id = req.params.id;
	res.status(200).json({
		message: `Remove Goals ${id}`,
	});
});

export { getGoals, setGoal, updateGoal, deleteGoal };
