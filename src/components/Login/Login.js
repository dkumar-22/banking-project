import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import md5 from "md5-hash";
import { useDataLayerValue } from "../../ContextAPI/DataLayer";
import { useNavigate } from "react-router-dom";

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

export default function SignInSide() {
    let navigate = useNavigate();
    const [{ logged }, dispatch] = useDataLayerValue();

    // useEffect(() => {
    //     axios
    //         .get("http://localhost:8080/api/v1/get/user/" + customerID)
    //         .then((res) => {
    //             console.log(res.data);
    //             dispatch({
    //                 type: "SET_DETAILS",
    //                 details: res.data,
    //             });
    //         });
    // }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const sVar = {
            customerID: data.get("customerID"),
            password: md5(data.get("password")),
        };
        axios
            .post("http://localhost:8080/api/v1/login", sVar)
            .then((res) => {
                if (res.data[0] === "1") {
                    dispatch({
                        type: "SET_LOGGED",
                        logged: true,
                    });
                    dispatch({
                        type: "SET_CUSTOMERID",
                        customerID: data.get("customerID"),
                    });
                } else alert("Invalid Credentials");
            })
            .catch((e) => console.log(e));

        axios
            .get("http://localhost:8080/api/v1/get/user/" + sVar.customerID)
            .then((res) => {
                console.log(res.data);
                dispatch({
                    type: "SET_DETAILS",
                    details: res.data,
                });
            });
    };

    if (logged) {
        return navigate("/dashboard");
    }

    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid container component="main" sx={{ height: "100vh" }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage:
                            "url(https://www.simtrade.fr/blog_simtrade/wp-content/uploads/2022/11/img_Wells_Fargo_logo.png)",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "contain",
                        backgroundColor: "#d81e29",
                        backgroundPosition: "center",
                    }}
                />
                <Grid
                    item
                    xs={12}
                    sm={8}
                    md={5}
                    component={Paper}
                    elevation={6}
                    square
                >
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
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
                            onSubmit={handleSubmit}
                            sx={{ mt: 1 }}
                        >
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="customerID"
                                label="Customer ID"
                                name="customerID"
                                autoComplete="customerID"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            {/* <Link href="/dashboard" variant="body2"> */}
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign In
                            </Button>
                            {/* </Link> */}

                            <Grid container>
                                <Grid item xs>
                                    <Link
                                        href="/recover/password"
                                        variant="body2"
                                    >
                                        Forgot Password?
                                    </Link>
                                    <br />
                                    <Link
                                        href="/recover/username"
                                        variant="body2"
                                    >
                                        Forgot Username?
                                    </Link>
                                </Grid>

                                <Grid item>
                                    <Link href="/register" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}
