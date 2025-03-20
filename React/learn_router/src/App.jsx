import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import Movies from "./components/movies";
import NavBar from "./components/navbar";
import PageNotFound from "./components/page-not-found";
import Counter from "./components/counter.jsx"
import ContactUs from "./components/ContactUs.jsx"
function App() {

  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/counter" element={<Counter />} />
      </Route>

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
