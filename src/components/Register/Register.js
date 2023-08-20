import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import validator from "validator";
import { useState } from "react";
import axios from "axios";
import md5 from "md5-hash";
function Copyright(props) {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}
        ></Typography>
    );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme({
    palette: {
        primary: {
            main: "#B04040",
        },
    },
});

export default function SignUp() {
    const [errorMessage, setErrorMessage] = useState([]);
    const validate = (value) => {
        if (
            validator.isStrongPassword(value, {
                minLength: 8,
                minLowercase: 1,
                minUppercase: 1,
                minNumbers: 1,
                minSymbols: 1,
            })
        ) {
            setErrorMessage([1, "Is Strong Password"]);
        } else {
            setErrorMessage([0, "Is Not Strong Password"]);
        }
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const submitVar = {
            customerID: data.get("customerID"),
            password: data.get("password"),
            cpassword: data.get("confirm-password"),
            transactionPassword: data.get("transaction-password"),
            cTransactionPassword: data.get("confirm-transaction-password"),
        };

        if (submitVar.password !== submitVar.cpassword) {
            alert("Passwords Do not match");
        } else if (errorMessage[0] === 0) {
            alert("Password is not strong enough");
        } else if (
            submitVar.transactionPassword !== submitVar.cTransactionPassword
        ) {
            alert("Transaction Passwords Do not match");
        } else {
            try {
                const resp1 = await axios.get(
                    "http://localhost:8080/api/v1/get/user/" +
                        submitVar.customerID
                );
                console.log(resp1)
                if (resp1.data === "") {
                    alert("Customer ID does not exist");
                    return;
                }
                const resp2 = await axios.get(
                    "http://localhost:8080/api/v1/customer/" +
                        submitVar.customerID
                );

                if (resp2.data !== "") {
                    alert("Account already exists");
                    return;
                }

                const resp = await axios.post(
                    "http://localhost:8080/api/v1/sendCustomer",
                    {
                        customerID: submitVar.customerID,
                        password: md5(submitVar.password),
                        transactionPassword: md5(submitVar.transactionPassword),
                    }
                );
                console.log(resp);
                alert("Account Created");
            } catch (e) {
                console.log(e);
            }
        }
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: "#B04040" }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Register for the banking Website
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        sx={{ mt: 3 }}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="customerID"
                                    label="Customer ID"
                                    name="customerID"
                                    autoComplete="customerID"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    onChange={(e) => validate(e.target.value)}
                                />
                            </Grid>

                            {errorMessage !== "" &&
                                (errorMessage[0] === 0 ? (
                                    <Grid
                                        item
                                        xs={12}
                                        style={{ margin: "0px" }}
                                    >
                                        <h6
                                            style={{
                                                margin: "0px 12px",
                                                color: "red",
                                            }}
                                        >
                                            {errorMessage[1]}
                                        </h6>
                                    </Grid>
                                ) : (
                                    <Grid
                                        item
                                        xs={12}
                                        style={{ margin: "0px" }}
                                    >
                                        <h6
                                            style={{
                                                margin: "0px 12px",
                                                color: "green",
                                            }}
                                        >
                                            {errorMessage[1]}
                                        </h6>
                                    </Grid>
                                ))}

                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="confirm-password"
                                    label="Confirm Password"
                                    type="password"
                                    id="confirm-password"
                                    autoComplete="new-password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="transaction-password"
                                    label="Transaction Password"
                                    type="password"
                                    id="tpassword"
                                    autoComplete="new-password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="confirm-transaction-password"
                                    label="Confirm Transaction Password"
                                    type="password"
                                    id="confirm-t-password"
                                    autoComplete="new-password"
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="/login" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider>
    );
}
