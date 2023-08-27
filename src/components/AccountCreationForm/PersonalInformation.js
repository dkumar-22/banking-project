import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function PaymentForm({
    details,
    handleDetails,
    steps,
    activeStep,
    handleNext,
    handleBack,
}) {
    function warningToast(msg) {
        toast.warn(msg, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
        });
    }

    function handleValidation() {
        //match aadhar number with its regex
        var aadharRegex = /^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$/;
        if (!aadharRegex.test(details.aadharno)) {
            warningToast("Invalid Aadhar Number");
            return;
        }
        //match pan number with its regex
        var panRegex = /[A-Z]{5}[0-9]{4}[A-Z]{1}/;
        if (!panRegex.test(details.pan)) {
            warningToast("Invalid PAN Number");
            return;
        }
        //match phone number with its regex
        var phoneRegex = /^[6-9]\d{9}$/;
        if (!phoneRegex.test(details.phone)) {
            warningToast("Invalid Phone Number");
            return;
        }
        //match email with its regex
        var emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
        if (!emailRegex.test(details.email)) {
            warningToast("Invalid Email Address");
            return;
        }
        //match minAccountBalance with its regex
        if(details.minAccountBalance < 1000){
            warningToast("Minimum Account Balance is ₹1000");
            return;
        }
        handleNext();
    }
    return (
        <Box component="form">
            <React.Fragment>
                <Typography variant="h6" gutterBottom>
                    Add Aadhar and other details
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <TextField
                            required
                            id="aadharInformation"
                            label="Aadhar Number"
                            name="aadharno"
                            fullWidth
                            autoComplete="cc-name"
                            variant="standard"
                            value={details.aadharno}
                            onChange={handleDetails}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            required
                            id="PANCardNumber"
                            label="PAN Card number"
                            name="pan"
                            fullWidth
                            autoComplete="cc-number"
                            variant="standard"
                            value={details.pan}
                            onChange={handleDetails}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            required
                            id="expDate"
                            label="Occupation"
                            name="occupation"
                            fullWidth
                            autoComplete="cc-exp"
                            variant="standard"
                            value={details.occupation}
                            onChange={handleDetails}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            required
                            id="phone"
                            label="Phone Number"
                            name="phone"
                            fullWidth
                            autoComplete="cc-csc"
                            variant="standard"
                            value={details.phone}
                            onChange={handleDetails}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            required
                            id="email"
                            label="Email Address"
                            name="email"
                            fullWidth
                            autoComplete="email"
                            variant="standard"
                            value={details.email}
                            onChange={handleDetails}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            required
                            id="minAccountBalance"
                            label="Enter Amount to Start With (Min ₹1000)"
                            name="minAccountBalance"
                            fullWidth
                            variant="standard"
                            value={details.minAccountBalance}
                            onChange={handleDetails}
                        />
                    </Grid>
                </Grid>
            </React.Fragment>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                }}
            >
                {
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                        Back
                    </Button>
                }

                <Button
                    variant="contained"
                    onClick={handleValidation}
                    sx={{ mt: 3, ml: 1 }}
                >
                    {"Next"}
                </Button>
            </Box>
            <ToastContainer />
        </Box>
    );
}
