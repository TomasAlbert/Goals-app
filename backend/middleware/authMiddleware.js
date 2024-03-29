import JWT from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../model/userModel.js";

const protect = asyncHandler(async (req, res, next) => {
	let token;

	if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
		try {
			// Get token from header
			token = req.headers.authorization.split(" ")[1];

			// Verify token
			const decoded = JWT.verify(token, process.env.JWT_SECRET);

			// Get user from the token
			req.user = await User.findById(decoded.id).select("-password");

			next();
		} catch (err) {
			console.log(err);
			res.status(401);
			throw new Error("Not authorized");
		}
	}

	if (!token) {
		res.status(401);
		throw new Error("Not authorized, no token");
	}
});

export default protect;
