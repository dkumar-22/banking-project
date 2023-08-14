import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function AddressForm({
    details,
    handleDetails,
    handleNext,
    handleBack,
    steps,
    activeStep,
}) {
    const [checked, setChecked] = useState(false);
    return (
        <Box
            component="form"
            noValidate
            onSubmit={(e) => {
                e.preventDefault();
                handleNext();
            }}
        >
            <React.Fragment>
                <Typography variant="h6" gutterBottom>
                    Personal Information
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="firstName"
                            name="firstName"
                            label="First name"
                            fullWidth
                            autoComplete="given-name"
                            variant="standard"
                            autoFocus
                            value={details.firstName}
                            onChange={handleDetails}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            Kumar
                            id="middleName"
                            name="middleName"
                            label="Middle name"
                            fullWidth
                            autoComplete="middle-name"
                            variant="standard"
                            value={details.middleName}
                            onChange={handleDetails}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="lastName"
                            name="lastName"
                            label="Last name"
                            fullWidth
                            autoComplete="family-name"
                            variant="standard"
                            value={details.lastName}
                            onChange={handleDetails}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            InputLabelProps={{ shrink: true }}
                            id="dob"
                            name="dob"
                            label="Date of Birth"
                            fullWidth
                            variant="standard"
                            type="date"
                            placeholder=""
                            value={details.dob}
                            onChange={handleDetails}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="address1"
                            name="address1"
                            label="Address line 1"
                            fullWidth
                            autoComplete="shipping address-line1"
                            variant="standard"
                            value={details.address1}
                            onChange={handleDetails}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="address2"
                            name="address2"
                            label="Address line 2"
                            fullWidth
                            autoComplete="shipping address-line2"
                            variant="standard"
                            value={details.address2}
                            onChange={handleDetails}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="city"
                            name="city"
                            label="City"
                            fullWidth
                            autoComplete="shipping address-level2"
                            variant="standard"
                            value={details.city}
                            onChange={handleDetails}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="state"
                            name="state"
                            label="State/Province/Region"
                            fullWidth
                            variant="standard"
                            value={details.state}
                            onChange={handleDetails}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="zip"
                            name="zip"
                            label="Zip / Postal code"
                            fullWidth
                            autoComplete="shipping postal-code"
                            variant="standard"
                            value={details.zip}
                            onChange={handleDetails}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="country"
                            name="country"
                            label="Country"
                            fullWidth
                            autoComplete="shipping country"
                            variant="standard"
                            value={details.country}
                            onChange={handleDetails}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    color="secondary"
                                    name="saveAddress"
                                    value="yes"
                                />
                            }
                            onChange={(e) => setChecked(e.target.checked)}
                            label="Click if this current address is not Same as permanent"
                        />
                    </Grid>
                    {checked && (
                        <>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    id="paddress1"
                                    name="paddress1"
                                    label="Address line 1"
                                    fullWidth
                                    autoComplete="shipping address-line1"
                                    variant="standard"
                                    value={details.paddress1}
                                    onChange={handleDetails}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="paddress2"
                                    name="paddress2"
                                    label="Address line 2"
                                    fullWidth
                                    autoComplete="shipping address-line2"
                                    variant="standard"
                                    value={details.paddress2}
                                    onChange={handleDetails}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="pcity"
                                    name="pcity"
                                    label="City"
                                    fullWidth
                                    autoComplete="shipping address-level2"
                                    variant="standard"
                                    value={details.pcity}
                                    onChange={handleDetails}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    id="pstate"
                                    name="pstate"
                                    label="State/Province/Region"
                                    fullWidth
                                    variant="standard"
                                    value={details.pstate}
                                    onChange={handleDetails}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="pzip"
                                    name="pzip"
                                    label="Zip / Postal code"
                                    fullWidth
                                    autoComplete="shipping postal-code"
                                    variant="standard"
                                    value={details.pzip}
                                    onChange={handleDetails}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="pcountry"
                                    name="pcountry"
                                    label="Country"
                                    fullWidth
                                    autoComplete="shipping country"
                                    variant="standard"
                                    value={details.pcountry}
                                    onChange={handleDetails}
                                />
                            </Grid>
                        </>
                    )}
                </Grid>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                    }}
                >
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ mt: 3, ml: 1 }}
                    >
                        { "Next"}
                    </Button>
                </Box>
            </React.Fragment>
        </Box>
    );
}
