import mongoose from "mongoose";

const connectDB = async () => {
	try {
		const connect = await mongoose.connect(process.env.MONGO_DB_CONNECTION);
		console.log("Db connected succesfully");
	} catch (err) {
		console.log(err);
		process.exit(1);
	}
};

export { connectDB };
