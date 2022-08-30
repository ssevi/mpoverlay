import React, { useState } from 'react';
import { Box, AppBar, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography, Button, Stack, Card, CardContent, Grid, Tabs, Tab, } from '@mui/material';
import PropTypes from 'prop-types';
import MenuIcon from '@mui/icons-material/Menu';
import { FaSearchPlus } from 'react-icons/fa';
import { FaSearchMinus } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { AiFillFormatPainter } from 'react-icons/ai';
import { Link } from "react-router-dom";
import Pic from "../../../assets/images/Subscription.png";
import Logo from "../../../assets/images/Logongo.png";

import CitizensForm from './CitizensForm';
import UnitcommitteemembersForm from './UnitcommitteemembersForm';

const drawerWidth = 240;
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function CitizensubscriptionportalForm() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [value, setValue] = useState(0);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleChangeValue = (event, newValue) => {
        setValue(newValue);
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

                <Link style={{ textTransform: "none", textDecoration: "none", color: "#000000" }} to="/satuscheckform">
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
            <Box sx={{ display: 'flex' }} >
                <AppBar component="nav" style={{ backgroundColor: "#3b4a54" }}>
                    <Toolbar>
                        <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2, display: { sm: 'none' } }}>
                            <MenuIcon />
                        </IconButton>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
                            <Button sx={{ color: '#ffffff' }} style={{ textTransform: "none", fontSize: "16px" }}> Home </Button>

                            <Link style={{ textTransform: "none", textDecoration: "none", color: "#000000" }} to="/satuscheckform">
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
                            <Card sx={{ width: 800, height: 500, overflow: "scroll", marginTop: "50px" }} style={{ borderRadius: "25px", background: "#F5F5F5" }}>
                                <CardContent align="center" >
                                    <img src={Logo} alt="pic" height="100px" width="300px" align="center" style={{ marginTop: "15px" }} />
                                    <Grid item xs={12} md={12}  >
                                        <Typography style={{ fontFamily: 'Poppins', fontSize: "30px", fontWeight: "bold", color: "#770404", marginTop: "15px" }} align="center">
                                            CITIZEN SUBSCRIPTION PORTAL
                                        </Typography>
                                    </Grid>
                                    <Grid container spacing={1} mt={2}>
                                        <Grid item xs={12} md={12}  >
                                            <Box sx={{ width: '100%' }}>
                                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                                    <Tabs value={value} onChange={handleChangeValue} aria-label="basic tabs example">
                                                        <Tab style={{ fontFamily: 'Poppins', fontSize: "15px", fontWeight: "bold", color: "#3b4a54" }} label="Citizens" {...a11yProps(0)} />
                                                        <Tab style={{ fontFamily: 'Poppins', fontSize: "15px", fontWeight: "bold", color: "#3b4a54" }} label="Unit Committee Members" {...a11yProps(1)} />
                                                    </Tabs>
                                                </Box>
                                                <TabPanel value={value} index={0}>
                                                    <CitizensForm />
                                                </TabPanel>
                                                <TabPanel value={value} index={1}>
                                                    <UnitcommitteemembersForm />
                                                </TabPanel>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    );
}

