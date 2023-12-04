import { FaSignInAlt, FaRegUserCircle, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.auth);

	const logoutHandler = () => {
		dispatch(logout());
		dispatch(reset());
		navigate("/");
	};

	return (
		<>
			<header className="header">
				<div className="logo">
					<Link to={"/"}>Goals</Link>
				</div>
				<ul>
					{user ? (
						<li>
							<button className="btn" onClick={logoutHandler}>
								<FaSignOutAlt /> Logout
							</button>
						</li>
					) : (
						<>
							<li>
								<Link to={"/login"}>
									<FaSignInAlt /> Login
								</Link>
							</li>
							<li>
								<Link to={"/register"}>
									<FaRegUserCircle /> Register
								</Link>
							</li>
						</>
					)}
				</ul>
			</header>
		</>
	);
};

export default Header;
