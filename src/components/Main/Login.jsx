import React, { useState } from 'react';
import {
    Box, AppBar, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography, Button,
    Avatar, Stack, Card, CardActions, CardContent, Grid, TextField, Snackbar, Alert, FormHelperText
} from '@mui/material';
import PropTypes from 'prop-types';
import MenuIcon from '@mui/icons-material/Menu';
import { FaSearchPlus } from 'react-icons/fa';
import { FaSearchMinus } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { AiFillFormatPainter } from 'react-icons/ai';
import Pic from "../../assets/images/Login.png";
import Logo from "../../assets/images/Logongo.png";

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
                <AppBar component="nav" style={{ backgroundColor: "#B1B1B1" }}>
                    <Toolbar>
                        <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2, display: { sm: 'none' } }}>
                            <MenuIcon />
                        </IconButton>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
                            <Button sx={{ color: '#fff' }}> Home </Button>
                            <Button sx={{ color: '#fff' }}> Employees </Button>
                            <Button sx={{ color: '#fff' }}> Pensioners </Button>
                            <Button sx={{ color: '#fff' }}> Subscription </Button>
                        </Box>

                        <Box >
                            <Stack direction="row" spacing={2}>
                                <Avatar variant="square" sx={{ width: 35, height: 35 }} style={{borderRadius:"7px",background: "#dddada", boxShadow:"inset 20px 20px 60px #bcb9b9 inset -20px -20px 60px #fefbfb"}}> <FaSearchMinus /> </Avatar>
                                <Avatar variant="square" sx={{ width: 35, height: 35 }} style={{borderRadius:"7px",background: "#dddada", boxShadow:"inset 20px 20px 60px #bcb9b9 inset -20px -20px 60px #fefbfb"}}> <FaSearch /> </Avatar>
                                <Avatar variant="square" sx={{ width: 35, height: 35 }} style={{borderRadius:"7px",background: "#dddada", boxShadow:"inset 20px 20px 60px #bcb9b9 inset -20px -20px 60px #fefbfb"}}> <FaSearchPlus /> </Avatar>
                                <Avatar variant="square" sx={{ width: 35, height: 35 }} style={{borderRadius:"7px",background: "#dddada", boxShadow:"inset 20px 20px 60px #bcb9b9 inset -20px -20px 60px #fefbfb"}}> <AiFillFormatPainter /> </Avatar>
                                <Avatar variant="square" sx={{ width: 35, height: 35 }} style={{borderRadius:"7px",background: "#dddada", boxShadow:"inset 20px 20px 60px #bcb9b9 inset -20px -20px 60px #fefbfb", fontSize:"16px", fontWeight:"bold"}} >Mal</Avatar>
                                <Avatar variant="square" sx={{ width: 35, height: 35 }} style={{borderRadius:"7px",background: "#dddada", boxShadow:"inset 20px 20px 60px #bcb9b9 inset -20px -20px 60px #fefbfb", fontSize:"16px", fontWeight:"bold"}}>Eng</Avatar>
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
                <Box component="main" sx={{ p: 3 }}>
                    <Toolbar />

                    <Grid container spacing={1}  >
                        {/* <Grid item xs={12} md={6} style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItem: "center" }} >
                            <Typography style={{ fontSize: "70px", fontFamily: "Playfair Display", color: "#B1B1B1", marginLeft: "70px" }} >
                                magazine
                            </Typography>
                            <Typography style={{ fontSize: "40px", fontFamily: "Playfair Display", color: "#770404", marginTop: "-20px", marginLeft: "70px" }} >
                                subscription
                            </Typography>
                        </Grid> */}

                        <Grid item xs={12} md={12} style={{ display: "flex", justifyContent: "center", alignItem: "center", backgroundImage: `url(${Pic})`, backgroundPosition: "center", backgroundSize: "cover", height: "85vh", width: "173vh" }} >
                            <Card sx={{ width: 330, height: 420,  marginTop: "70px" }} style={{ borderRadius: "25px", background: "#e0e0e0" }}>
                                <CardContent align="center" >
                                    <img src={Logo} alt="pic" height="90px" width="300px" align="center" style={{ marginTop: "30px" }} />

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
                                    <Button variant="contained" size="small" onClick={submit} style={{ backgroundColor: "#770404", width:"90px" }}>Login</Button>
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
