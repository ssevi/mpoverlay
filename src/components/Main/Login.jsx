import React, { useState } from 'react';
import { Typography, Button, Card, CardActions, CardContent, Grid, TextField, Snackbar, Alert } from '@mui/material';
import Pic from "../../assets/images/Subscription.png";
import Logo from "../../assets/images/Logongo.png";

const userid = "admin"
const password = "admin"

function StatuscheckForm(props) {

    const { setLoggedIn } = props;
    const [data, setData] = useState({});
    const [error, setError] = useState({})
    const [missing, setMissing] = useState(false)
    const [opensnackbar, setOpensnackbar] = useState(false);
    const [open, setOpen] = useState(false);
    const handleClose = () => { setOpen(false); };

    const handleChange = (e, key) => {
        setData({ ...data, [key]: e.target.value })
    }

    const submit = () => {
        if (validate()) {
            setOpensnackbar(true);
        } else {
            setMissing(true);
        }
    }

    const validate = () => {
        let valid = true;
        let tempError = {};
        if (!data.userid) {
            valid = false;
            tempError.userid = true;
        }
        if (!data.password) {
            valid = false;
            tempError.password = true;
        }
        if (!valid) {
            setError(tempError)

        }
        return valid;
    }

    const handleClosesnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpensnackbar(false);
    };


    const login = () => {
        if (validate()) {
            //API CAll
            if (data.userid === userid && data.password === password) {
                setLoggedIn(true)
                localStorage.setItem("isLoggedIn", "true")
                handleClose();
                console.log("logged");
            } else {
                setOpen(true)
                handleClose();
            }
        }
    }

    return (
        <>
            <Snackbar open={missing} autoHideDuration={6000} onClose={() => setMissing(false)} anchorOrigin={{ vertical: "top", horizontal: "right" }}>
                <Alert onClose={() => setMissing(false)} severity="error" sx={{ width: '100%' }}>
                    Please fill all the details
                </Alert>
            </Snackbar>

            <Grid container spacing={1} marginTop={1}>
                <Grid item xs={12} md={12} style={{ display: "flex", justifyContent: "center", alignItem: "center", backgroundImage: `url(${Pic})`, backgroundPosition: "center", backgroundSize: "cover", borderRadius: "5px", height: "85vh", width: "173vh" }} >
                    <Card sx={{ width: 330, height: 420, marginTop: "70px" }} style={{ borderRadius: "25px", background: "#e0e0e0" }}>
                        <CardContent align="center" >
                            <img src={Logo} alt="pic" height="100px" width="300px" align="center" style={{ marginTop: "30px" }} />

                            <Grid container spacing={1} mt={4}>
                                <Grid item xs={12} md={12}  >
                                    <Typography style={{ fontFamily: 'Poppins', fontSize: "12px", fontWeight: "bold", color: "#770404" }} align="left">
                                        User ID
                                    </Typography>
                                    <TextField fullWidth variant="outlined" size="small" helperText={error.userid ? "Please enter the User ID" : " "}
                                        InputProps={{ style: { height: "35px", borderRadius: 10 } }} value={data.userid} onChange={(e) => handleChange(e, 'userid')} />
                                </Grid>

                                <Grid item xs={12} md={12} style={{ marginTop: "-10px" }} >
                                    <Typography style={{ fontFamily: 'Poppins', fontSize: "12px", fontWeight: "bold", color: "#770404" }} align="left">
                                        Password
                                    </Typography>
                                    <TextField fullWidth variant="outlined" size="small" helperText={error.password ? "Please enter the Password" : " "} InputProps={{ style: { height: "35px", borderRadius: 10 } }} value={data.password} onChange={(e) => handleChange(e, 'password')} />
                                </Grid>
                            </Grid>

                        </CardContent>
                        <CardActions style={{ display: "flex", justifyContent: "center", alignItem: "center", marginTop: "10px" }}>
                            <Button variant="contained" size="small" onClick={login} style={{ backgroundColor: "#770404", width: "90px" }}>Login</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Snackbar open={opensnackbar} autoHideDuration={6000} onClose={() => setOpensnackbar(false)} anchorOrigin={{ vertical: "top", horizontal: "right" }}>
                    <Alert onClose={handleClosesnackbar} severity="success" variant="filled" sx={{ width: '100%' }}>
                        Saved Successfully
                    </Alert>
                </Snackbar>

            </Grid>
        </>
    );
}


export default StatuscheckForm;
