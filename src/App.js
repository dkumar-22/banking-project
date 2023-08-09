import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<HomePage />}></Route>
                <Route exact path="/login" element={<Login />}></Route>
                <Route exact path="/register" element={<Register />}></Route>
            </Routes>
        </Router>
    );
}

export default App;
