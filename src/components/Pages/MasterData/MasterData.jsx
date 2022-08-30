import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { Link } from "react-router-dom";
import Master from "../../../assets/images/MasterData.svg"


export default function MasterData() {
    return (
        <>
            <Card style={{ backgroundColor: "#dd1818", width: 370, height: 70,  display: "flex", alignItems: "center", justifyContent: "center" }} >
                <CardContent>
                    <Typography style={{ fontSize: "35px", fontFamily: "Playfair Display", color: "#ffffff" }} align="center" gutterBottom>
                        Master Data
                    </Typography>
                </CardContent>
            </Card>

            <Grid container spacing={2} justifyContent="space-evenly" marginTop={3}>
                <Grid className="content" item xs={12} md={12} style={{ display: "flex", alignItems: "flex-start", justifyContent: "left" }}></Grid>
            </Grid>

            <Grid container spacing={2} marginLeft="10px">
            <Grid item xs={12} md={12} style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                    <img src={Master} alt="pic" height="180px" width="100%" align="center" />
                </Grid>

                <Grid container spacing={2} justifyContent="space-evenly" marginTop={2}>
                <Grid className="content" item xs={12} md={12} style={{ display: "flex", alignItems: "flex-start", justifyContent: "left" }}></Grid>
            </Grid>


            <Grid item xs={12} md={12} style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor:"#eaeaea", height:"50px" }}>
                <Link style={{ textTransform: "none", textDecoration: "none", color: "#000000" }} to="/notfound">
                    <Card style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "linear-gradient(to top, #333333, #dd1818)", width: 370, height: 90, marginTop: "-20px" }}>
                        <CardContent>
                            <Typography style={{ fontSize: "25px", fontFamily: "Playfair Display", color: "#ffffff" }} align="center" gutterBottom>
                                District
                            </Typography>
                        </CardContent>
                    </Card>
                    </Link>
                </Grid>

                <Grid item xs={12} md={12} style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor:"#eaeaea", height:"50px", marginTop:"5%" }}>
                <Link style={{ textTransform: "none", textDecoration: "none", color: "#000000" }} to="/notfound">
                    <Card style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "linear-gradient(to top, #333333, #dd1818)", width: 370, height: 90, marginTop: "-20px" }}>
                        <CardContent>
                            <Typography style={{ fontSize: "25px", fontFamily: "Playfair Display", color: "#ffffff" }} align="center" gutterBottom>
                                Area
                            </Typography>
                        </CardContent>
                    </Card>
                    </Link>
                </Grid>

                <Grid item xs={12} md={12} style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor:"#eaeaea", height:"50px" , marginTop:"5%" }}>
                <Link style={{ textTransform: "none", textDecoration: "none", color: "#000000" }} to="/notfound">
                    <Card style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "linear-gradient(to top, #333333, #dd1818)", width: 370, height: 90, marginTop: "-20px" }}>
                        <CardContent>
                            <Typography style={{ fontSize: "25px", fontFamily: "Playfair Display", color: "#ffffff" }} align="center" gutterBottom>
                                Unit
                            </Typography>
                        </CardContent>
                    </Card>
                    </Link>
                </Grid>

            </Grid>
        </>
    )
}
