import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import Movies from "./components/movies";
import NavBar from "./components/navbar";
import PageNotFound from "./components/page-not-found";
function App() {

	return (
		<Routes>
			<Route path="/" element={<NavBar />}>
				<Route path="/" element={<Home />} />
				<Route path="/movies" element={<Movies />} />
			</Route>

			<Route path="*" element={<PageNotFound/>} />
		</Routes>
	);
}

export default App;
