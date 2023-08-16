import React, { useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
    Link,
} from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";

const BeneficiaryTable = () => {
    const [beneficiaries, setBeneficiaries] = useState([
        { id: 1, accountNumber: "123456789", name: "John Doe", nickname: "JD" },
        {
            id: 2,
            accountNumber: "987654321",
            name: "Jane Smith",
            nickname: "JS",
        },
        {
            id: 3,
            accountNumber: "123123123",
            name: "John Smith",
            nickname: "JS",
        },
        { id: 4, accountNumber: "321321321", name: "Jane Doe", nickname: "JD" },
        // Add more beneficiaries here
    ]);

    const handleAddBeneficiary = () => {
        // Implement your logic to add a new beneficiary
    };

    return (
        <div style={{ marginTop: "100px", padding: "20px" }}>
            <Link href="/beneficiary">
                <Button
                    variant="contained"
                    startIcon={<AddIcon />}
                    style={{
                        float: "right",
                        marginBottom: "20px",
                        backgroundColor: "#1e88e5",
                        color: "white",
                    }}
                >
                    Add Beneficiary
                </Button>
            </Link>

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Account Number</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Nickname</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {beneficiaries.map((beneficiary) => (
                            <TableRow key={beneficiary.id}>
                                <TableCell>
                                    {beneficiary.accountNumber}
                                </TableCell>
                                <TableCell>{beneficiary.name}</TableCell>
                                <TableCell>{beneficiary.nickname}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default BeneficiaryTable;
