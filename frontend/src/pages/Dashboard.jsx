import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../components/Spinner";
import GoalForm from "../components/GoalForm";
import GoalItem from "../components/GoalItem";
import { getGoals, reset } from "../redux/goalSlice";

const Dashboard = () => {
	const navigate = useNavigate("");
	const disptach = useDispatch();

	const { user } = useSelector((state) => state.auth);
	const { goals, isLoading, isError, message } = useSelector((state) => state.goal);

	useEffect(() => {
		if (isError) {
			console.log(message);
		}
		if (!user) {
			navigate("/login");
		} else {
			disptach(getGoals());
		}
		return () => {
			disptach(reset());
		};
	}, [user, navigate, disptach, isError, message]);
	if (isLoading) {
		return <Spinner />;
	}
	return (
		<>
			<section className="heading">
				<h1>Welcome {user && user.name}</h1>
				<p>Goals Dashboard</p>
			</section>
			<GoalForm />
			<section className="content">
				{goals.length > 0 ? (
					<div className="goals">
						{goals.map((goal) => (
							<GoalItem key={goal._id} goal={goal} />
						))}
					</div>
				) : (
					<h3>You have not set any goals!</h3>
				)}
			</section>
		</>
	);
};

export default Dashboard;
