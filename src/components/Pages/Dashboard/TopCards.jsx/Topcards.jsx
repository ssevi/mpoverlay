import React from 'react';
import { Card, CardContent, Typography, Divider, Grid } from '@mui/material';

export default function Topcards() {

    return (
        <>
            <Card sx={{ width: "100%", height: 60 }} style={{ background: "linear-gradient(to right, #b31217, #b31217)", borderRadius: 15 }}>
                <CardContent style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>

                    <Grid container spacing={1}>
                        <Grid item xs={12} md={2} style={{ display: "flex", alignItems: "center", justifyContent: "center" }} >
                            <Typography gutterBottom style={{ color: "#ffffff", fontSize: "20px", fontFamily: "Playfair Display" }}>
                                State
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={1} style={{ display: "flex", alignItems: "center", justifyContent: "center" }} >
                            <Divider orientation="vertical" style={{ background: 'white', fontWeight: "bold" }} />
                        </Grid>


                        <Grid item xs={12} md={2} style={{ display: "flex", alignItems: "center", justifyContent: "center" }} >
                            <Typography gutterBottom style={{ color: "#ffffff", fontSize: "20px", fontFamily: "Playfair Display" }}>
                                District
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={1} style={{ display: "flex", alignItems: "center", justifyContent: "center" }} >
                            <Divider orientation="vertical" style={{ background: 'white', fontWeight: "bold" }} />
                        </Grid>

                        <Grid item xs={12} md={2} style={{ display: "flex", alignItems: "center", justifyContent: "center" }} >
                            <Typography gutterBottom style={{ color: "#ffffff", fontSize: "20px", fontFamily: "Playfair Display" }}>
                                Area
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={1} style={{ display: "flex", alignItems: "center", justifyContent: "center" }} >
                            <Divider orientation="vertical" style={{ background: 'white', fontWeight: "bold" }} />
                        </Grid>


                        <Grid item xs={12} md={2} style={{ display: "flex", alignItems: "center", justifyContent: "center" }} >
                            <Typography gutterBottom style={{ color: "#ffffff", fontSize: "20px", fontFamily: "Playfair Display" }}>
                                Unit
                            </Typography>
                        </Grid>
                    </Grid>

                </CardContent>
            </Card>
        </>

    )
}


