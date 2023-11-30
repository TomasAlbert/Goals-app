import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import goalRoutes from "./routes/goalRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import errorHandler from "./middleware/errorMiddleware.js";

dotenv.config();

const port = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", goalRoutes);
app.use("/api/users", userRoutes);

app.use(errorHandler);

app.listen(port || 8000, () => {
	connectDB();
	console.log(`app is running ${port}`);
});
