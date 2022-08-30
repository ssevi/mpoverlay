import React from "react";
import { Grid, Button, Typography } from "@mui/material";
import Error from "../../../assets/images/Error.svg"
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <>
            <Grid container spacing={2} style={{ minHeight: "77vh" }}>
                <Grid item xs={12} md={7} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <img alt="404 Page" src={Error} width="500px" />
                </Grid>

                <Grid item xs={12} md={4} style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }} >
                    <div>
                        <Typography style={{ fontSize: "35px", fontFamily: "Playfair Display", color: "#3b4a54" }} align="center">
                            This page could not be found!
                        </Typography>
                    </div>
                    <div>
                        <Button style={{ textTransform: "none", backgroundColor: "#dd1818", width: "130px" }} variant="contained" alignItems="center" justifyContent="center">
                            <Link style={{ textDecoration: "none", color: "#ffffff" }} to="/">
                                Dashboard
                            </Link>
                        </Button>
                    </div>
                </Grid>
            </Grid>
        </>
    );
}

