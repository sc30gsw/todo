import { useTodoContext } from "../context/TodoContext";
import Item from "./Item";

/**
 * Todo一覧を構成するコンポーネント
 *
 * @returns
 */
const List = () => {
	const todos = useTodoContext();
	return (
		<div>
			{todos.map((todo) => (
				<Item key={todo.id} todo={todo} />
			))}
		</div>
	);
};

export default List;
