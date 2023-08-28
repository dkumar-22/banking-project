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
import { useDataLayerValue } from "../../ContextAPI/DataLayer";
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

const defaultTheme = createTheme();

export default function SignUp() {
    const [{ details }, dispatch] = useDataLayerValue();
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const submitVar = {
            contactNo: data.get("phone"),
            currentAddress: data.get("currentAddress"),
            permanentAddress: data.get("permanentAddress"),
            occupation: data.get("occupation"),
        };
        axios
            .put(
                "http://localhost:8080/api/v1/updateUser/" +
                    sessionStorage.getItem("userName"),
                submitVar,
                {
                    headers: {
                        Authorization:
                            "Bearer " + sessionStorage.getItem("jwtToken"),
                    },
                }
            )
            .then((response) => {
                console.log(response);
                alert("Updated Successfully");
            })
            .catch((error) => {
                console.log(error);
                alert("Error Occured");
            });
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 15,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    
                    <Typography component="h1" variant="h5">
                        Update Details
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
                                    id="phone"
                                    label="Phone Number"
                                    name="phone"
                                    autoComplete="phone"
                                    defaultValue = {details.contactNo}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="currentAddress"
                                    label="Current Address"
                                    id="currentAddress"
                                    defaultValue = {details.currentAddress}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="permanentAddress"
                                    label="Permanent Address"
                                    id="permanentAddress"
                                    defaultValue = {details.permanentAddress}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="occupation"
                                    label="Occupation"
                                    id="occupation"
                                    defaultValue = {details.occupation}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Change Details
                        </Button>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider>
    );
}
