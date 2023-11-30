import mongoose, { Schema } from "mongoose";

const goalSchema = new Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: "User",
		},
		text: {
			type: String,
			required: [true, "Please add text value"],
		},
	},
	{
		timestamps: true,
	}
);

export default mongoose.model("Goal", goalSchema);
