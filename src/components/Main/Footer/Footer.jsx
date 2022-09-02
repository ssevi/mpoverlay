import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" style={{color:"#ffffff"}}>
      {'Kerala Service Magazine Subscription, Designed and Developed  © '}
      <Link color="inherit" href="http://arvension.in/" style={{textDecoration:"none"}}>
      Arvension Technologies LLP
      </Link>{' '}
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  return (
    <>
    {/* // <Box sx={{display: 'flex',flexDirection: 'column',minHeight: '23vh'}}> */}
      <CssBaseline />
      <Box component="footer" sx={{py: 1,px:1,mt: 'auto',background: "linear-gradient(to right, #485563, #29323c)"}} 
      style={{position: "fixed", bottom: "0px", left: "0px", right: "0px"}} align="left" >
        <Container maxWidth="lg" align="right">
          <Copyright />
        </Container>
      </Box>
    {/* // </Box> */}
    </>
  );
}