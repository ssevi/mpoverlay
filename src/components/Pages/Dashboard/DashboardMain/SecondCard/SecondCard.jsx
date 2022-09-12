import React from 'react';
import { Card, CardContent, Typography, Grid, Button } from '@mui/material';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import MoreVertIcon from '@mui/icons-material/MoreVert';


export default function SecondCard() {

    return (
        <>
            <Card sx={{ width: "100%", height: 60 }} style={{ background: "linear-gradient(to right, #ece9e6, #ffffff)",borderRadius:15 }}>
                <CardContent style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>

                    <Grid container spacing={1}>
                        <Grid item xs={12} md={1} style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }} >
                            <HomeWorkIcon style={{ fontSize: "30px" }} />
                        </Grid>

                        <Grid item xs={12} md={5} style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }} >
                            <Typography gutterBottom style={{ color: "#000000", fontSize: "20px", fontFamily: "Playfair Display" }}>
                                Office
                            </Typography>
                        </Grid>


                        <Grid item xs={12} md={5} style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }} >
                            <Button variant="contained" style={{ backgroundColor: "#3b4a54", textTransform: "none", width: "200px", fontFamily: "Playfair Display", fontSize: "15px" }} >
                                Add Office
                            </Button>
                        </Grid>

                        <Grid item xs={12} md={1} style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }} >
                            <MoreVertIcon style={{ fontSize: "30px" }} />
                        </Grid>

                    </Grid>
                </CardContent>
            </Card>
        </>

    )
}


