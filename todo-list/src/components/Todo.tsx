import React, { useState } from "react";
import { TodoList } from "../types/TodoList";
import Form from "./Form";
import List from "./List";

const Todo = () => {
	const todosList: TodoList[] = [
		{
			id: 1,
			content: "店予約する",
		},
		{
			id: 2,
			content: "卵買う",
		},
		{
			id: 3,
			content: "郵便出す",
		},
	];

	const [todos, setTodos] = useState<TodoList[]>(todosList);

	return (
		<>
			<List todos={todos} />
			<Form />
		</>
	);
};

export default Todo;
