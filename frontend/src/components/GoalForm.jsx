import { useState } from "react";
import { useDispatch } from "react-redux";
import { createGoal } from "../redux/goalSlice";
const GoalForm = () => {
	const [text, setText] = useState("");

	const dispatch = useDispatch();

	const onSubmit = async (e) => {
		e.preventDefault();
		if (text === "") return;

		dispatch(createGoal({ text }));
		setText("");
	};
	return (
		<section className="form">
			<form onSubmit={onSubmit}>
				<div className="form-group">
					<label htmlFor="text">Goal</label>
					<input type="text" name="text" id="text" value={text} onChange={(e) => setText(e.target.value)} />
				</div>
				<div className="form-group">
					<button className="btn btn-block" type="submit">
						Add goal
					</button>
				</div>
			</form>
		</section>
	);
};

export default GoalForm;
