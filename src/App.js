import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import P from "./P";
import { Routes, Route, Link } from "react-router-dom";
import About from "./About";

function App() {
  return (
    <div className="App">
      <Link to="/">home</Link>
      <Link to="/about">about</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
