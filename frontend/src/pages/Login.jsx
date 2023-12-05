import { FaSignInAlt } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";
import { login, reset } from "../redux/authSlice";

const Login = () => {
	const [formData, setFormData] = useState({
		email: "john@gmail.com",
		password: "john",
	});
	const { email, password } = formData;

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);

	useEffect(() => {
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
		const userData = {
			email,
			password,
		};
		dispatch(login(userData));
	};

	if (isLoading) {
		return <Spinner />;
	}

	return (
		<>
			<section className="heading">
				<h1 className="login">
					<FaSignInAlt /> Login
				</h1>
				<p>Login and set up your goals</p>
			</section>
			<section className="form">
				<form onSubmit={formSubmitHandler}>
					<div className="form-group">
						<input type="email" className="form-control" id="email" name="email" value={email} placeholder="Add your email" onChange={handleChange} />
					</div>
					<div className="form-group">
						<input type="password" className="form-control" id="password" name="password" value={password} placeholder="Add your password" onChange={handleChange} />
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
