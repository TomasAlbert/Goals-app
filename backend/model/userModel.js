import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
	{
		name: {
			type: String,
			required: [true, "Please add name"],
		},
		email: {
			type: String,
			required: [true, "Please add email"],
			unique: true,
		},
		password: {
			type: String,
			required: [true, "Please add password"],
		},
	},
	{
		timestamps: true,
	}
);

export default mongoose.model("User", userSchema);
