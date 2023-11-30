import React from "react";
import { FaSignInAlt } from "react-icons/fa";
import { useState } from "react";

const Login = () => {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const formSubmitHandler = (e) => {
		e.preventDefault();
		console.log(formData);
	};

	return (
		<>
			<section className="heading">
				<h1>
					<FaSignInAlt /> Login
				</h1>
				<p>Login and set up your goals</p>
			</section>
			<section className="form">
				<form onSubmit={formSubmitHandler}>
					<div className="form-group">
						<input type="email" className="form-control" id="email" name="email" value={formData.email} placeholder="Add your email" onChange={handleChange} />
					</div>
					<div className="form-group">
						<input type="password" className="form-control" id="password" name="password" value={formData.password} placeholder="Add your password" onChange={handleChange} />
					</div>
					<button type="submit" className="btn btn-block">
						Login
					</button>
				</form>
			</section>
		</>
	);
};

export default Login;
