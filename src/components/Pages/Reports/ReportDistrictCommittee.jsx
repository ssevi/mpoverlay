import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import District from "../../../assets/images/District.svg"

export default function ReportDistrictCommittee() {
  return (
    <>
      <Card sx={{ width: 250, height: 290, boxShadow: "5px 5px 10px #666666,-5px -5px 10px #ffffff", borderRadius: 5 }}>
        <CardMedia
          component="img"
          height="140"
          image={District}
          alt="Department"
          style={{ objectFit: "fill" }}
        />
        <CardContent>
          <Typography style={{ fontSize: "25px", fontFamily: "Playfair Display", color: "#3b4a54" }} align="center" gutterBottom>
            District Committee Management
          </Typography>
        </CardContent>
      </Card>
    </>
  )
}
