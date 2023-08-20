import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import AddressForm from "./AddressForm";
import PaymentForm from "./PersonalInformation";
import Review from "./Review";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://mui.com/">
                Bank
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

const steps = ["Address Information", "Account Holder Information", "Review"];

const defaultTheme = createTheme({
    palette: {
        primary: {
            main: "#B04040",
        },
    },
});

export default function Checkout() {
    const [details, setDetails] = useState({
        firstName: "",
        middleName: "",
        lastName: "",
        email: "",
        phone: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        zip: "",
        paddress1: "",
        paddress2: "",
        pcity: "",
        pstate: "",
        pzip: "",
        aadharno: "",
        pan: "",
        occupation: "",
        dob: "",
    });

    function handleDetails(e) {
        const { name, value } = e.target;
        setDetails((prev) => {
            return { ...prev, [name]: value };
        });
    }

    function getStepContent(step) {
        switch (step) {
            case 0:
                return (
                    <AddressForm
                        details={details}
                        handleDetails={handleDetails}
                        steps={steps}
                        activeStep={activeStep}
                        handleNext={handleNext}
                        handleBack={handleBack}
                    />
                );
            case 1:
                return (
                    <PaymentForm
                        details={details}
                        handleDetails={handleDetails}
                        handleNext={handleNext}
                        handleBack={handleBack}
                    />
                );
            case 2:
                return (
                    <Review
                        details={details}
                        handleDetails={handleDetails}
                        handleNext={handleNext}
                        handleBack={handleBack}
                    />
                );
            default:
                throw new Error("Unknown step");
        }
    }

    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = (e) => {
        
        if (activeStep === steps.length-1){ console.log(details);
        const submitObj = {
            accountNo: details.phone + "00",
            customerID: details.firstName.toLowerCase().substring(0,3)+details.phone.substring(0,3),
            firstName: details.firstName,
            lastName: details.lastName,
            currentAddress:details.address1 + " " + details.address2 + " " + details.city + " " + details.state + " " + details.zip,
            permanentAddress:details.paddress1===''?details.address1 + " " + details.address2 + " " + details.city + " " + details.state + " " + details.zip: details.paddress1 + " " + details.paddress2 + " " + details.pcity + " " + details.pstate + " " + details.pzip,
            contactNo:details.phone,
            aadharNo:details.aadharno,
            panNo:details.pan,
            dob: details.dob,
            email: details.email,
            middleName:details.middleName,
            minAccountBalance:100000,
            occupation: details.occupation
        }
        console.log(submitObj);
        axios.post("http://localhost:8080/api/v1/sendUser",submitObj).then((res)=>console.log(res)).catch((e)=>console.error(e));
        }
       
        setActiveStep(activeStep + 1);
        //upload request will also incorporated here
    };

    const handleBack = (e) => {
        console.log(activeStep);
        setActiveStep(activeStep - 1);
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <React.Fragment>
                <CssBaseline />
                <AppBar
                    position="absolute"
                    elevation={0}
                    sx={{
                        position: "relative",
                        borderBottom: `2px solid yellow`,
                        backgroundColor: "#CD1409",
                    }}
                >
                    <Toolbar>
                        <Typography
                            variant="h6"
                            color="inherit"
                            noWrap
                            style={{
                                color: "white",
                                fontFamily: "Clarendon",
                                fontWeight: "700",
                                fontSize: "1.5em",
                                marginLeft: "10px",
                                letterSpacing: "0.5px",
                                wordSpacing: "3px",
                            }}
                        >
                            WELLS FARGO
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
                    <Paper
                        variant="outlined"
                        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
                    >
                        <Typography component="h1" variant="h4" align="center">
                            Open a Bank Account
                        </Typography>
                        <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                            {steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                        {activeStep === steps.length ? (
                            <React.Fragment>
                                <Typography variant="h5" gutterBottom>
                                    Thank you for your trust.
                                </Typography>
                                <Typography variant="subtitle1">
                                    Details Added Successfully
                                </Typography>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                {getStepContent(activeStep)}
                            </React.Fragment>
                        )}
                    </Paper>
                    <Copyright />
                </Container>
            </React.Fragment>
        </ThemeProvider>
    );
}
