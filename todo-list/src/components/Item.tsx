import React, { useState } from "react";
import { useDispatchTodoContext } from "../context/TodoContext";
import { TodoList } from "../types/TodoList";

type Props = {
	todo: TodoList;
};

/**
 * Todo一覧の各Todoを構成するコンポーネント
 *
 * @param todo {TodoList}
 * @param deleteTodo {(id: number) => void}
 * @param updateTodo {(todo: TodoList) => void}
 * @returns
 */
const Item = ({ todo }: Props) => {
	const dispatch = useDispatchTodoContext();
	const [editContent, setEditContent] = useState<string>(todo.content);

	const complete = (todo: TodoList) => {
		dispatch({ type: "todo/delete", todo });
	};

	/**
	 * 入力値をuseStateに設定する関数
	 *
	 * @param e ChangeEvent
	 * @returns  void
	 */
	const changeEditContent = (e: React.ChangeEvent<HTMLInputElement>) =>
		setEditContent(e.target.value);

	/**
	 * テキスト(span)と入力欄(input)の切り替えを行う関数
	 *
	 * @returns void
	 */
	const toggleEditMode = () => {
		const newTodo = { ...todo, editing: !todo.editing };
		dispatch({ type: "todo/update", todo: newTodo });
	};

	/**
	 * Todoの更新を送信するための関数
	 *
	 * @param e FormEvent
	 * @returns void
	 */
	const confirmEditTodo = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const newTodo = { ...todo, content: editContent, editing: !todo.editing };
		dispatch({ type: "todo/update", todo: newTodo });
	};

	return (
		<div>
			<button onClick={() => complete(todo)}>完了</button>
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
