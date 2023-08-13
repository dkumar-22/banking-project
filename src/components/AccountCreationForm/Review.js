import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";

export default function Review({
    details,
    steps,
    activeStep,
    handleNext,
    handleBack,
}) {
    const products = [
        {
            name: "Name",
            price:
                details.firstName +
                " " +
                details.middleName +
                " " +
                details.lastName,
        },
        {
            name: "Email",
            price: details.email,
        },
        {
            name: "Phone Number",
            price: details.phone,
        },
        {
            name: "Aadhar Number",
            price: details.aadharno,
        },
        {
            name: "PAN Card Number",
            price: details.pan,
        },
        {
            name: "Occupation",
            price: details.occupation,
        },
        {
            name: "Date of Birth",
            price: details.dob,
        },
    ];

    const addresses = [
        details.address1,
        details.address2,
        details.city,
        details.state,
        details.zip,
        details.country,
    ];
    const paddresses = [
        details.paddress1 ==='' ? details.address1 : details.paddress1,
        details.paddress2 ==='' ? details.address2 : details.paddress2,
        details.pcity ==='' ? details.city : details.pcity,
        details.pstate ==='' ? details.state : details.pstate,
        details.pzip ==='' ? details.zip : details.pzip,
        details.pcountry ==='' ? details.country : details.pcountry,
    ];

    return (
        <Box component="form">
            <React.Fragment>
                <Typography variant="h6" gutterBottom>
                    Summary
                </Typography>
                <List disablePadding>
                    {products.map((product) => (
                        <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
                            <ListItemText
                                primary={product.name}
                                secondary={product.desc}
                            />
                            <Typography variant="body2">
                                {product.price}
                            </Typography>
                        </ListItem>
                    ))}
                    <ListItem sx={{ py: 1, px: 0 }}>
                        <ListItemText primary="Total" />
                        <Typography
                            variant="subtitle1"
                            sx={{ fontWeight: 700 }}
                        >
                            $34.06
                        </Typography>
                    </ListItem>
                </List>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                            Current Address
                        </Typography>
                        <Typography gutterBottom>
                            {addresses.join(", ")}
                        </Typography>
                    </Grid>
                    <Grid item container direction="column" xs={12} sm={6}>
                        <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                            Permanent Address
                        </Typography>
                        <Typography gutterBottom>
                            {paddresses.join(", ")}
                        </Typography>
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
                    {"Confirm Details"}
                </Button>
            </Box>
        </Box>
    );
}
