import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
export default function PaymentForm({
    details,
    handleDetails,
    steps,
    activeStep,
    handleNext,
    handleBack,
}) {
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
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                >
                    {"Next"}
                </Button>
            </Box>
        </Box>
    );
}
