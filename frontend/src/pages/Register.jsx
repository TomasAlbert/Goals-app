import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { register, reset } from "../redux/authSlice";
import { FaRegUserCircle } from "react-icons/fa";
import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";

const Register = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		password2: "",
	});
	const { name, email, password, password2 } = formData;

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);

	useEffect(() => {
		console.log("hello");
		if (isError) {
			toast.error(message);
		}
		if (isSuccess || user) {
			navigate("/");
		}

		dispatch(reset());
	}, [user, isError, isSuccess, navigate, message, dispatch]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const formSubmitHandler = (e) => {
		e.preventDefault();
		if (password !== password2) {
			toast.error("Password not match");
		} else {
			const userData = { name, email, password };
			dispatch(register(userData));
		}
	};

	if (isLoading) {
		return <Spinner />;
	}

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
						<input type="text" className="form-control" id="name" name="name" value={name} placeholder="Add your name" onChange={handleChange} />
					</div>
					<div className="form-group">
						<input type="email" className="form-control" id="email" name="email" value={email} placeholder="Add your email" onChange={handleChange} />
					</div>
					<div className="form-group">
						<input type="password" className="form-control" id="password" name="password" value={password} placeholder="Add your password" onChange={handleChange} />
					</div>
					<div className="form-group">
						<input type="password" className="form-control" id="password2" name="password2" value={password2} placeholder="Confirm password" onChange={handleChange} />
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
