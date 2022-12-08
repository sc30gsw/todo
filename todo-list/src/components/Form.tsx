import React, { FormEvent, useState } from "react";
import { TodoList } from "../types/TodoList";

type Props = {
	createTodo: (todo: TodoList) => void;
};

const Form = ({ createTodo }: Props) => {
	const [enteredTodo, setEnteredTodo] = useState<string>("");

	const addTodo = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (enteredTodo === "") return;

		const newTodo: TodoList = {
			id: Math.floor(Math.random() * 1e5),
			content: enteredTodo,
		};

		createTodo(newTodo);
		setEnteredTodo("");
	};

	return (
		<div>
			<form onSubmit={addTodo}>
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
