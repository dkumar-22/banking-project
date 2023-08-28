import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import axios from "axios";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Tables from "../Table/Table";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SearchByAccountNumber() {
    function successToast(msg) {
        toast.success(msg, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
        });
    }

    const [details, setDetails] = useState({});
    const [visible, makeVisible] = useState(false);
    const [value, setVal] = useState("");
    const [transactions, setTransactions] = React.useState([]);
    const [credits, setCredits] = React.useState([]);
    const [products, setProducts] = useState([
        {
            name: "Name",
            price: "",
        },
        {
            name: "Email",
            price: "",
        },
        {
            name: "Customer ID",
            price: "",
        },
        {
            name: "Account Number",
            price: "",
        },
        {
            name: "Phone Number",
            price: "",
        },
        {
            name: "Aadhar Number",
            price: "",
        },
        {
            name: "PAN Card Number",
            price: "",
        },
        {
            name: "Occupation",
            price: "",
        },
        {
            name: "Date of Birth",
            price: "",
        },
    ]);

    const makeInactive = (id) => {
        axios
            .put(
                `http://localhost:8080/api/v1/makeInactive/${id}`,
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
            })
            .catch((e) => console.error(e));
    };

    function makeTable(accountNo) {
        axios
            .get(
                "http://localhost:8080/api/v1/transactions/debit/" + accountNo,
                {
                    headers: {
                        Authorization:
                            "Bearer " + sessionStorage.getItem("jwtToken"),
                    },
                }
            )
            .then((res) => {
                // console.log(res.data);
                setTransactions(res.data);
            })
            .catch((err) => {
                console.log(err);
            });

        axios
            .get(
                "http://localhost:8080/api/v1/transactions/credit/" + accountNo,
                {
                    headers: {
                        Authorization:
                            "Bearer " + sessionStorage.getItem("jwtToken"),
                    },
                }
            )
            .then((res) => {
                console.log(res.data);
                setCredits(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    function handleSearch(e) {
        e.preventDefault();
        console.log(value);
        axios
            .get(`http://localhost:8080/api/v1/getbyaccno/${value}`, {
                headers: {
                    Authorization:
                        "Bearer " + sessionStorage.getItem("jwtToken"),
                },
            })
            .then((res) => {
                console.log(res.data);
                setDetails(res.data);
                setProducts([
                    {
                        name: "Name",
                        price:
                            res.data.firstName +
                            " " +
                            res.data.middleName +
                            " " +
                            res.data.lastName,
                    },
                    {
                        name: "Email",
                        price: res.data.email,
                    },
                    {
                        name: "Customer ID",
                        price: res.data.customerID,
                    },
                    {
                        name: "Account No.",
                        price: res.data.accountNo,
                    },
                    {
                        name: "Active Status",
                        price: res.data.isActive ? "Active" : "Inactive",
                    },
                    {
                        name: "Available Balance",
                        price: `₹ ${res.data.minAccountBalance}`,
                    },
                    {
                        name: "Phone Number",
                        price: res.data.contactNo,
                    },
                    {
                        name: "Aadhar Number",
                        price: res.data.aadharNo,
                    },
                    {
                        name: "PAN Card Number",
                        price: res.data.panNo,
                    },
                    {
                        name: "Occupation",
                        price: res.data.occupation,
                    },
                    {
                        name: "Date of Birth",
                        price: res.data.dob,
                    },
                ]);
                makeTable(res.data.accountNo);
                makeVisible(true);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <div style={{ padding: "40px" }}>
            <ToastContainer/>
            <Paper
                component="form"
                onSubmit={handleSearch}
                sx={{
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    width: 600,
                    margin: "auto",
                    backgroundColor: "whitesmoke",
                }}
            >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search By Account Number"
                    inputProps={{ "aria-label": "search google maps" }}
                    onChange={(e) => setVal(e.target.value)}
                />
                <IconButton
                    type="submit"
                    sx={{ p: "10px" }}
                    aria-label="search"
                >
                    <SearchIcon />
                </IconButton>
            </Paper>

            {visible && (
                <Container
                    component="main"
                    maxWidth="sm"
                    sx={{ mb: 4, mt: 15 }}
                >
                    <Paper
                        variant="outlined"
                        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
                    >
                        <Box component="form">
                            <React.Fragment>
                                <Typography
                                    variant="h6"
                                    gutterBottom
                                    style={{ textAlign: "center" }}
                                >
                                    Account Summary
                                </Typography>
                                {details.isActive && (
                                    <button
                                        onClick={(e) => {
                                            e.preventDefault();
                                            makeInactive(details.customerID);
                                            successToast(
                                                "User is now Inactive"
                                            );
                                        }}
                                        style={{
                                            marginLeft: "35%",
                                            color: "white",
                                            backgroundColor: "red",
                                            padding: "8px",
                                            borderRadius: "15px",
                                        }}
                                    >
                                        Disable the User
                                    </button>
                                )}
                                <List disablePadding>
                                    {products.map((product) => (
                                        <ListItem
                                            key={product.name}
                                            sx={{ py: 1, px: 0 }}
                                        >
                                            <ListItemText
                                                primary={product.name}
                                                secondary={product.desc}
                                            />
                                            <Typography variant="body2">
                                                {product.price === ""
                                                    ? "-"
                                                    : product.price}
                                            </Typography>
                                        </ListItem>
                                    ))}
                                </List>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <Typography
                                            variant="h6"
                                            gutterBottom
                                            sx={{ mt: 2 }}
                                        >
                                            Current Address
                                        </Typography>
                                        <Typography gutterBottom>
                                            {details.currentAddress}
                                        </Typography>
                                    </Grid>
                                    <Grid
                                        item
                                        container
                                        direction="column"
                                        xs={12}
                                        sm={6}
                                    >
                                        <Typography
                                            variant="h6"
                                            gutterBottom
                                            sx={{ mt: 2 }}
                                        >
                                            Permanent Address
                                        </Typography>
                                        <Typography gutterBottom>
                                            {details.permanentAddress}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </React.Fragment>
                        </Box>
                    </Paper>
                    <Tables transactions={transactions} credits={credits} />
                </Container>
            )}
        </div>
    );
}

export default SearchByAccountNumber;
