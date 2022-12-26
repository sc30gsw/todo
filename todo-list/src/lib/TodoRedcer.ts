import { useReducer } from "react";
import { TodoList } from "../types/TodoList";

const todosList: TodoList[] = [
	{
		id: 1,
		content: "店予約する",
		editing: false,
	},
	{
		id: 2,
		content: "卵買う",
		editing: false,
	},
	{
		id: 3,
		content: "郵便出す",
		editing: false,
	},
];

type Action = {
	type: string;
	todo: TodoList;
};

const reducer = (prevTodos: TodoList[], { type, todo }: Action) => {
	switch (type) {
		// Todo登録
		case "todo/add":
			return [...prevTodos, todo];

		// Todo削除
		case "todo/delete":
			return prevTodos.filter((_todo) => _todo.id !== todo.id);

		// Todo更新
		case "todo/update":
			return prevTodos.map((_todo) => {
				return _todo.id === todo.id ? { ..._todo, ...todo } : { ..._todo };
			});

		default:
			return prevTodos;
	}
};

const useTodoReducer = () => {
	const [todos, dispatch] = useReducer(reducer, todosList);

	return { todos, dispatch };
};

// createContextの初期値用オブジェクト
const defaultTodoReducer: ReturnType<typeof useTodoReducer> = {
	todos: [],
	dispatch: () => {},
};

export { defaultTodoReducer };
export default useTodoReducer;
