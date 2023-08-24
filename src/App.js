import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Dashboard from "./components/Dashboard/Dashboard";
import UserNameRecover from "./components/UserNameRecover/UserNameRecover";
import PasswordRecover from "./components/PasswordRecover/PasswordRecover";
import Checkout from "./components/AccountCreationForm/Checkout";
import AddBeneficiary from "./components/Beneficiary/AddBeneficiary";
import Neftapp from "./components/Neft/Neftapp";
import Setp from "./components/Setp/Setp";
import Rtgs from "./components/Rtgs/Rtgs";
import Imps from "./components/Imps/Imps";
import NavbarDrawer from "./components/Dashboard/NavbarDrawer";
import AccountSummary from "./components/Dashboard/AccountSummary";
import AdminLogin from "./components/Admin/adminLogin";
import AdminDashboard from "./components/Admin/adminDashboard";
import * as React from "react";
import BeneficiaryTable from "./components/Dashboard/Beneficiaries";
import AccountStatement from "./components/Dashboard/AccountStatement";
import { useDataLayerValue } from "./ContextAPI/DataLayer";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import AdminUsersList from "./components/Admin/comp/adminUsersList";
import AdminTransactionsList from "./components/Admin/comp/adminTransactionsList";

import SearchByCustomerID from "./components/Admin/SearchByCustomerID";
import SearchByAccountNumber from "./components/Admin/SearchByAccountNumber";
function App() {
    const [{ logged }, dispatch] = useDataLayerValue();
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<HomePage />}></Route>
                <Route exact path="/login" element={<Login />}></Route>
                <Route
                    exact
                    path="/search/cid"
                    element={<SearchByCustomerID />}
                ></Route>
                <Route
                    exact
                    path="/search/accno"
                    element={<SearchByAccountNumber />}
                ></Route>
                <Route exact path="/register" element={<Register />}></Route>
                <Route exact path="/apply" element={<Checkout />}></Route>
                <Route exact path="/admin/login" element={<AdminLogin />}></Route>
                <Route exact path="/admin/dashboard" element={<AdminDashboard />}></Route>
                <Route
                    exact
                    path = '/admin/dashboard/users'
                    element = {<AdminUsersList/>}
                ></Route>
                <Route
                    exact
                    path = '/admin/dashboard/transactions'
                    element = {<AdminTransactionsList/>}
                > </Route>
                <Route
                    exact
                    path="/beneficiaries"
                    element={
                        logged ? (
                            <>
                                <NavbarDrawer />
                                <BeneficiaryTable />
                            </>
                        ) : (
                            <ProtectedRoute />
                        )
                    }
                ></Route>
                <Route
                    exact
                    path="/statement"
                    element={
                        logged ? (
                            <>
                                <NavbarDrawer />
                                <AccountStatement />
                            </>
                        ) : (
                            <ProtectedRoute />
                        )
                    }
                ></Route>
                <Route
                    exact
                    path="/dashboard"
                    element={
                        logged ? (
                            <>
                                <NavbarDrawer />
                                <Dashboard />
                            </>
                        ) : (
                            <ProtectedRoute />
                        )
                    }
                ></Route>
                <Route
                    exact
                    path="/recover/username"
                    element={<UserNameRecover />}
                ></Route>
                <Route
                    exact
                    path="/recover/password"
                    element={
                        <>
                            <PasswordRecover />
                        </>
                    }
                ></Route>

                <Route
                    exact
                    path="/beneficiary"
                    element={
                        logged ? (
                            <>
                                <NavbarDrawer />
                                <AddBeneficiary />
                            </>
                        ) : (
                            <ProtectedRoute />
                        )
                    }
                ></Route>

                <Route
                    exact
                    path="/neft"
                    element={
                        logged ? (
                            <>
                                <NavbarDrawer />
                                <Neftapp />
                            </>
                        ) : (
                            <ProtectedRoute />
                        )
                    }
                ></Route>

                <Route
                    exact
                    path="/rtgs"
                    element={
                        logged ? (
                            <>
                                <NavbarDrawer />
                                <Rtgs />
                            </>
                        ) : (
                            <ProtectedRoute />
                        )
                    }
                ></Route>

                <Route
                    exact
                    path="/imps"
                    element={
                        logged ? (
                            <>
                                <NavbarDrawer />
                                <Imps />
                            </>
                        ) : (
                            <ProtectedRoute />
                        )
                    }
                ></Route>

                <Route
                    exact
                    path="/change-password"
                    element={
                        logged ? (
                            <>
                                <NavbarDrawer />
                                <Setp />
                            </>
                        ) : (
                            <ProtectedRoute />
                        )
                    }
                ></Route>

                <Route
                    exact
                    path="/summary"
                    element={
                        logged ? (
                            <>
                                <NavbarDrawer />
                                <AccountSummary />
                            </>
                        ) : (
                            <ProtectedRoute />
                        )
                    }
                ></Route>
            </Routes>
        </Router>
    );
}

export default App;
