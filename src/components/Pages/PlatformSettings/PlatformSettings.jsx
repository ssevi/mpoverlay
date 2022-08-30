import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { Link } from "react-router-dom";
import Platform from "../../../assets/images/PlatformSettings.png"


export default function PlatformSettings() {
    return (
        <>
            <Card style={{ backgroundColor: "#dd1818", width: 370, height: 70, display:"flex", alignItems: "center", justifyContent: "center"}} >
                <CardContent>
                    <Typography style={{ fontSize: "35px", fontFamily: "Playfair Display", color: "#ffffff" }} align="center" gutterBottom>
                        Platform Settings
                    </Typography>
                </CardContent>
            </Card>

            <Grid container spacing={2} justifyContent="space-evenly" marginTop={10}>
                <Grid className="content" item xs={12} md={12} style={{ display: "flex", alignItems: "flex-start", justifyContent: "left" }}></Grid>
            </Grid>

            <Grid container spacing={2} marginLeft="10px">
                <Grid item xs={12} md={6} style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <Link style={{ textTransform: "none", textDecoration: "none", color: "#000000" }} to="/notfound">
                    <Card style={{ backgroundColor: "#3b4a54", width: 370, height: 70, marginTop: 10 }}>
                        <CardContent>
                            <Typography style={{ fontSize: "25px", fontFamily: "Playfair Display", color: "#ffffff" }} align="center" gutterBottom>
                                Change Password
                            </Typography>
                        </CardContent>
                    </Card>
                    </Link>

                    <Link style={{ textTransform: "none", textDecoration: "none", color: "#000000" }} to="/notfound">
                    <Card style={{ backgroundColor: "#3b4a54", width: 370, height: 70, marginTop: 10 }}>
                        <CardContent>
                            <Typography style={{ fontSize: "25px", fontFamily: "Playfair Display", color: "#ffffff" }} align="center" gutterBottom>
                                Change Mobile Number
                            </Typography>
                        </CardContent>
                    </Card>
                    </Link>

                    <Link style={{ textTransform: "none", textDecoration: "none", color: "#000000" }} to="/notfound">
                    <Card style={{ backgroundColor: "#3b4a54", width: 370, height: 70, marginTop: 10 }}>
                        <CardContent>
                            <Typography style={{ fontSize: "25px", fontFamily: "Playfair Display", color: "#ffffff" }} align="center" gutterBottom>
                                My Account
                            </Typography>
                        </CardContent>
                    </Card>
                    </Link>

                </Grid>

                <Grid item xs={12} md={6}>
                    <img src={Platform} alt="pic" height="100%" width="400px" align="center" />
                </Grid>
            </Grid>
        </>
    )
}
