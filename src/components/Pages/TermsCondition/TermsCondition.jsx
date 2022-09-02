import React from 'react';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Card, Typography, CardContent, Grid, List, ListItem, ListItemText, ListItemIcon, } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";

export default function TermsCondition() {
    return (
        <>
            <Grid container spacing={2} style={{ marginBottom: "20px" }}>
                <Grid item xs={12} md={12} style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", minHeight: "50%" }} sx={{ minWidth: "100%" }} >
                    <Card style={{ borderTop: "5px solid #dd1818", borderRadius: "15px", marginTop: "20px", alignItems: "stretch", minHeight: "50%" }} sx={{ minWidth: "100%" }}>
                        <CardContent>
                            <Grid container spacing={1} justifyContent="space-evenly">
                                <Grid item xs={12} md={1} style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
                                    <Link to="/">
                                        <ArrowBackIcon sx={{ fontSize: 30 }} style={{ color: "#3b4a54" }} />
                                    </Link>
                                </Grid>
                                <Grid item xs={12} md={11} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <Typography sx={{ fontSize: 30, fontWeight: "bold", color: "#3b4a54" }} align="center" gutterBottom>
                                        TERMS AND CONDITIONS
                                    </Typography>
                                </Grid>
                            </Grid>

                            <List>
                                <ListItem disablePadding>
                                    <ListItemIcon>
                                        <ArrowRightIcon style={{ color: "#005896" }} />
                                    </ListItemIcon>
                                    <ListItemText style={{ fontSize: "10px" }} primary={
                                        <Typography gutterBottom style={{ fontFamily: 'Poppins', fontSize: "13px", color: "#000000" }} align="justify">
                                            This website is designed, developed and maintained by Arvension technologies LLP, Trivandrum, Kerala
                                        </Typography>
                                    } />
                                </ListItem>

                                <ListItem disablePadding>
                                    <ListItemIcon>
                                        <ArrowRightIcon style={{ color: "#005896" }} />
                                    </ListItemIcon>
                                    <ListItemText style={{ fontSize: "10px" }} primary={
                                        <Typography gutterBottom style={{ fontFamily: 'Poppins', fontSize: "13px", color: "#000000" }}>
                                            Though all efforts have been made to ensure the accuracy and currency of the content on this
                                            website, the same should not be construed as a statement of law or used for any legal
                                            purposes. In case of any ambiguity or doubts, users are advised to verify/check with the
                                            Department and other sources, and to obtain appropriate professional advice.
                                        </Typography>
                                    } />
                                </ListItem>

                                <ListItem disablePadding>
                                    <ListItemIcon>
                                        <ArrowRightIcon style={{ color: "#005896" }} />
                                    </ListItemIcon>
                                    <ListItemText style={{ fontSize: "10px" }} primary={
                                        <Typography gutterBottom style={{ fontFamily: 'Poppins', fontSize: "13px", color: "#000000" }}>
                                            Under no circumstances will this Department be liable for any expense, loss or damage
                                            including, without limitation, indirect or consequential loss or damage, or any expense, loss
                                            or damage whatsoever arising from use, or loss of use, of data, arising out of or in connection
                                            with the use of this website.

                                        </Typography>
                                    } />
                                </ListItem>

                                <ListItem disablePadding>
                                    <ListItemIcon>
                                        <ArrowRightIcon style={{ color: "#005896" }} />
                                    </ListItemIcon>
                                    <ListItemText style={{ fontSize: "10px" }} primary={
                                        <Typography gutterBottom style={{ fontFamily: 'Poppins', fontSize: "13px", color: "#000000" }}>
                                            These terms and conditions shall be governed by and construed in accordance with the Indian
                                            Laws. Any dispute arising under these terms and conditions shall be subject to the
                                            jurisdiction of the courts of India.
                                        </Typography>
                                    } />
                                </ListItem>

                                <ListItem disablePadding>
                                    <ListItemIcon>
                                        <ArrowRightIcon style={{ color: "#005896" }} />
                                    </ListItemIcon>
                                    <ListItemText style={{ fontSize: "10px" }} primary={
                                        <Typography gutterBottom style={{ fontFamily: 'Poppins', fontSize: "13px", color: "#000000" }}>
                                            The information posted on this website could include hypertext links or pointers to
                                            information created and maintained by non-Government/private organisations. Kerala NGO
                                            union is providing these links and pointers solely for your information and convenience.
                                            When you select a link to an outside website, you are leaving the Kerala NGO union website
                                            and are subject to the privacy and security policies of the owners/sponsors of the outside
                                            website.
                                        </Typography>
                                    } />
                                </ListItem>

                                <ListItem disablePadding>
                                    <ListItemIcon>
                                        <ArrowRightIcon style={{ color: "#005896" }} />
                                    </ListItemIcon>
                                    <ListItemText style={{ fontSize: "10px" }} primary={
                                        <Typography gutterBottom style={{ fontFamily: 'Poppins', fontSize: "13px", color: "#000000" }}>
                                            Kerala NGO union, does not guarantee the availability of such linked pages at all times.
                                        </Typography>
                                    } />
                                </ListItem>

                                <ListItem disablePadding>
                                    <ListItemIcon>
                                        <ArrowRightIcon style={{ color: "#005896" }} />
                                    </ListItemIcon>
                                    <ListItemText style={{ fontSize: "10px" }} primary={
                                        <Typography gutterBottom style={{ fontFamily: 'Poppins', fontSize: "13px", color: "#000000" }}>
                                            Kerala NGO union, cannot authorise the use of copyrighted materials contained in linked
                                            websites. Users are advised to request such authorisation from the owner of the linked
                                            website.
                                        </Typography>
                                    } />
                                </ListItem>

                                <ListItem disablePadding>
                                    <ListItemIcon>
                                        <ArrowRightIcon style={{ color: "#005896" }} />
                                    </ListItemIcon>
                                    <ListItemText style={{ fontSize: "10px" }} primary={
                                        <Typography gutterBottom style={{ fontFamily: 'Poppins', fontSize: "13px", color: "#000000" }}>
                                            Kerala NGO union, does not guarantee that linked websites comply with Indian Government
                                            Web Guidelines.

                                        </Typography>
                                    } />
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}


