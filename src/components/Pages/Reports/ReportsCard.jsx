import React from 'react';
import { Card, CardContent, Typography, Grid, } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";
import ReportDepartmentmanagement from './ReportDepartmentmanagement';
import ReportOfficemanagement from './ReportOfficemanagement';
import ReportSubscriptionmanagement from "./ReportSubscriptionmanagement";
import ReportDistrictCommittee from "./ReportDistrictCommittee";
import ReportAreaCommittee from "./ReportAreaCommittee";
import ReportUnitcommittee from "./ReportUnitcommittee";
import ReportPayment from "./ReportPayment"


export default function ReportsCard() {
    return (
        <>
            <Card style={{ backgroundColor: "#dd1818", width: 250, height: 60, display: "flex", alignItems: "center", justifyContent: "center" }} >
                <CardContent>
                    <Grid container spacing={2} justifyContent="space-evenly" >
                        <Grid item xs={12} md={12} style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
                            <Link to="/">
                                <ArrowBackIcon sx={{ fontSize: 30 }} style={{ color: "#ffffff" }} />
                            </Link>
                            <Typography style={{ fontSize: "35px", fontFamily: "Playfair Display", color: "#ffffff", marginTop: 15 }} align="center" gutterBottom>
                                REPORTS
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>

            <Grid container spacing={2} justifyContent="space-evenly" marginTop={5} >
                <Grid className="content" item xs={12} md={12} style={{ display: "flex", alignItems: "flex-start", justifyContent: "left" }}></Grid>
            </Grid>

            <Grid container spacing={2} marginBottom={5}>
                <Grid item xs={12} md={4} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <ReportDepartmentmanagement />
                </Grid>

                <Grid item xs={12} md={4} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <ReportOfficemanagement />
                </Grid>
                <Grid item xs={12} md={4} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <ReportSubscriptionmanagement />
                </Grid>

                <Grid item xs={12} md={4} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <ReportDistrictCommittee />
                </Grid>

                <Grid item xs={12} md={4} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <ReportAreaCommittee />
                </Grid>

                <Grid item xs={12} md={4} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <ReportUnitcommittee />
                </Grid>

                <Grid item xs={12} md={4} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <ReportPayment />
                </Grid>
            </Grid>

        </>
    )
}