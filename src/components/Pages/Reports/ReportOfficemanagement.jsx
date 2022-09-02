import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import Office from "../../../assets/images/Office.svg"

export default function ReportOfficemanagement() {
  return (
    <>
      <Card sx={{ width: 250, height: 290, boxShadow: "5px 5px 10px #666666,-5px -5px 10px #ffffff", borderRadius: 5 }}>
        <CardMedia
          component="img"
          height="140"
          image={Office}
          alt="Department"
          style={{ objectFit: "fill" }}
        />
        <CardContent>
          <Typography style={{ fontSize: "25px", fontFamily: "Playfair Display", color: "#3b4a54" }} align="center" gutterBottom>
            Office Management
          </Typography>
        </CardContent>
      </Card>
    </>
  )
}
