import React from 'react'
import {
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


function Tables({ transactions, credits }) {
    var i = 0;
    return (
        <Card className="card transactions-card">
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Recent Transactions
                </Typography>
                <TableContainer style={{ padding: "30px" }}>
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
    )
}

export default Tables