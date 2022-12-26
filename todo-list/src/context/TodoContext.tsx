import React, { useContext, createContext } from "react";
import useTodoReducer, { defaultTodoReducer } from "../lib/TodoRedcer";

const { todos, dispatch } = defaultTodoReducer;
const TodoContext = createContext(todos);
const TodoDispatchContext = createContext(dispatch);

type Props = {
	children: JSX.Element[];
};

const TodoProvider = ({ children }: Props) => {
	const { todos, dispatch } = useTodoReducer();
	return (
		<TodoContext.Provider value={todos}>
			<TodoDispatchContext.Provider value={dispatch}>
				{children}
			</TodoDispatchContext.Provider>
		</TodoContext.Provider>
	);
};

/**
 * Todoリストを登録しているコンテキストを返す関数
 *
 * @returns TodoContext
 */
const useTodoContext = () => useContext(TodoContext);

/**
 * 更新関数を登録しているコンテキストを返す関数
 *
 * @returns TodoDispatchContext
 */
const useDispatchTodoContext = () => useContext(TodoDispatchContext);

export { useTodoContext, useDispatchTodoContext };
export default TodoProvider;
