import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";

function Copyright(props) {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}
        >
            {"Copyright © "}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
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

export default function SignIn() {
    const [val, setVal] = React.useState(false);
    const handleSubmit1 = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const submitVar = {
            email: data.get("email"),
            password: data.get("password"),
        };

        if (submitVar.password !== "8080") {
            alert("Incorrect OTP");
            return;
        } else {
            axios
                .get("http://localhost:8080/api/v1/exists/" + submitVar.email)
                .then((res) => {
                    if (res.data) {
                        setVal(true);
                    } else {
                        setVal(false);
                    }
                });
        }
    };

    const handleSubmit2 = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const submitVar = {
            email: data.get("email"),
            newPassword: data.get("npassword"),
            confirmPassword: data.get("cpassword"),
        };
        if (submitVar.newPassword === submitVar.confirmPassword) {
            axios
                .post(
                    "http://localhost:8080/api/v1/resetPassword/" +
                        submitVar.email,
                    submitVar
                )
                .then((res) => {
                    if (res.data) {
                        alert("Password Reset Successfully");
                    } else {
                        alert("Password Reset Failed");
                    }
                })
                .catch((err) => {
                    alert("Password Reset Failed");
                });
        } else {
            alert("Passwords do not match");
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
                        Sign in
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={setVal ? handleSubmit1 : handleSubmit2}
                        sx={{ mt: 1 }}
                    >
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Enter User ID"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Enter OTP"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        {val && (
                            <>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="npassword"
                                    label="Enter New Password"
                                    type="password"
                                    id="npassword"
                                    autoComplete="current-password"
                                />

                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="cpassword"
                                    label="Confirm New Password"
                                    type="password"
                                    id="cpassword"
                                    autoComplete="current-password"
                                />
                            </>
                        )}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Recover Password
                        </Button>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}
