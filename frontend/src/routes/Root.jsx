import Header from "../components/Header";
import { Outlet } from "react-router-dom";
const Root = () => {
	return (
		<div>
			<div className="container">
				<Header />
				<Outlet />
			</div>
		</div>
	);
};

export default Root;
