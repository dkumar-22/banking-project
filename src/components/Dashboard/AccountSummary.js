import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import { useState } from "react";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import { useDataLayerValue } from "../../ContextAPI/DataLayer";

export default function Review({
}) {

    const [{details},dispatch] = useDataLayerValue();

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
            price: details.contactNo,
        },
        {
            name: "Aadhar Number",
            price: details.aadharNo,
        },
        {
            name: "PAN Card Number",
            price: details.panNo,
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

    return (
        <Container component="main" maxWidth="sm" sx={{ mb: 4, mt:15 }}>
            <Paper
                variant="outlined"
                sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
            >
                <Box component="form">
                    <React.Fragment>
                        <Typography variant="h6" gutterBottom style={{textAlign:"center"}}>
                            Account Summary
                        </Typography>
                        <List disablePadding>
                            {products.map((product) => (
                                <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
                                    <ListItemText
                                        primary={product.name}
                                        secondary={product.desc}
                                    />
                                    <Typography variant="body2">
                                        {product.price === '' ? '-' : product.price}
                                    </Typography>
                                </ListItem>
                            ))}
                        </List>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                                    Current Address
                                </Typography>
                                <Typography gutterBottom>
                                    {details.currentAddress}
                                </Typography>
                            </Grid>
                            <Grid item container direction="column" xs={12} sm={6}>
                                <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                                    Permanent Address
                                </Typography>
                                <Typography gutterBottom>
                                    {details.permanentAddress}
                                </Typography>
                            </Grid>
                        </Grid>
                    </React.Fragment>
                </Box></Paper></Container>
    );
}
