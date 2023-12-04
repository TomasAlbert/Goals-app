import { useDispatch } from "react-redux";
import { deleteGoal } from "../redux/goalSlice";
import { formatDistanceToNow } from "date-fns";
import { useState } from "react";

const GoalItem = ({ goal }) => {
	const dispatch = useDispatch();
	const timeAgo = formatDistanceToNow(new Date(goal.createdAt), { addSuffix: true });
	const [isHidden, setIsHidden] = useState(false);

	const handleDelete = () => {
		setIsHidden(true);

		setTimeout(() => {
			dispatch(deleteGoal(goal._id));
		}, 500);
	};

	return (
		<div className={`goal-wrapper ${isHidden ? "hidden" : ""}`}>
			<div className="goal">
				<h2>{goal.text}</h2>
				<button onClick={handleDelete} className="close">
					close
				</button>
				<small>Published: {timeAgo}</small>
			</div>
		</div>
	);
};

export default GoalItem;
