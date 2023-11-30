import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { useState } from "react";

const Register = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		password2: "",
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
					<FaRegUserCircle /> Register
				</h1>
				<p>Please create account</p>
			</section>
			<section className="form">
				<form onSubmit={formSubmitHandler}>
					<div className="form-group">
						<input type="text" className="form-control" id="name" name="name" value={formData.name} placeholder="Add your name" onChange={handleChange} />
					</div>
					<div className="form-group">
						<input type="email" className="form-control" id="email" name="email" value={formData.email} placeholder="Add your email" onChange={handleChange} />
					</div>
					<div className="form-group">
						<input type="password" className="form-control" id="password" name="password" value={formData.password} placeholder="Add your password" onChange={handleChange} />
					</div>
					<div className="form-group">
						<input type="password2" className="form-control" id="password2" name="password2" value={formData.password2} placeholder="Confirm password" onChange={handleChange} />
					</div>
					<button type="submit" className="btn btn-block">
						Register
					</button>
				</form>
			</section>
		</>
	);
};

export default Register;
