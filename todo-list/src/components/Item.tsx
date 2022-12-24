import React, { useState } from "react";
import { TodoList } from "../types/TodoList";

type Props = {
	todo: TodoList;
	deleteTodo: (id: number) => void;
	updateTodo: (todo: TodoList) => void;
};

/**
 * Todo一覧の各Todoを構成するコンポーネント
 *
 * @param todo {TodoList}
 * @param deleteTodo {(id: number) => void}
 * @param updateTodo {(todo: TodoList) => void}
 * @returns
 */
const Item = ({ todo, deleteTodo, updateTodo }: Props) => {
	const [editContent, setEditContent] = useState<string>(todo.content);

	const changeEditContent = (e: React.ChangeEvent<HTMLInputElement>) =>
		setEditContent(e.target.value);

	const toggleEditMode = () => {
		const newTodo = { ...todo, editing: !todo.editing };
		updateTodo(newTodo);
	};

	const confirmEditTodo = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const newTodo = { ...todo, content: editContent, editing: !todo.editing };
		updateTodo(newTodo);
	};

	return (
		<div>
			<button onClick={() => deleteTodo(todo.id)}>完了</button>
			<form onSubmit={confirmEditTodo} style={{ display: "inline" }}>
				{todo.editing ? (
					<input type="text" value={editContent} onChange={changeEditContent} />
				) : (
					<span onDoubleClick={toggleEditMode}>{editContent}</span>
				)}
			</form>
		</div>
	);
};

export default Item;
