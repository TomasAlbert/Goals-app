import { FaSignInAlt, FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className="header">
			<div className="logo">
				<Link to={"/"}>Goals</Link>
			</div>
			<ul>
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
			</ul>
		</header>
	);
};

export default Header;
