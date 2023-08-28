// import React from "react"
// import { Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material"
// import {TableContainer} from "@mui/material"

// const PostData = [
//     {
//         "first_name": "Avijeet",
//         "email": "Avijeet@gmail.com"
//     },
//     {
//         "first_name": "Gauri",
//         "email": "Gauri@gmail.com"
//     },
//     {
//         "first_name": "Priyanka",
//         "email": "Priyanka@gmail.com"
//     },
//     {
//         "first_name": "Dhruv",
//         "email": "Dhruv@gmail.com"
//     },
//     {
//         "first_name": "Omkar",
//         "email": "Omkar@gmail.com"
//     }
// ]

// export default function HomeDisplay() {
//     return (
//         <div>
//             <TableContainer>
//                 <Table>
//                     <TableHead>
//                         <TableRow>
//                             <TableCell>First Name</TableCell>
//                             <TableCell>Email</TableCell>
//                         </TableRow>
//                     </TableHead>
//                     <TableBody>
//                       {PostData.map((list, index) => (
//                         <TableRow key={index}>
//                             <TableCell>{list.first_name}</TableCell>
//                             <TableCell>{list.email}</TableCell>
//                         </TableRow>
//                       ))}
//                     </TableBody>
//                 </Table>
//             </TableContainer>
//         </div>
//     )
// }
import { useState, useEffect } from "react";
import { Table } from "@mui/material";

import React from "react";
import { Stack, Button } from "@mui/material";

//import InputAdornment from "@material-ui/core/InputAdornment";
//import SearchIcon from "@material-ui/icons/Search";
import { TextField, IconButton } from "@material-ui/core";

//import { SearchOutlined } from '@material-ui/icons';

import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
const useStyles = makeStyles({
    table: {
        width: 400,
        margin: "auto",
    },
});
function createData(Name, AccountNo, MobileNo, EmailID, MinimumBalance) {
    return { Name, AccountNo, MobileNo, EmailID, MinimumBalance };
}

function HomeDisplay() {
    //   <TextField
    //                 fullWidth
    //                 id="standard-bare"
    //                 variant="outlined"
    //                 defaultValue="Search"
    //                 InputProps={{
    //                   endAdornment: (
    //                     <IconButton>
    //                       <SearchOutlined />
    //                     </IconButton>
    //                   ),
    //                 }}
    //               />

    const [approvals, setApprovals] = useState([]);

    function successToast(msg) {
        toast.success(msg, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 5000,
        });
    }

    function errorToast(msg) {
        toast.error(msg, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 5000,
        });
    }

    useEffect(() => {
        axios
            .get("http://localhost:8080/api/v1/user/active/false", {
                headers: {
                    Authorization:
                        "Bearer " + sessionStorage.getItem("jwtToken"),
                },
            })
            .then((res) => {
                setApprovals(res.data);
            })
            .catch((e) => console.error(e));
    }, []);

    const makeActive = (id) => {
        axios
            .put(
                `http://localhost:8080/api/v1/makeActive/${id}`,
                {},
                {
                    headers: {
                        Authorization:
                            "Bearer " + sessionStorage.getItem("jwtToken"),
                    },
                }
            )
            .then((res) => {
                console.log(res.data);
                successToast("User is now active");
                setApprovals(
                    approvals.filter((user) => user.customerID !== id)
                );
            })
            .catch((e) => {
                console.error(e);
                errorToast("Something went wrong");
            });
    };

    const classes = useStyles();
    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="center">Account No</TableCell>
                        <TableCell align="center">Customer ID</TableCell>
                        <TableCell align="center">Mobile No</TableCell>
                        <TableCell align="center">Email ID</TableCell>
                        <TableCell align="center">Minimum Balance</TableCell>
                        <TableCell align="center">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {approvals.map((row, idx) => (
                        <TableRow key={idx}>
                            <TableCell component="th" scope="row">
                                {`${row.firstName} ${row.middleName} ${row.lastName}`}
                            </TableCell>
                            <TableCell align="center">
                                {row.accountNo}
                            </TableCell>
                            <TableCell align="center">
                                {row.customerID}
                            </TableCell>
                            <TableCell align="center">
                                {row.contactNo}
                            </TableCell>
                            <TableCell align="center">{row.email}</TableCell>
                            <TableCell align="center">
                                {row.minAccountBalance}
                            </TableCell>
                            <TableCell align="center">
                                <div style={{ color: "white" }}>
                                    <Button
                                        variant="Approve"
                                        style={{
                                            backgroundColor: "green",
                                            margin: "20px",
                                        }}
                                        onClick={() =>
                                            makeActive(row.customerID)
                                        }
                                    >
                                        Approve
                                    </Button>
                                    {/* <Button variant="Deny" style={{ backgroundColor: "red" }}>
                    Deny{" "}
                  </Button> */}
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <ToastContainer />
        </TableContainer>
    );
}

export default HomeDisplay;
