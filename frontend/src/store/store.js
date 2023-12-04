import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/authSlice";
import goalReducer from "../redux/goalSlice";

export const store = configureStore({
	reducer: {
		auth: authReducer,
		goal: goalReducer,
	},
});
