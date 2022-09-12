import React from 'react';
import { Card, CardContent, CardActions, Typography, Grid, Avatar, Button } from '@mui/material';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import FilterFramesIcon from '@mui/icons-material/FilterFrames';
import ApprovalIcon from '@mui/icons-material/Approval';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";

export default function AllOrdersCard() {
    return (
        <>
            <Card style={{ backgroundColor: "#dd1818", width: 370, height: 70, display: "flex", alignItems: "center", justifyContent: "center" }} >
                <CardContent>
                    <Grid container spacing={2} justifyContent="space-evenly" marginTop={1}>
                        <Grid className="content" item xs={12} md={12} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Link to="/ordercreationcard">
                                <ArrowBackIcon sx={{ fontSize: 30 }} style={{ color: "#ffffff" }} />
                            </Link>
                            <Typography style={{ fontSize: "35px", fontFamily: "Playfair Display", color: "#ffffff" }} align="center" gutterBottom>
                                ALL ORDERS
                            </Typography>
                        </Grid>
                    </Grid>

                </CardContent>
            </Card>

            <Grid container spacing={2} justifyContent="space-evenly" marginTop={1}>
                <Grid className="content" item xs={12} md={12} style={{ display: "flex", alignItems: "flex-start", justifyContent: "left" }}></Grid>
            </Grid>

            <Grid container spacing={2} marginLeft="10px">
                <Grid item xs={12} md={4} style={{ display: "flex", flexDirection: "column", alignItems: "stretch", justifyContent: "center" }}>
                    <Card style={{ width: 250, height: 280, marginTop: 5, borderRadius: 25, background: "linear-gradient(145deg, #ffffff, #ffffff)", boxShadow: "5px 5px 10px #adadad,-5px -5px 10px #ffffff" }}>
                        <hr style={{ display: "block", height: "1px", width: "500px", border: 0, borderTop: "1px solid #ccc", margin: "2em 0", marginTop: "65px" }} />
                        <CardContent>
                            <Avatar sx={{ height: 70, width: 70, marginTop: "-85px", background: "linear-gradient(to right, #333333, #dd1818)" }}> <AppRegistrationIcon style={{ fontSize: "35px" }} /> </Avatar>
                            <Typography style={{ fontSize: "25px", fontFamily: "Playfair Display", color: "#000000" }} align="center" gutterBottom>
                                Unit Committee
                            </Typography>
                            <Grid item xs={12} md={12} style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                                <CardActions>
                                    <Link style={{ textTransform: "none", textDecoration: "none", color: "#000000" }} to="/unitcommitteelogintable">
                                        <Button variant="contained" style={{ backgroundColor: "#3b4a54", marginTop: "50px" }}>
                                            Click Here
                                        </Button>
                                    </Link>
                                </CardActions>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={4} style={{ display: "flex", flexDirection: "column", alignItems: "stretch", justifyContent: "center" }}>
                    <Card style={{ width: 250, height: 280, marginTop: 5, borderRadius: 25, background: "linear-gradient(145deg, #ffffff, #ffffff)", boxShadow: "5px 5px 10px #adadad,-5px -5px 10px #ffffff" }}>
                        <hr style={{ display: "block", height: "1px", width: "500px", border: 0, borderTop: "1px solid #ccc", margin: "2em 0", marginTop: "65px" }} />
                        <CardContent>
                            <Avatar sx={{ height: 70, width: 70, marginTop: "-85px", background: "linear-gradient(to right, #333333, #dd1818)" }}> <ApprovalIcon style={{ fontSize: "35px" }} /> </Avatar>
                            <Typography style={{ fontSize: "25px", fontFamily: "Playfair Display", color: "#000000" }} align="center" gutterBottom>
                                Area Committee
                            </Typography>
                            <Grid item xs={12} md={12} style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                                <CardActions>
                                    <Link style={{ textTransform: "none", textDecoration: "none", color: "#000000" }} to="/areacommitteelogintable">
                                        <Button variant="contained" style={{ backgroundColor: "#3b4a54", marginTop: "50px" }}>
                                            Click Here
                                        </Button>
                                    </Link>
                                </CardActions>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} md={4} style={{ display: "flex", flexDirection: "column", alignItems: "stretch", justifyContent: "center" }}>
                    <Card style={{ width: 250, height: 280, marginTop: 5, borderRadius: 25, background: "linear-gradient(145deg, #ffffff, #ffffff)", boxShadow: "5px 5px 10px #adadad,-5px -5px 10px #ffffff" }}>
                        <hr style={{ display: "block", height: "1px", width: "500px", border: 0, borderTop: "1px solid #ccc", margin: "2em 0", marginTop: "65px" }} />
                        <CardContent>
                            <Avatar sx={{ height: 70, width: 70, marginTop: "-85px", background: "linear-gradient(to right, #333333, #dd1818)" }}> <FilterFramesIcon style={{ fontSize: "35px" }} /> </Avatar>
                            <Typography style={{ fontSize: "25px", fontFamily: "Playfair Display", color: "#000000" }} align="center" gutterBottom>
                                District Committee
                            </Typography>
                            <Grid item xs={12} md={12} style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                                <CardActions>
                                    <Link style={{ textTransform: "none", textDecoration: "none", color: "#000000" }} to="/statecommitteelogintable">
                                        <Button variant="contained" style={{ backgroundColor: "#3b4a54", marginTop: "20px" }}>
                                            Click Here
                                        </Button>
                                    </Link>
                                </CardActions>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}