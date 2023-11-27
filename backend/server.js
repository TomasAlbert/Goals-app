import express from "express";
import dotenv from "dotenv";
import goalRoutes from "./routes/goalRoutes.js";
import errorHandler from "./middleware/errorMiddleware.js";

dotenv.config();

const port = process.env.PORT;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", goalRoutes);

app.use(errorHandler);

app.listen(port || 8000, () => {
	console.log(`app is running ${port}`);
});
