import mongoose, { Schema } from "mongoose";

const goalSchema = new Schema(
	{
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
