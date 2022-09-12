import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from "react-router-dom";
import Area from "../../../assets/images/Area.svg";

export default function ReportAreaCommittee() {
  return (
    <>
      <Link style={{ textTransform: "none", textDecoration: "none", color: "#000000" }} to="/reportareacommitteemanagementtable">
        <Card sx={{ width: 250, height: 290, boxShadow: "5px 5px 10px #666666,-5px -5px 10px #ffffff", borderRadius: 5 }}>
          <CardMedia
            component="img"
            height="140"
            image={Area}
            alt="Department"
            sx={{ objectPosition: "60% 20%", objectFit: "fill" }}
          />
          <CardContent>
            <Typography style={{ fontSize: "25px", fontFamily: "Playfair Display", color: "#3b4a54" }} align="center" gutterBottom>
              Area Committee Management
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </>
  )
}
