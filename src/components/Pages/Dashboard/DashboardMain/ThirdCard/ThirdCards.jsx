import React from 'react';
import { Card, CardContent, Typography, Grid, Avatar, Divider, Button } from '@mui/material';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { TiArrowUnsorted } from 'react-icons/ti';
import { BiEdit } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import Map from "../../../../../assets/images/Map.png"
import Person from "../../../../../assets/images/Person.png"

export default function ThirdCards() {

  return (
    <>
      <Grid container spacing={1}>

        <Grid item xs={12} md={4} style={{ display: "flex", alignItems: "center", justifyContent: "center" }} >
          <Card sx={{ width: 300, height: 320 }} style={{ boxShadow: "15px 15px 30px #666666,-15px -15px 30px #ffffff", borderRadius: 10 }}>
            <CardContent >

              <Grid container spacing={1}>
                <Grid item xs={12} md={3} style={{ display: "flex" }} >
                  <Avatar style={{ backgroundColor: "#ffffff", boxShadow: "15px 15px 30px #666666,-15px -15px 30px #ffffff", }}>
                    <PersonAddAltIcon style={{ color: "#A52A2A" }} />
                  </Avatar>
                </Grid>

                <Grid item xs={12} md={9} style={{ display: "flex", alignItems: "center" }} >
                  <Typography gutterBottom style={{ color: "#000000", fontSize: "20px", fontFamily: "Playfair Display" }} >
                    Add Member
                  </Typography>
                </Grid>
              </Grid>

              <Grid container spacing={1} marginTop={2}>
                <Grid item xs={12} md={3} style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }} >
                  <Avatar variant="square" style={{ borderRadius: 5, height: 50, width: 50 }}>
                    <img src={Person} alt="Map" height={50} />
                  </Avatar>
                </Grid>

                <Grid item xs={12} md={9} style={{ display: "flex", alignItems: "center" }} >
                  <Typography sx={{ flexGrow: 1 }} gutterBottom style={{ color: "#000000", fontSize: "18px", fontFamily: "Playfair Display" }} align="left">
                    name
                  </Typography>
                  <Avatar variant="square" style={{ borderRadius: 5, height: 25, width: 25, background: "#dd1818" }}>
                    <BiEdit />
                  </Avatar>
                  <Avatar variant="square" style={{ borderRadius: 5, height: 25, width: 25, background: "#dd1818", marginLeft: 5 }}>
                    <AiFillDelete />
                  </Avatar>
                </Grid>
                <Divider variant="middle" style={{ background: "#dd1818", fontWeight: "bold" }} />
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4} style={{ display: "flex", alignItems: "center", justifyContent: "center" }} >
          <Card sx={{ width: 300, height: 320 }} style={{ boxShadow: "15px 15px 30px #666666,-15px -15px 30px #ffffff", borderRadius: 10 }}>
            <CardContent >

              <Grid container spacing={1}>
                <Grid item xs={12} md={4} style={{ display: "flex" }} >
                  <Avatar style={{ backgroundColor: "#ffffff", boxShadow: "15px 15px 30px #666666,-15px -15px 30px #ffffff" }}>
                    <LocationOnIcon style={{ color: "#A52A2A" }} />
                  </Avatar>
                </Grid>

                <Grid item xs={12} md={8} style={{ display: "flex", alignItems: "center" }} >
                  <Typography gutterBottom style={{ color: "#000000", fontSize: "15px", fontFamily: "Playfair Display" }}>
                    Address of The Subscriber
                  </Typography>
                </Grid>
              </Grid>

              <Grid container spacing={1} marginTop={2}>
                <Grid item xs={12} md={3} style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }} >
                  <Avatar variant="square" style={{ borderRadius: 5, height: 50, width: 50 }}>
                    <img src={Map} alt="Map" height={70} />
                  </Avatar>
                </Grid>
                <Grid item xs={12} md={9} style={{ display: "flex", alignItems: "center" }} >
                  <Typography sx={{ flexGrow: 1 }} gutterBottom style={{ color: "#000000", fontSize: "18px", fontFamily: "Playfair Display" }} align="left">
                    Address
                  </Typography>
                  <Avatar variant="square" style={{ borderRadius: 5, height: 25, width: 25, background: "#dd1818" }}>
                    <BiEdit />
                  </Avatar>
                  <Avatar variant="square" style={{ borderRadius: 5, height: 25, width: 25, background: "#dd1818", marginLeft: 5 }}>
                    <AiFillDelete />
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
                    <TiArrowUnsorted style={{ color: "#A52A2A", fontSize: 30 }} />
                  </Avatar>
                </Grid>

                <Grid item xs={12} md={8} style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }} >
                  <Typography gutterBottom style={{ color: "#000000", fontSize: "20px", fontFamily: "Playfair Display" }}>
                    Sort
                  </Typography>
                </Grid>

                <Grid item xs={12} md={12} style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }} >
                  <Button variant="contained" style={{ backgroundColor: "#3b4a54", width: 200, borderRadius: 9 }} >
                    State
                    <ExpandMoreIcon style={{ marginLeft: 90 }} />
                  </Button>
                </Grid>


                <Grid item xs={12} md={12} style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }} >
                  <Button variant="contained" style={{ backgroundColor: "#3b4a54", width: 200, borderRadius: 9 }} >
                    District
                    <ExpandMoreIcon style={{ marginLeft: 65 }} />
                  </Button>
                </Grid>


                <Grid item xs={12} md={12} style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }} >
                  <Button variant="contained" style={{ backgroundColor: "#3b4a54", width: 200, borderRadius: 9 }} >
                    Area
                    <ExpandMoreIcon style={{ marginLeft: 90 }} />
                  </Button>
                </Grid>


                <Grid item xs={12} md={12} style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }} >
                  <Button variant="contained" style={{ backgroundColor: "#3b4a54", width: 200, borderRadius: 9 }} >
                    Unit
                    <ExpandMoreIcon style={{ marginLeft: 90 }} />
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={12} >
          <Card sx={{ width: "100%", height: 80 }} style={{ boxShadow: "15px 15px 30px #666666,-15px -15px 30px #ffffff", borderRadius: 10 }}>
            <CardContent >
              <Grid container spacing={1}>
                <Grid item xs={12} md={4} style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "#3b4a54" }}>
                  <Typography gutterBottom style={{ color: "#ffffff", fontSize: "30px", fontFamily: "Playfair Display" }}>
                    FILTER
                  </Typography>
                </Grid>

                <Grid item xs={12} md={8} style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
                  <MoreVertIcon />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>

  )
}


