import React, { useState } from 'react';
import { Typography, Button, Card, CardContent, Grid, TextField } from '@mui/material';
import Subscribe from "../../../assets/images/back.png";
import Logo from "../../../assets/images/Logongo.png";


function StatuscheckForm(props) {
  const [data, setData] = useState({});
  const [error, setError] = useState({})
  const [missing, setMissing] = useState(false)
  const [subscribe, setSubscribe] = useState(false);

  const handleChange = (e, key) => {
    setData({ ...data, [key]: e.target.value })
  }

  const submit = () => {
    if (validate()) {
      setSubscribe(true);
    } else {
      setMissing(true);
    }
  }

  const validate = () => {
    let valid = true;
    let tempError = {};
    if (!data.phonenumber) {
      valid = false;
      tempError.phonenumber = true;
    }
    if (!data.subscriptionno) {
      valid = false;
      tempError.subscriptionno = true;
    }
    if (!valid) {
      setError(tempError)

    }
    return valid;
  }

  return (
    <>
      <Grid container spacing={1}  >
        <Grid item xs={12} md={12} style={{ display: "flex", justifyContent: "center", alignItem: "center", backgroundImage: `url(${Subscribe})`, backgroundPosition: "center", backgroundSize: "cover", height: "85vh", width: "165vh", borderRadius: "10px" }} >
          <Card sx={{ width: 500, height: "90%",overflowY: 'scroll', marginTop: "30px", marginLeft: "100px" }} style={{ isplay: "flex", justifyContent: "center", alignItem: "center", borderRadius: "25px", background: "#e0e0e0", boxShadow: "10px 10px 30px #5a5a5a,-10px -10px 30px #ffffff", }}>
            <CardContent align="center" >
              <img src={Logo} alt="pic" height="90px" width="300px" align="center" style={{ marginTop: "30px" }} />

              <Grid container spacing={1} mt={4}>
                <Grid item xs={12} md={12}  >
                  <Typography style={{ fontFamily: 'Poppins', fontSize: "20px", fontWeight: "bold", color: "#770404" }} align="center">
                    STATUS CHECK
                  </Typography>
                </Grid>

                <Grid item xs={12} md={6}  >
                  <Typography style={{ fontFamily: 'Poppins', fontSize: "12px", fontWeight: "bold", color: "#770404" }} align="left">
                    Phone Number
                  </Typography>
                  <TextField fullWidth variant="outlined" size="small" type="number" helperText={error.phonenumber ? "Please enter the Phone Number" : " "} InputProps={{ style: { height: "35px", borderRadius: 10 } }} value={data.phonenumber} onChange={(e) => handleChange(e, 'phonenumber')} />
                </Grid>

                <Grid item xs={12} md={6}  >
                  <Typography style={{ fontFamily: 'Poppins', fontSize: "12px", fontWeight: "bold", color: "#770404" }} align="left">
                    Subscription Number
                  </Typography>
                  <TextField fullWidth variant="outlined" size="small" helperText={error.subscriptionno ? "Please enter the Subscription Number" : " "} InputProps={{ style: { height: "35px", borderRadius: 10 } }} value={data.subscriptionno} onChange={(e) => handleChange(e, 'subscriptionno')} />
                </Grid>

                <Grid item xs={12} md={12} style={{ display: "flex", justifyContent: "center", alignItem: "center", marginTop: "10px" }} >
                  <Button variant="contained" size="small" onClick={submit} style={{ backgroundColor: "#770404", width: "100px" }}>Search</Button>
                </Grid>

                <Grid item xs={12} md={12}>
                  {subscribe && <Grid container spacing={2} marginTop={2}>
                    <Grid item xs={12} md={6}>
                      <TextField label="Name " fullWidth size="small" variant="outlined" value={data.name} onChange={(e) => handleChange(e, 'name')} />
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <TextField label="Dispatch Address" fullWidth size="small" variant="outlined" value={data.dispatchaddress} onChange={(e) => handleChange(e, 'dispatchaddress')} />
                    </Grid>

                    <Grid item xs={12} md={12}>
                      <TextField label="Subscription Status " fullWidth size="small" variant="outlined" value={data.subscriptionstatus} onChange={(e) => handleChange(e, 'subscriptionstatus')} />
                    </Grid>

                  </Grid>
                  }
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default StatuscheckForm;
