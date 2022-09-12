import React from 'react';
import { Card, CardContent, Typography, Grid, Button, Avatar } from '@mui/material';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { TiArrowUnsorted } from 'react-icons/ti';

import Map from "../../../../../assets/images/Map.png"
import Person from "../../../../../assets/images/Person.png"

export default function ThirdCards() {

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12} md={4} style={{ display: "flex", alignItems: "center", justifyContent: "center" }} >

          <Card sx={{ width: 300, height: 320 }} style={{ boxShadow: "15px 15px 30px #666666,-15px -15px 30px #ffffff", borderRadius: 10 }}>
            <CardContent style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Grid container spacing={1}>

                <Grid item xs={12} md={4} style={{ display: "flex", alignItems: "center", justifyContent: "center" }} >
                  <Avatar style={{ backgroundColor: "#ffffff", boxShadow: "15px 15px 30px #666666,-15px -15px 30px #ffffff", }}>
                    <PersonAddAltIcon style={{ color: "#A52A2A" }} />
                  </Avatar>
                </Grid>

                <Grid item xs={12} md={8} style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }} >
                  <Typography gutterBottom style={{ color: "#000000", fontSize: "20px", fontFamily: "Playfair Display" }}>
                    Add Member
                  </Typography>
                </Grid>

                <Grid item xs={12} md={12} style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }} >
                <Avatar  variant="square" style={{borderRadius:5}}>
        <img src={Person} alt="Map"height={40} />
      </Avatar> 
                </Grid>

              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4} style={{ display: "flex", alignItems: "center", justifyContent: "center" }} >
          <Card sx={{ width: 300, height: 320 }} style={{ boxShadow: "15px 15px 30px #666666,-15px -15px 30px #ffffff", borderRadius: 10 }}>
            <CardContent style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Grid container spacing={1}>

              <Grid item xs={12} md={4} style={{ display: "flex", alignItems: "center", justifyContent: "center" }} >
                  <Avatar style={{ backgroundColor: "#ffffff", boxShadow: "15px 15px 30px #666666,-15px -15px 30px #ffffff" }}>
                    <LocationOnIcon style={{ color: "#A52A2A" }} />
                  </Avatar>
                </Grid>

                <Grid item xs={12} md={8} style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }} >
                  <Typography gutterBottom style={{ color: "#000000", fontSize: "15px", fontFamily: "Playfair Display" }}>
                    Address of The Subscriber
                  </Typography>
                </Grid>

                <Grid item xs={12} md={12} style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }} >
                <Avatar  variant="square" style={{borderRadius:5}}>
        <img src={Map} alt="Map"height={40} />
      </Avatar> 
                </Grid>

              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4} style={{ display: "flex", alignItems: "center", justifyContent: "center" }} >
          <Card sx={{ width: 300, height: 320 }} style={{ boxShadow: "15px 15px 30px #666666,-15px -15px 30px #ffffff", borderRadius: 10 }}>
            <CardContent style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Grid container spacing={1}>

              <Grid item xs={12} md={4} style={{ display: "flex", alignItems: "center", justifyContent: "center" }} >
                  <Avatar style={{ backgroundColor: "#ffffff", boxShadow: "15px 15px 30px #666666,-15px -15px 30px #ffffff" }}>
                    <TiArrowUnsorted style={{ color: "#A52A2A",fontSize:30 }} />
                  </Avatar>
                </Grid>

                <Grid item xs={12} md={8} style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }} >
                  <Typography gutterBottom style={{ color: "#000000", fontSize: "20px", fontFamily: "Playfair Display" }}>
                    Sort
                  </Typography>
                </Grid>

              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>

  )
}


