import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppRouter from './router'

function App() {
  return (
    <>
			<Router>
				<AppRouter  />
			</Router>
		</>
  );
}

export default App;
