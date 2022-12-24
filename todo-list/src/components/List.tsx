import React from "react";
import { TodoList } from "../types/TodoList";
import Item from "./Item";

type Props = {
	todos: TodoList[];
	deleteTodo: (id: number) => void;
};

/**
 * Todo一覧を構成するコンポーネント
 *
 * @param todos {TodoList[]}
 * @param deleteTodo {(id: number) => void}
 * @returns
 */
const List = ({ todos, deleteTodo }: Props) => {
	return (
		<div>
			{todos.map((todo) => (
				<Item key={todo.id} todo={todo} deleteTodo={deleteTodo} />
			))}
		</div>
	);
};

export default List;
