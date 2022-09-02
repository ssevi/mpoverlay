import React from 'react';
import { Card, Typography, CardContent, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function ContactUs() {
    return (
        <>
            <Card style={{ borderTop: "5px solid #dd1818", borderRadius: "15px", marginTop: "20px", alignItems: "stretch", minHeight: "50%" }} sx={{ minWidth: "100%" }}>
                <CardContent>
                    <Grid container spacing={1} justifyContent="space-evenly">
                        <Grid item xs={12} md={1} style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
                            <Link to="/officemanagementtable">
                                <ArrowBackIcon sx={{ fontSize: 30 }} style={{ color: "#3b4a54" }} />
                            </Link>
                        </Grid>
                        <Grid item xs={12} md={11} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Typography sx={{ fontSize: 30, fontWeight: "bold", color: "#3b4a54" }} align="center" gutterBottom>
                                TECHNICAL SUPPORT
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid container spacing={5} marginTop="5px">
                        <Grid item xs={12} md={4} style={{ display: "flex", alignItems: "center", justifyContent: "center" }} >
                            <Card sx={{ width: 380, height: "100%", marginBottom: "10px", }}>
                                <CardContent>
                                    <Typography sx={{ fontSize: 12 }} style={{ fontFamily: 'Poppins', fontSize: "15px ", color: "#3b4a54", }} gutterBottom>
                                        Company Name
                                    </Typography>
                                    <Typography sx={{ fontSize: 14 }} style={{ fontFamily: 'Poppins', fontSize: "15px ", color: "#3b4a54", fontWeight: "bold" }} gutterBottom>
                                        ARVENSION TECHNOLOGIES LLP
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item xs={12} md={4} style={{ display: "flex", alignItems: "center", justifyContent: "center" }} >
                            <Card sx={{ width: 380, height: "100%", marginBottom: "10px", }}>
                                <CardContent>
                                    <Typography sx={{ fontSize: 12 }} style={{ fontFamily: 'Poppins', fontSize: "15px ", color: "#3b4a54", }} gutterBottom>
                                    Address
                                    </Typography>
                                    <Typography sx={{ fontSize: 14 }} style={{ fontFamily: 'Poppins', fontSize: "15px ", color: "#3b4a54", fontWeight: "bold" }} gutterBottom>
                                    WS-6, Fourth floor, Gayatri building, P1,
                                    </Typography>
                                    <Typography sx={{ fontSize: 14 }} style={{ fontFamily: 'Poppins', fontSize: "15px ", color: "#3b4a54", fontWeight: "bold" }} gutterBottom>
                                    Technopark, Kazhakoottam,
                                    </Typography>
                                    <Typography sx={{ fontSize: 14 }} style={{ fontFamily: 'Poppins', fontSize: "15px ", color: "#3b4a54", fontWeight: "bold" }} gutterBottom>
                                    Thiruvananthapuram - 695581
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item xs={12} md={4} style={{ display: "flex", alignItems: "center", justifyContent: "center" }} >
                            <Card sx={{ width: 380, height: "100%", marginBottom: "10px", }}>
                                <CardContent>
                                    <Typography sx={{ fontSize: 12 }} style={{ fontFamily: 'Poppins', fontSize: "15px ", color: "#3b4a54", }} gutterBottom>
                                    Contact Email
                                    </Typography>
                                    <Typography sx={{ fontSize: 14 }} style={{ fontFamily: 'Poppins', fontSize: "15px ", color: "#3b4a54", fontWeight: "bold" }} gutterBottom>
                                        info@arvension.com
                                    </Typography>
                                    <Typography sx={{ fontSize: 14 }} style={{ fontFamily: 'Poppins', fontSize: "15px ", color: "#3b4a54", fontWeight: "bold" }} gutterBottom>
                                        support@arvension.com
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                    </Grid>

                </CardContent>
            </Card>
        </>
    );
}
