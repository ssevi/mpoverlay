import React, { useState } from 'react';
import { Card, Typography, CardContent, Grid, Snackbar, Alert } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SubscriptionManagementLocalForm from './SubscriptionManagementLocalForm';
import SubscriptionManagementOfficeForm from './SubscriptionManagementOfficeForm';

export default function SubscriptionManagementForm() {
  const [missing, setMissing] = useState(false);
  return (
    <>
      <Snackbar open={missing} autoHideDuration={6000} onClose={() => setMissing(false)} anchorOrigin={{ vertical: "top", horizontal: "right" }}>
        <Alert onClose={() => setMissing(false)} severity="error" sx={{ width: '100%' }}>
          Please fill all the details
        </Alert>
      </Snackbar>
      <Card style={{ borderTop: "5px solid #dd1818", borderRadius: "15px", marginTop: "20px", alignItems: "stretch", minHeight: "50%" }} sx={{ minWidth: "100%" }}>
        <CardContent>
          <Grid container spacing={1} justifyContent="space-evenly">
            <Grid item xs={12} md={1} style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
              <Link to="/subscriptionmanagementtable">
                <ArrowBackIcon sx={{ fontSize: 30 }} style={{ color: "#3b4a54" }} />
              </Link>
            </Grid>
            <Grid item xs={12} md={11} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Typography sx={{ fontSize: 30, fontWeight: "bold", color: "#3b4a54" }} align="center" gutterBottom>
                SUBSCRIPTION MANAGEMENT FORM
              </Typography>
            </Grid>
          </Grid>

          <form autoComplete="auto">

            <Grid container spacing={2} marginTop={2}>
              <Grid item xs={12} md={6}>
                <SubscriptionManagementLocalForm />
              </Grid>

              <Grid item xs={12} md={6}>
                <SubscriptionManagementOfficeForm />
              </Grid>

            </Grid>
          </form>
        </CardContent>
      </Card>
    </>
  );
}
