import React, { FormEvent, useState } from "react";
import { useDispatchTodoContext } from "../context/TodoContext";
import { TodoList } from "../types/TodoList";

/**
 * Todo入力欄を構成するコンポーネント
 *
 * @param createTodo {(todo: TodoList) => void}
 * @returns
 */
const Form = () => {
	const dispatch = useDispatchTodoContext();
	const [enteredTodo, setEnteredTodo] = useState<string>("");

	/**
	 * フォーム送信時にTodoを追加するための関数
	 *
	 * @param e onSubmitイベント
	 * @returns
	 */
	const addTodo = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// 入力欄が空の場合、処理を抜ける
		if (enteredTodo === "") return;

		// 追加するTodoオブジェクトの作成
		const newTodo: TodoList = {
			id: Math.floor(Math.random() * 1e5),
			content: enteredTodo,
			editing: false,
		};

		// Todo登録
		// createTodo(newTodo);
		dispatch({ type: "todo/add", todo: newTodo });
		// 入力欄を空にする
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
