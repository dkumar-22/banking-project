import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Dashboard from "./components/Dashboard/NavbarDrawer";
import UserNameRecover from "./components/UserNameRecover/UserNameRecover";
import PasswordRecover from "./components/PasswordRecover/PasswordRecover";
import Checkout from "./components/AccountCreationForm/Checkout";
import AddBeneficiary from './components/Beneficiary/AddBeneficiary'
import Neftapp from './components/Neft/Neftapp'
import Setp from './components/Setp/Setp'
import Rtgs from './components/Rtgs/Rtgs'
import Imps from './components/Imps/Imps'
import NavbarDrawer from "./components/Dashboard/NavbarDrawer"
import AccountSummary from "./components/Dashboard/AccountSummary"
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
                    element={<><NavbarDrawer /><PasswordRecover /></>}
                ></Route>

                <Route
                    exact
                    path="/beneficiary"
                    element={<><NavbarDrawer /><AddBeneficiary /></>}
                ></Route>

                <Route
                    exact
                    path="/neft"
                    element={<><NavbarDrawer /><Neftapp /></>}
                ></Route>

                <Route
                    exact
                    path="/rtgs"
                    element={<><NavbarDrawer /><Rtgs /></>}
                ></Route>

                <Route
                    exact
                    path="/imps"
                    element={<><NavbarDrawer /><Imps /></>}
                ></Route>

                <Route
                    exact
                    path="/change-password"
                    element={<><NavbarDrawer /><Setp /></>}
                ></Route>

                <Route
                    exact
                    path="/summary"
                    element={<><NavbarDrawer /><AccountSummary /></>}
                ></Route>

            </Routes>
        </Router>
    );
}

export default App;
