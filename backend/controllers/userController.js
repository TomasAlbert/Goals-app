import JWT from "jsonwebtoken";
import bcrypt from "bcrypt";
import asyncHandler from "express-async-handler";
import User from "../model/userModel.js";

// @desc Register new user
// @route POST /api/users
// @acces PUBLIC

const registerUser = asyncHandler(async (req, res) => {
	const { name, email, password } = req.body;

	if (!name || !email || !password) {
		res.status(400);
		throw new Error("Please add all fields");
	}

	// Check if user exist
	const userExists = await User.findOne({ email });

	if (userExists) {
		res.status(400);
		throw new Error("User already exists");
	}

	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(password, salt);

	// Create user
	const user = await User.create({
		name,
		email,
		password: hashedPassword,
	});

	if (user) {
		res.status(201).json({
			_id: user.id,
			name: user.name,
			email: user.email,
			token: generateToken(user._id),
		});
	} else {
		res.status(400);
		throw new Error("Invalid user data");
	}
});

// @desc Authenticate user
// @route POST /api/users/login
// @acces PUBLIC

const loginUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body;

	// Check for user by email
	const user = await User.findOne({ email });

	if (user && (await bcrypt.compare(password, user.password))) {
		res.json({
			_id: user.id,
			name: user.name,
			email: user.email,
			token: generateToken(user._id),
		});
	} else {
		res.status(400);
		throw new Error("Invalid credentials");
	}
});

// @desc Get user data
// @route POST /api/users/me
// @acces PUBLIC

const getMe = asyncHandler(async (req, res) => {
	res.status(200).json(req.user);
});

// Generate JWT
const generateToken = (id) => {
	return JWT.sign({ id }, process.env.JWT_SECRET, {
		expiresIn: "30d",
	});
};

export { registerUser, loginUser, getMe };
