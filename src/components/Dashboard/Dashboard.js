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

const transactions = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    description: `Transaction ${index + 1}`,
    amount: Math.random() * 1000 - 500,
}));

const balance = transactions.reduce(
    (total, transaction) => total + transaction.amount,
    0
);

const BankDashboard = () => {
    const [{ logged, customerID, details }, dispatch] = useDataLayerValue();
    useEffect(() => {
        axios
            .get("http://localhost:8080/api/v1/get/user/" + customerID)
            .then((res) => {
                console.log(res.data);
                dispatch({
                    type: "SET_DETAILS",
                    details: res.data,
                });
            });
    }, []);
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
                            ${balance.toFixed(2)}
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
                                    <TableCell>Description</TableCell>
                                    <TableCell align="right">Amount</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {transactions.map((transaction, idx) => (
                                    <TableRow key={idx}>
                                        <TableCell>{transaction.id}</TableCell>
                                        <TableCell>
                                            {transaction.description}
                                        </TableCell>
                                        <TableCell
                                            align="right"
                                            className={
                                                transaction.amount < 0
                                                    ? "text-red-500"
                                                    : "text-green-500"
                                            }
                                        >
                                            {transaction.amount > 0 ? "+" : "-"}{" "}
                                            $
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
