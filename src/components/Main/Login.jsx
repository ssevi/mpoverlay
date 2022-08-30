import React, { useState } from 'react';
import {
    Box, AppBar, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography, Button,
    Stack, Card, CardActions, CardContent, Grid, TextField, Snackbar, Alert,
} from '@mui/material';
import PropTypes from 'prop-types';
import MenuIcon from '@mui/icons-material/Menu';
import { FaSearchPlus } from 'react-icons/fa';
import { FaSearchMinus } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { AiFillFormatPainter } from 'react-icons/ai';
import { Link } from "react-router-dom";
import Pic from "../../assets/images/Subscription.png";
import Logo from "../../assets/images/Logongo.png";

const userid = "admin"
const password = "admin"

const drawerWidth = 240;
function StatuscheckForm(props) {

    const { setLoggedIn } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const [data, setData] = useState({});
    const [error, setError] = useState({})
    const [missing, setMissing] = useState(false)
    const [opensnackbar, setOpensnackbar] = useState(false);
    const [open, setOpen] = useState(false);
    const handleClose = () => { setOpen(false); };

    const handleChange = (e, key) => {
        setData({ ...data, [key]: e.target.value })
    }

    const submit = () => {
        if (validate()) {
            setOpensnackbar(true);
        } else {
            setMissing(true);
        }
    }

    const validate = () => {
        let valid = true;
        let tempError = {};
        if (!data.userid) {
            valid = false;
            tempError.userid = true;
        }
        if (!data.password) {
            valid = false;
            tempError.password = true;
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


    const login = () => {
        if (validate()) {
            //API CAll
            if (data.userid === userid && data.password === password) {
                setLoggedIn(true)
                localStorage.setItem("isLoggedIn", "true")
                handleClose();
                console.log("logged");
            } else {
                setOpen(true)
                handleClose();
            }
        }
    }

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

                <Link style={{ textTransform: "none", textDecoration: "none", color: "#000000" }} to="/statuscheckform">
                    <ListItem disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary="Status Check" />
                        </ListItemButton>
                    </ListItem>
                </Link>

                <ListItem disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                        <ListItemText primary="Citizen Subscription" />
                    </ListItemButton>
                </ListItem>

            </List>
        </Box>
    );

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
                                {/* <Avatar variant="square" sx={{ width: 35, height: 35 }} style={{borderRadius:"7px",background: "#ffffff", boxShadow:"inset 20px 20px 60px #bcb9b9 inset -20px -20px 60px #fefbfb"}}> <FaSearchMinus style={{color:"#3b4a54"}}/> </Avatar>
                                <Avatar variant="square" sx={{ width: 35, height: 35 }} style={{borderRadius:"7px",background: "#ffffff", boxShadow:"inset 20px 20px 60px #bcb9b9 inset -20px -20px 60px #fefbfb"}}> <FaSearch style={{color:"#3b4a54"}}/> </Avatar>
                                <Avatar variant="square" sx={{ width: 35, height: 35 }} style={{borderRadius:"7px",background: "#ffffff", boxShadow:"inset 20px 20px 60px #bcb9b9 inset -20px -20px 60px #fefbfb"}}> <FaSearchPlus style={{color:"#3b4a54"}}/>  </Avatar>
                                <Avatar variant="square" sx={{ width: 35, height: 35 }} style={{borderRadius:"7px",background: "#ffffff", boxShadow:"inset 20px 20px 60px #bcb9b9 inset -20px -20px 60px #fefbfb"}}> <AiFillFormatPainter style={{color:"#3b4a54"}}/>  </Avatar>
                                <Avatar variant="square" sx={{ width: 35, height: 35 }} style={{borderRadius:"7px",background: "#ffffff", boxShadow:"inset 20px 20px 60px #bcb9b9 inset -20px -20px 60px #fefbfb", fontSize:"16px", fontWeight:"bold", color:"#3b4a54"}} >Mal</Avatar>
                                <Avatar variant="square" sx={{ width: 35, height: 35 }} style={{borderRadius:"7px",background: "#ffffff", boxShadow:"inset 20px 20px 60px #bcb9b9 inset -20px -20px 60px #fefbfb", fontSize:"16px", fontWeight:"bold", color:"#3b4a54"}}>Eng</Avatar> */}

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
                <Box component="main" sx={{ p: 2 }}>
                    <Toolbar />

                    <Grid container spacing={1}  >
                        <Grid item xs={12} md={12} style={{ display: "flex", justifyContent: "center", alignItem: "center", backgroundImage: `url(${Pic})`, backgroundPosition: "center", backgroundSize: "cover", borderRadius: "5px", height: "80vh", width: "173vh" }} >
                            <Card sx={{ width: 330, height: 420, marginTop: "70px" }} style={{ borderRadius: "25px", background: "#e0e0e0" }}>
                                <CardContent align="center" >
                                    <img src={Logo} alt="pic" height="100px" width="300px" align="center" style={{ marginTop: "30px" }} />

                                    <Grid container spacing={1} mt={4}>
                                        <Grid item xs={12} md={12}  >
                                            <Typography style={{ fontFamily: 'Poppins', fontSize: "12px", fontWeight: "bold", color: "#770404" }} align="left">
                                                User ID
                                            </Typography>
                                            <TextField fullWidth variant="outlined" size="small" helperText={error.userid ? "Please enter the User ID" : " "}
                                                InputProps={{ style: { height: "35px", borderRadius: 10 } }} value={data.userid} onChange={(e) => handleChange(e, 'userid')} />
                                        </Grid>

                                        <Grid item xs={12} md={12} style={{ marginTop: "-10px" }} >
                                            <Typography style={{ fontFamily: 'Poppins', fontSize: "12px", fontWeight: "bold", color: "#770404" }} align="left">
                                                Password
                                            </Typography>
                                            <TextField fullWidth variant="outlined" size="small" helperText={error.password ? "Please enter the Password" : " "} InputProps={{ style: { height: "35px", borderRadius: 10 } }} value={data.password} onChange={(e) => handleChange(e, 'password')} />
                                        </Grid>
                                    </Grid>

                                </CardContent>
                                <CardActions style={{ display: "flex", justifyContent: "center", alignItem: "center", marginTop: "10px" }}>
                                    <Button variant="contained" size="small" onClick={login} style={{ backgroundColor: "#770404", width: "90px" }}>Login</Button>
                                </CardActions>
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

StatuscheckForm.propTypes = {
    window: PropTypes.func,
};

export default StatuscheckForm;
