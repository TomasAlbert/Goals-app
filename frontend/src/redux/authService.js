import axios from "axios";

const API_URL = "http://localhost:5000/api/users/";

// Register user
const register = async (userData) => {
	try {
		console.log("Sending registration request");
		const res = await axios.post(API_URL, userData);
		console.log("Registration response:", res.data);

		if (res.data) {
			localStorage.setItem("user", JSON.stringify(res.data));
		}

		return res.data;
	} catch (error) {
		console.error("Registration error:", error);
		throw error; // Rethrow the error to be caught by the calling function
	}
};

// Logout user
const logout = () => {
	localStorage.removeItem("user");
};

// Login user
const login = async (userData) => {
	try {
		console.log("Sending registration request");
		const res = await axios.post(API_URL + "login", userData);
		console.log("login response:", res.data);

		if (res.data) {
			localStorage.setItem("user", JSON.stringify(res.data));
		}

		return res.data;
	} catch (error) {
		console.error("Login error:", error);
		throw error; // Rethrow the error to be caught by the calling function
	}
};

const authService = {
	register,
	logout,
	login,
};

export default authService;
