import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, Grid, Tabs, Tab, } from '@mui/material';
import PropTypes from 'prop-types';
import Pic from "../../../assets/images/Subscription.png";
import Logo from "../../../assets/images/Logongo.png";

import CitizensForm from './CitizensForm';
import UnitcommitteemembersForm from './UnitcommitteemembersForm';

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
    const [value, setValue] = useState(0);
    const handleChangeValue = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
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

        </>
    );
}

