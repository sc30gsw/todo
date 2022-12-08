import React, { useState } from "react";

const Form = () => {
	const [enteredTodo, setEnteredTodo] = useState<string>("");
	return (
		<div>
			<form>
				<input
					type="text"
					value={enteredTodo}
					onChange={(e) => setEnteredTodo(e.target.value)}
				/>
				<button>追加</button>
			</form>
		</div>
	);
};

export default Form;
