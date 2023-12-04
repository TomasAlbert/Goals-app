import { useDispatch, useSelector } from "react-redux";
import { deleteGoal } from "../redux/goalSlice";
import { formatDistanceToNow } from "date-fns";
import Spinner from "./Spinner";

const GoalItem = ({ goal }) => {
	const dispatch = useDispatch();
	const timeAgo = formatDistanceToNow(new Date(goal.createdAt), { addSuffix: true });

	return (
		<div className="goal">
			<h2>{goal.text}</h2>
			<button onClick={() => dispatch(deleteGoal(goal._id))} className="close">
				close
			</button>
			<small>Published: {timeAgo}</small>
		</div>
	);
};

export default GoalItem;
