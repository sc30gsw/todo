import React from "react";
import { TodoList } from "../types/TodoList";

const List = ({ todos }: { todos: TodoList[] }) => {
	return (
		<div>
			{todos.map((todo) => (
				<div key={todo.id}>
					<button>完了</button>
					<span>{todo.content}</span>
				</div>
			))}
		</div>
	);
};

export default List;
