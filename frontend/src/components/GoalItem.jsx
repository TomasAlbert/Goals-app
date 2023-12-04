import { useDispatch } from "react-redux";
import { deleteGoal } from "../redux/goalSlice";
import { formatDistanceToNow } from "date-fns";
import { useState } from "react";

const GoalItem = ({ goal }) => {
	const dispatch = useDispatch();
	const timeAgo = formatDistanceToNow(new Date(goal.createdAt), { addSuffix: true });
	const [isHidden, setIsHidden] = useState(false);

	const handleDelete = () => {
		// Add a fade-out effect by hiding the goal item first
		setIsHidden(true);

		// Dispatch the delete action after a delay (you can adjust the duration)
		setTimeout(() => {
			dispatch(deleteGoal(goal._id));
		}, 500); // 500 milliseconds as an example, adjust as needed
	};

	return (
		<div className={`goal ${isHidden ? "hidden" : ""}`}>
			<h2>{goal.text}</h2>
			<button onClick={handleDelete} className="close">
				close
			</button>
			<small>Published: {timeAgo}</small>
		</div>
	);
};

export default GoalItem;
