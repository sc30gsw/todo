import TodoProvider from "../context/TodoContext";
import Form from "./Form";
import List from "./List";

/**
 * Todoリストの全機能を実装するコンポーネント
 *
 * @returns
 */
const Todo = () => {
	return (
		<TodoProvider>
			<List />
			<Form />
		</TodoProvider>
	);
};

export default Todo;
