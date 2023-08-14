import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [1, 2, 3];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Album() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      {/* <AppBar position="relative" style={{backgroundColor:'#CD1409', color: "white", borderBottom:"4px solid yellow"}}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap style={{fontFamily:"Clarendon", fontWeight: "700", fontSize:"1.5em", marginLeft:"10px", letterSpacing:"1px", wordSpacing:"3px"}}>
            WELLS  FARGO
          </Typography>
        </Toolbar>
      </AppBar> */}
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: '#CD1409',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              fontFamily="Times New Roman"
              gutterBottom
              style={{ color: "white", fontFamily: "Clarendon", fontWeight: "700", fontSize: "3.5em", marginLeft: "10px", letterSpacing: "1px", wordSpacing: "3px" }}
            >
              WELLS FARGO
            </Typography>
            <Typography variant="h5" align="center" color="white" paragraph>
              Get Seamless Online Banking Experience with Wells Fargo
            </Typography><br />
            <Typography variant="p" align="center" paragraph color="white">
              Already an account holder ?
            </Typography>
            <Stack
              sx={{ pt: 0 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Link href="/login"><Button variant="contained" style={{ color: "black", backgroundColor: "white", borderRadius: "25px" }}>Login</Button></Link>
              <Link href="/register"><Button variant="outlined" style={{ color: "white", borderColor: "white", borderRadius: "23px" }}>Sign up for netbanking</Button></Link>

            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          
            <Grid item xs={4}><Typography variant="h4" align="center" paragraph color="black">
              Don't have an account ?
            </Typography></Grid>
            <Grid item xs={4}> <Typography variant="p" align="center" paragraph color="black">
              Easily Create an account using our online account creation tool
            </Typography></Grid>


            <Stack
              sx={{ pt: 0 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Link href="/apply"><Button variant="contained" style={{ color: "white", backgroundColor: '#CD1409', borderRadius: "25px" }}>Apply for a Bank Account</Button></Link>
              
            </Stack>
          
        </Container>
      </main>

    </ThemeProvider>
  );
}