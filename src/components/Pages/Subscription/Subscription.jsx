import React from 'react';
import { Card, CardContent, Typography, Grid, Avatar, CardMedia, Button, CardActions } from '@mui/material';
import { Link } from "react-router-dom";
import GroupsIcon from '@mui/icons-material/Groups';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import Subscriptions from "../../../assets/images/Subscriptions.png"


export default function Subscription() {
    return (
        <>
            <Card style={{ backgroundColor: "#dd1818", width: 370, height: 70, display: "flex", alignItems: "center", justifyContent: "center" }} >
                <CardContent>
                    <Typography style={{ fontSize: "35px", fontFamily: "Playfair Display", color: "#ffffff" }} align="center" gutterBottom>
                        Subscription
                    </Typography>
                </CardContent>
            </Card>

            <Grid container spacing={2} marginTop={1}>
                <Grid className="content" item xs={12} md={12} style={{ display: "flex", alignItems: "flex-start", justifyContent: "left" }}></Grid>
            </Grid>

            <Grid container spacing={2} marginTop={1}>
                <Grid item xs={12} md={8} >
                    <Grid container spacing={1}>

                        <Grid item xs={12} md={6} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Card sx={{ width: 200, height: 250 }} style={{ borderBottom: "5px solid #dd1818", boxShadow: "10px 10px 32px #949494,-10px -10px 32px #ffffff", background: "#ffffff", borderRadius: 15 }}>
                                <Avatar sx={{ width: 80, height: 80 }} style={{ background: "linear-gradient(to left, #333333, #dd1818)", marginLeft: 10, marginTop: 5 }} >
                                    <GroupsIcon sx={{ fontSize: 50 }} />
                                </Avatar>
                                <CardContent align="left" style={{ marginTop: "30px" }} >
                                    <Typography style={{ fontSize: "25px", fontFamily: "Playfair Display", color: "#3b4a54" }}>
                                        Active Subscription
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item xs={12} md={6} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Card sx={{ width: 200, height: 250 }} style={{ borderBottom: "5px solid #dd1818", boxShadow: "10px 10px 32px #949494,-10px -10px 32px #ffffff", background: "#ffffff", borderRadius: 15 }}>
                                <Avatar sx={{ width: 80, height: 80 }} style={{ background: "linear-gradient(to left, #333333, #dd1818)", marginLeft: 10, marginTop: 5 }} >
                                    <CalendarMonthIcon sx={{ fontSize: 50 }} />
                                </Avatar>
                                <CardContent align="left" style={{ marginTop: "30px" }} >
                                    <Typography style={{ fontSize: "25px", fontFamily: "Playfair Display", color: "#3b4a54" }}>
                                        Date Wise Sorting
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item xs={12} md={6} style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: 10 }}>
                            <Card sx={{ width: 200, height: 250 }} style={{ borderBottom: "5px solid #dd1818", boxShadow: "10px 10px 32px #949494,-10px -10px 32px #ffffff", background: "#ffffff", borderRadius: 15 }}>
                                <Avatar sx={{ width: 80, height: 80 }} style={{ background: "linear-gradient(to left, #333333, #dd1818)", marginLeft: 10, marginTop: 5 }} >
                                    <AutorenewIcon sx={{ fontSize: 50 }} />
                                </Avatar>
                                <CardContent align="left" style={{ marginTop: "30px" }} >
                                    <Typography style={{ fontSize: "25px", fontFamily: "Playfair Display", color: "#3b4a54" }}>
                                        Renewed Subscription
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item xs={12} md={6} style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: 10 }}>
                            <Card sx={{ width: 200, height: 250 }} style={{ borderBottom: "5px solid #dd1818", boxShadow: "10px 10px 32px #949494,-10px -10px 32px #ffffff", background: "#ffffff", borderRadius: 15 }}>
                                <Avatar sx={{ width: 80, height: 80 }} style={{ background: "linear-gradient(to left, #333333, #dd1818)", marginLeft: 10, marginTop: 5 }} >
                                    <CardMembershipIcon sx={{ fontSize: 50 }} />
                                </Avatar>
                                <CardContent align="left" style={{ marginTop: "30px" }} >
                                    <Typography style={{ fontSize: "25px", fontFamily: "Playfair Display", color: "#3b4a54" }}>
                                        New Subscriber
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>

                </Grid>

                <Grid item xs={12} md={4} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Card sx={{ width: 345 }} >
                        <CardMedia
                            component="img"
                            height="140"
                            image={Subscriptions}
                            alt="green iguana"
                            color="#e4e4e4"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}

