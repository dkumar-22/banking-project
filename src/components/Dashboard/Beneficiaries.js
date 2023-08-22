import React, { useState, useEffect } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
} from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDataLayerValue } from "../../ContextAPI/DataLayer";

const BeneficiaryTable = () => {
    const [{ details }, dispatch] = useDataLayerValue();
    const [beneficiaries, setBeneficiaries] = useState([]);
    useEffect(() => {
        axios
            .get(
                "http://localhost:8080/api/v1/beneficiary/" + details.accountNo
            )
            .then((res) => {
                console.log(res.data);
                setBeneficiaries(res.data);
            });
    }, []);
    

    return (
        <div style={{ marginTop: "100px", padding: "20px" }}>
            <Link to="/beneficiary">
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
                                    {beneficiary.receiverAccNo}
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
