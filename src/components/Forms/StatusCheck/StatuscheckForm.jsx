import React, { useState } from 'react';
import {
  Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography, Button,
  Card, CardContent, Grid, TextField, Snackbar, Alert, AppBar, Stack
} from '@mui/material';
import { FaSearchPlus } from 'react-icons/fa';
import { FaSearchMinus } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { AiFillFormatPainter } from 'react-icons/ai';
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import Subscribe from "../../../assets/images/back.png";
import Logo from "../../../assets/images/Logongo.png";

const drawerWidth = 240;

function StatuscheckForm(props) {

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [data, setData] = useState({});
  const [error, setError] = useState({})
  const [missing, setMissing] = useState(false)
  const [opensnackbar, setOpensnackbar] = useState(false);
  const [subscribe, setSubscribe] = useState(false);

  const handleChange = (e, key) => {
    setData({ ...data, [key]: e.target.value })
  }

  const submit = () => {
    if (validate()) {
      setOpensnackbar(true);
      setSubscribe(true);
    } else {
      setMissing(true);
    }
  }

  const validate = () => {
    let valid = true;
    let tempError = {};
    if (!data.phonenumber) {
      valid = false;
      tempError.phonenumber = true;
    }
    if (!data.subscriptionno) {
      valid = false;
      tempError.subscriptionno = true;
    }
    if (!valid) {
      setError(tempError)

    }
    return valid;
  }

  const handleClosesnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpensnackbar(false);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Kerala NGO Union Magazine Subscription
      </Typography>
      <Divider />
      <List>

        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <ListItemText primary="Employees" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <ListItemText primary="Pensioners" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'center' }}>
            <ListItemText primary="Subscription" />
          </ListItemButton>
        </ListItem>

      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Snackbar open={missing} autoHideDuration={6000} onClose={() => setMissing(false)} anchorOrigin={{ vertical: "top", horizontal: "right" }}>
        <Alert onClose={() => setMissing(false)} severity="error" sx={{ width: '100%' }}>
          Please fill all the details
        </Alert>
      </Snackbar>

      <Box sx={{ display: 'flex' }} >
        <AppBar component="nav" style={{ backgroundColor: "#3b4a54" }}>
          <Toolbar>
            <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2, display: { sm: 'none' } }}>
              <MenuIcon />
            </IconButton>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
              <Button sx={{ color: '#ffffff' }} style={{ textTransform: "none", fontSize: "16px" }}> Home </Button>

              <Link style={{ textTransform: "none", textDecoration: "none", color: "#000000" }} to="/statuscheckform">
                <Button sx={{ color: '#ffffff' }} style={{ textTransform: "none", fontSize: "16px" }}> Status Check </Button>
              </Link>

              <Link style={{ textTransform: "none", textDecoration: "none", color: "#000000" }} to="/citizensubscriptionportalform">
                <Button sx={{ color: '#ffffff' }} style={{ textTransform: "none", fontSize: "16px" }}> Citizen Subscription </Button>
              </Link>
            </Box>

            <Box >
              <Stack direction="row" spacing={2}>

                <IconButton style={{ fontSize: "20px", marginLeft: "-1px" }}> <FaSearchMinus style={{ color: "#ffffff" }} />  </IconButton>
                <IconButton style={{ fontSize: "20px", marginLeft: "-1px" }}> <FaSearch style={{ color: "#ffffff" }} />  </IconButton>
                <IconButton style={{ fontSize: "20px", marginLeft: "-1px" }}> <FaSearchPlus style={{ color: "#ffffff" }} />  </IconButton>
                <IconButton style={{ fontSize: "20px", marginLeft: "-1px" }}> <AiFillFormatPainter style={{ color: "#ffffff" }} />  </IconButton>
                <Button style={{ fontSize: "18px", color: "#ffffff", textTransform: "none", marginLeft: "-15px" }}>  Mal</Button>
                <Button style={{ fontSize: "18px", color: "#ffffff", textTransform: "none", marginLeft: "-15px" }}>  Eng </Button>

              </Stack>
            </Box>
          </Toolbar>
        </AppBar>

        <Box component="nav" >
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>

        </Box>
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />

          <Grid container spacing={1}  >
            <Grid item xs={12} md={12} style={{ display: "flex", justifyContent: "center", alignItem: "center", backgroundImage: `url(${Subscribe})`, backgroundPosition: "center", backgroundSize: "cover", height: "85vh", width: "165vh", borderRadius: "10px" }} >
              <Card sx={{ width: 500, height: "90%", marginTop: "30px", marginLeft: "100px" }} style={{ isplay: "flex", justifyContent: "center", alignItem: "center", borderRadius: "25px", background: "#e0e0e0", boxShadow: "20px 20px 60px #5a5a5a,-20px -20px 60px #ffffff", }}>
                <CardContent align="center" >
                  <img src={Logo} alt="pic" height="90px" width="300px" align="center" style={{ marginTop: "30px" }} />

                  <Grid container spacing={1} mt={4}>

                    <Grid item xs={12} md={12}  >
                      <Typography style={{ fontFamily: 'Poppins', fontSize: "20px", fontWeight: "bold", color: "#770404" }} align="center">
                        STATUS CHECK
                      </Typography>
                    </Grid>

                    <Grid item xs={12} md={6}  >
                      <Typography style={{ fontFamily: 'Poppins', fontSize: "12px", fontWeight: "bold", color: "#770404" }} align="left">
                        Phone Number
                      </Typography>
                      <TextField fullWidth variant="outlined" size="small" type="number" helperText={error.phonenumber ? "Please enter the Phone Number" : " "} InputProps={{ style: { height: "35px", borderRadius: 10 } }} value={data.phonenumber} onChange={(e) => handleChange(e, 'phonenumber')} />
                    </Grid>

                    <Grid item xs={12} md={6}  >
                      <Typography style={{ fontFamily: 'Poppins', fontSize: "12px", fontWeight: "bold", color: "#770404" }} align="left">
                        Subscription Number
                      </Typography>
                      <TextField fullWidth variant="outlined" size="small" type="number" helperText={error.subscriptionno ? "Please enter the Subscription Number" : " "} InputProps={{ style: { height: "35px", borderRadius: 10 } }} value={data.subscriptionno} onChange={(e) => handleChange(e, 'subscriptionno')} />
                    </Grid>

                    <Grid item xs={12} md={12} style={{ display: "flex", justifyContent: "center", alignItem: "center", marginTop: "10px" }} >
                      <Button variant="contained" size="small" onClick={submit} style={{ backgroundColor: "#770404", width: "100px" }}>Search</Button>
                    </Grid>

                    <Grid item xs={12} md={12}>
                      {subscribe && <Grid container spacing={2} marginTop={2}>
                        <Grid item xs={12} md={6}>
                          <TextField label="Name " fullWidth size="small" variant="outlined" value={data.name} onChange={(e) => handleChange(e, 'name')} />
                        </Grid>

                        <Grid item xs={12} md={6}>
                          <TextField label="Dispatch Address" fullWidth size="small" variant="outlined" value={data.partnerdateofbirth} onChange={(e) => handleChange(e, 'partnerdateofbirth')} />
                        </Grid>

                        <Grid item xs={12} md={12}>
                          <TextField label="Subscription Status " fullWidth size="small" variant="outlined" value={data.partnerrelationship} onChange={(e) => handleChange(e, 'partnerrelationship')} />
                        </Grid>

                      </Grid>
                      }
                    </Grid>
                  </Grid>

                </CardContent>

              </Card>
            </Grid>
            <Snackbar open={opensnackbar} autoHideDuration={6000} onClose={() => setOpensnackbar(false)} anchorOrigin={{ vertical: "top", horizontal: "right" }}>
              <Alert onClose={handleClosesnackbar} severity="success" variant="filled" sx={{ width: '100%' }}>
                Saved Successfully
              </Alert>
            </Snackbar>

          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default StatuscheckForm;
