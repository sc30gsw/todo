import "./App.css";
import Todo from "./components/Todo";

const App = () => {
	return (
		<>
			<div className="app">
				<h2>Reminder</h2>
				<Todo />
			</div>
		</>
	);
};

export default App;
