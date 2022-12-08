import React from "react";
import { TodoList } from "../types/TodoList";

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
				<div key={todo.id}>
					<button onClick={() => deleteTodo(todo.id)}>完了</button>
					<span>{todo.content}</span>
				</div>
			))}
		</div>
	);
};

export default List;
