import React from "react";
import "./App.css";

function App() {
	const [count, setCount] = React.useState(0);

	return (
		<div className="app">
			<div className="btn">
				<button onClick={() => setCount(count - 1)}>-</button>
			</div>
			<div className="count-container">
				<h1 className={count < 5 ? "less" : count > 100 ? "more" : null}>
					{count}
				</h1>
			</div>
			<div className="btn">
				<button onClick={() => setCount(count + 1)}>+</button>
			</div>
		</div>
	);
}

export default App;
