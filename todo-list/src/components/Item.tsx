import React from "react";
import { TodoList } from "../types/TodoList";

type Props = {
	todo: TodoList;
	deleteTodo: (id: number) => void;
};

const Item = ({ todo, deleteTodo }: Props) => {
	return (
		<div>
			<button onClick={() => deleteTodo(todo.id)}>完了</button>
			<span>{todo.content}</span>
		</div>
	);
};

export default Item;
