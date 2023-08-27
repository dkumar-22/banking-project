import React, { useEffect } from "react";
import "./App.css";
import {
    Container,
    Card,
    CardContent,
    Typography,
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
} from "@mui/material";
import { useDataLayerValue } from "../../ContextAPI/DataLayer";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BankDashboard = () => {
    const [{ logged, customerID, details }, dispatch] = useDataLayerValue();
    const [transactions, setTransactions] = React.useState([]);
    const [credits, setCredits] = React.useState([]);

    function errorToast(msg) {
        toast.error(msg, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
        });
    }

    useEffect(() => {
        axios
            .get(
                "http://localhost:8080/api/v1/transactions/debit/" +
                    details.accountNo,
                {
                    headers: {
                        Authorization:
                            "Bearer " + sessionStorage.getItem("jwtToken"),
                    },
                }
            )
            .then((res) => {
                console.log("DEBITS",res.data);
                setTransactions(res.data);
            })
            .catch((err) => {
                console.log(err);
            });

        axios
            .get(
                "http://localhost:8080/api/v1/transactions/credit/" +
                    details.accountNo,
                {
                    headers: {
                        Authorization:
                            "Bearer " + sessionStorage.getItem("jwtToken"),
                    },
                }
            )
            .then((res) => {
                console.log("CREDITS",res.data);
                setCredits(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    var i = 0;
    console.log(logged);
    return (
        <Container maxWidth="lg" className="container">
            <div className="dashboard-row">
                <Card className="card">
                    <CardContent>
                        <Typography variant="h6" gutterBottom>
                            Account Information
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            {"Account Number: " + details.accountNo}
                        </Typography>
                        <Typography variant="body1">
                            {"Account Holder: " +
                                details.firstName +
                                " " +
                                details.middleName +
                                " " +
                                details.lastName}
                        </Typography>
                    </CardContent>
                </Card>

                <Card className="card">
                    <CardContent>
                        <Typography variant="h6" gutterBottom>
                            Available Balance
                        </Typography>
                        <Typography variant="h4" className="balance-text">
                            ₹{details.minAccountBalance}
                        </Typography>
                    </CardContent>
                </Card>
            </div>

            <Card className="card transactions-card">
                <CardContent>
                    <Typography variant="h6" gutterBottom>
                        Recent Transactions
                    </Typography>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>ID</TableCell>
                                    <TableCell>Transaction Type</TableCell>
                                    <TableCell>Date</TableCell>
                                    <TableCell align="right">Amount</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {transactions.map((transaction, idx) => (
                                    <TableRow key={idx}>
                                        <TableCell>{++i}</TableCell>
                                        <TableCell>
                                            {transaction.transactionType}
                                        </TableCell>
                                        <TableCell>
                                            {transaction.transDate}
                                        </TableCell>
                                        <TableCell
                                            align="right"
                                            className="text-red-500"
                                        >
                                            {"- "}₹
                                            {Math.abs(
                                                transaction.amount.toFixed(2)
                                            )}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                            <TableBody>
                                {credits.map((transaction, idx) => (
                                    <TableRow key={idx}>
                                        <TableCell>{++i}</TableCell>
                                        <TableCell>
                                            {transaction.transactionType}
                                        </TableCell>
                                        <TableCell>
                                            {transaction.transDate}
                                        </TableCell>
                                        <TableCell
                                            align="right"
                                            className="text-green-500"
                                        >
                                            {"+ "}₹
                                            {Math.abs(
                                                transaction.amount.toFixed(2)
                                            )}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </CardContent>
            </Card>
        </Container>
    );
};

function App() {
    return (
        <div className="App" style={{ marginTop: "100px" }}>
            <BankDashboard />
        </div>
    );
}

export default App;
