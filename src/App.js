import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Dashboard from "./components/Dashboard/NavbarDrawer";
import UserNameRecover from "./components/UserNameRecover/UserNameRecover";
import PasswordRecover from "./components/PasswordRecover/PasswordRecover";
import Checkout from "./components/AccountCreationForm/Checkout";
import * as React from "react";
function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<HomePage />}></Route>
                <Route exact path="/login" element={<Login />}></Route>
                <Route exact path="/register" element={<Register />}></Route>
                <Route exact path="/apply" element={<Checkout />}></Route>
                <Route exact path="/dashboard" element={<Dashboard />}></Route>
                <Route
                    exact
                    path="/recover/username"
                    element={<UserNameRecover />}
                ></Route>
                <Route
                    exact
                    path="/recover/password"
                    element={<PasswordRecover />}
                ></Route>
                
            </Routes>
        </Router>
    );
}

export default App;
