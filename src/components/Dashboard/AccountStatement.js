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
import { Grid, TextField, Button } from "@mui/material";
import { useDataLayerValue } from "../../ContextAPI/DataLayer";
import axios from "axios";

const BankDashboard = () => {
    const [{ logged, customerID, details }, dispatch] = useDataLayerValue();
    const [transactions, setTransactions] = React.useState([]);
    const [credits, setCredits] = React.useState([]);
    const [toDate, setToDate] = React.useState("");
    const [fromDate, setFromDate] = React.useState("");
    // useEffect(() => {
    //     axios
    //         .get(
    //             "http://localhost:8080/api/v1/transactions/debit/" +
    //             details.accountNo
    //         )
    //         .then((res) => {
    //             // console.log(res.data);
    //             setTransactions(res.data);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });

    //     axios
    //         .get(
    //             "http://localhost:8080/api/v1/transactions/credit/" +
    //             details.accountNo
    //         )
    //         .then((res) => {
    //             console.log(res.data);
    //             setCredits(res.data);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // }, []);
    var i = 0;
    console.log(logged);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(fromDate);
        console.log(toDate);
        console.log(`http://localhost:8080/api/v1/transaction/${fromDate}/${toDate}/${details.accountNo}`)
        axios
            .get(
                `http://localhost:8080/api/v1/transaction/${fromDate}/${toDate}/${details.accountNo}`
            )
            .then((res) => {
                console.log("Data", res.data);
                setTransactions(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <Container maxWidth="lg" className="container">
            <div style={{ marginTop: "100px", padding: "30px" }}>
                <Grid
                    component="form"
                    onSubmit={handleSubmit}
                    container
                    spacing={2}
                >
                    <Grid item xs={4}>
                        <TextField
                            label="From Date"
                            //value={fromAccount}
                            //onChange={(e) => setFromAccount(e.target.value)}
                            fullWidth
                            type="date"
                            InputLabelProps={{ shrink: true }}
                            style={{ padding: "10px" }}
                            name="fromDate"
                            required
                            onChange={(e) => setFromDate(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            label="To Date"
                            //value={fromAccount}
                            //onChange={(e) => setFromAccount(e.target.value)}
                            fullWidth
                            InputLabelProps={{ shrink: true }}
                            type="date"
                            style={{ padding: "10px" }}
                            name="toDate"
                            required
                            onChange={(e) => setToDate(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Button
                            //onClick={setIsPressed(true)}
                            variant="contained"
                            type="submit"
                            sx={{ mt: 2, mb: 2 }}
                        >
                            Go
                        </Button>
                    </Grid>
                </Grid>
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
                                    <TableCell align="right">From</TableCell>
                                    <TableCell align="right">To</TableCell>
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
                                        <TableCell align="right">
                                            {transaction.senderAccNo}
                                        </TableCell>
                                        <TableCell align="right">
                                            {transaction.receiverAccNo}
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
                                        <TableCell>
                                            {transaction.senderAccNo}
                                        </TableCell>
                                        <TableCell>
                                            {transaction.receiverAccNo}
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
