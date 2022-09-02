import React, { useEffect, useState } from 'react';
import { Card, Button, Typography, CardContent, Grid, Select, FormControl, MenuItem, InputLabel, FormHelperText } from "@mui/material";
import { Dialog, DialogActions, DialogContent, DialogContentText, TextField, Snackbar, Alert, RadioGroup, FormControlLabel, FormLabel, Radio, } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const districts = [
    { id: 1, district: " Alappuzha" },
    { id: 2, district: "Ernakulam" },
    { id: 3, district: "Idukki" },
    { id: 4, district: "Kannur" },
    { id: 5, district: "Kasaragod" },
    { id: 6, district: "Kollam" },
    { id: 7, district: "Kottayam" },
    { id: 8, district: "Kozhikode" },
    { id: 9, district: "Malappuram" },
    { id: 10, district: "Palakkad" },
    { id: 11, district: "Pathanamthitta" },
    { id: 12, district: "Thiruvananthapuram" },
    { id: 13, district: "Thrissur" },
    { id: 14, district: "Wayanad" },
];

export default function AreacommitteemanagementForm() {
    const [data, setData] = useState({});
    const [error, setError] = useState({});
    const [open, setOpen] = React.useState(false);
    const [missing, setMissing] = useState(false);
    const [opensnackbar, setOpensnackbar] = useState(false);
    const [checked, setChecked] = useState();


    const handleClickOpen = () => { setOpen(true); };
    const handleClose = () => setOpen(false);

    const handleChange = (e, key) => {
        setData({ ...data, [key]: e.target.value })
    }

    const handleCheckChange = (event) => {
        setChecked(event.target.value);
    };

    useEffect(() => {
        if (checked === "yes") {
            setData({
                ...data,
                whatsappnumber: data.phonenumber
            })
        } else if (checked === "no") {
            setData({
                ...data,
                whatsappnumber: ""
            })
        }
    }, [checked])


    const submit = () => {
        if (validate()) {
            setOpensnackbar(true);
            handleClose();

        } else {
            console.log("hai");
            setMissing(true);
            handleClose();
        }
    }

    const validate = () => {
        let valid = true;
        let tempError = {};
        if (!data.district) {
            valid = false;
            tempError.district = true;
        }
        if (!data.selectarea) {
            valid = false;
            tempError.selectarea = true;
        }
        if (!data.username) {
            valid = false;
            tempError.username = true;
        }
        if (!data.email) {
            valid = false;
            tempError.email = true;
        }
        if (!valid) {
            setError(tempError)

        }
        return valid;
    }


    const submiting = () => {
        if (validates()) {
            setOpensnackbar(true);
            handleClose();

        } else {
            setMissing(true);
            handleClose();
        }
    }

    const validates = () => {
        let valid = true;
        let tempError = {};
        if (!data.firstname) {
            valid = false;
            tempError.firstname = true;
        }
        if (!data.lastname) {
            valid = false;
            tempError.lastname = true;
        }
        if (!data.gender) {
            valid = false;
            tempError.gender = true;
        }
        if (!data.dateofbirth) {
            valid = false;
            tempError.dateofbirth = true;
        }
        if (!data.phonenumber) {
            valid = false;
            tempError.phonenumber = true;
        }
        if (!data.whatsappnumber) {
            valid = false;
            tempError.whatsappnumber = true;
        }
        if (!data.emailid) {
            valid = false;
            tempError.emailid = true;
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
                            <Link to="/areacommitteemanagementtable">
                                <ArrowBackIcon sx={{ fontSize: 30 }} style={{ color: "#3b4a54" }} />
                            </Link>
                        </Grid>
                        <Grid item xs={12} md={11} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Typography sx={{ fontSize: 30, fontWeight: "bold", color: "#3b4a54" }} align="center" gutterBottom>
                                AREA COMMITTEE MANAGEMENT FORM
                            </Typography>
                        </Grid>
                    </Grid>

                    <form autoComplete="auto">
                        <Grid container spacing={2} marginTop={2}>
                            <Grid item xs={12} md={6}>
                                <Card style={{ borderTop: "2px solid #3b4a54", borderRadius: "15px", marginTop: "2px", alignItems: "stretch", minHeight: "50%" }} sx={{ minWidth: "100%" }}>
                                    <CardContent>
                                        <Grid container spacing={2} >
                                            <Grid item xs={12} md={4}>
                                                <TextField label="Area Name" fullWidth variant="outlined" size='small' helperText={error.selectarea ? "Please enter the Area Name" : " "} value={data.selectarea} onChange={(e) => handleChange(e, 'username')} />
                                            </Grid>

                                            <Grid item xs={12} md={4}>
                                                <FormControl fullWidth variant="outlined" size="small" >
                                                    <InputLabel id="district-select-label" >
                                                        District
                                                    </InputLabel>
                                                    <Select
                                                        labelId="district-select-label"
                                                        id="district-select"
                                                        value={data.district} onChange={(e) => handleChange(e, 'district')}
                                                        label="District"

                                                    >
                                                        <MenuItem value=""> <em>None</em> </MenuItem>
                                                        {districts.map((option) => (
                                                            <MenuItem key={option.id} value={option.id}>{option.district}</MenuItem>
                                                        ))}
                                                    </Select>
                                                </FormControl>
                                                {error.district && <FormHelperText >
                                                    Please enter the Districts
                                                </FormHelperText>}
                                            </Grid>

                                            <Grid item xs={12} md={4}>
                                                <TextField label="Username" fullWidth variant="outlined" size='small' helperText={error.username ? "Please enter the Username" : " "} value={data.username} onChange={(e) => handleChange(e, 'username')} />
                                            </Grid>

                                            <Grid item xs={12} md={4}>
                                                <TextField label="Email" type="email" fullWidth variant="outlined" size='small' helperText={error.email ? "Please enter the email" : " "} value={data.email} onChange={(e) => handleChange(e, 'email')} />
                                            </Grid>

                                            <Grid item xs={12} md={12} style={{ display: "flex", flexDirection: "row-reverse", marginTop: 20 }}>
                                                <Button variant="contained" onClick={handleClickOpen} style={{ backgroundColor: "#194d33" }}>
                                                    Submit
                                                </Button>
                                                <Dialog
                                                    open={open}
                                                    onClose={handleClose}
                                                    aria-labelledby="alert-dialog-title"
                                                    aria-describedby="alert-dialog-description"
                                                >
                                                    <DialogContent>
                                                        <DialogContentText id="alert-dialog-description">
                                                            Are you sure want to submit this form ?
                                                        </DialogContentText>
                                                    </DialogContent>
                                                    <DialogActions>
                                                        <Button variant="outlined" color="error" onClick={handleClose}> Cancel </Button>
                                                        <Button onClick={submiting} autoFocus variant="contained" style={{ backgroundColor: "#194d33" }}>
                                                            Submit
                                                        </Button>
                                                    </DialogActions>
                                                </Dialog>

                                                <Snackbar open={opensnackbar} autoHideDuration={6000} onClose={() => setOpensnackbar(false)} anchorOrigin={{ vertical: "top", horizontal: "right" }}>
                                                    <Alert onClose={handleClosesnackbar} severity="success" variant="filled" sx={{ width: '100%' }}>
                                                        Saved Successfully
                                                    </Alert>
                                                </Snackbar>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <Card style={{ borderTop: "2px solid #3b4a54", borderRadius: "15px", marginTop: "2px", alignItems: "stretch", minHeight: "50%" }} sx={{ minWidth: "100%" }}>
                                    <CardContent>
                                        <Grid container spacing={2} >
                                            <Grid item xs={12} md={4}>
                                                <TextField label="First Name" fullWidth variant="outlined" size='small' helperText={error.firstname ? "Please enter the FirstName" : " "} value={data.firstname} onChange={(e) => handleChange(e, 'firstname')} />
                                            </Grid>

                                            <Grid item xs={12} md={4}>
                                                <TextField label="Last Name" fullWidth variant="outlined" size='small' helperText={error.lastname ? "Please enter the Last Name" : " "} value={data.lastname} onChange={(e) => handleChange(e, 'lastname')} />
                                            </Grid>

                                            <Grid item xs={12} md={4}>
                                                <FormControl fullWidth size="small" variant="outlined" >
                                                    <InputLabel id="gender-select-standard-label">
                                                        Gender
                                                    </InputLabel>
                                                    <Select
                                                        labelId="gender-select-standard-label"
                                                        id="gender-select-standard"
                                                        value={data.gender} onChange={(e) => handleChange(e, 'gender')}
                                                        label="Gender"
                                                        helperText={error.gender ? " Please selct the Gender" : " "}
                                                    >
                                                        <MenuItem value=""> <em>None</em> </MenuItem>
                                                        <MenuItem value={"Male"}>  Male  </MenuItem>
                                                        <MenuItem value={"Female"}>  Female  </MenuItem>
                                                        <MenuItem value={"Other"}>  Other </MenuItem>
                                                    </Select>
                                                </FormControl>
                                                {error.gender && <FormHelperText >
                                                    Please enter the Gender
                                                </FormHelperText>}
                                            </Grid>

                                            <Grid item xs={12} md={4}>
                                                <TextField label="Date of Birth" focused type="date" fullWidth variant="outlined" size='small' helperText={error.dateofbirth ? "Please enter the Date of Birth" : " "} value={data.dateofbirth} onChange={(e) => handleChange(e, 'dateofbirth')} />
                                            </Grid>

                                            <Grid item xs={12} md={4}>
                                                <TextField label="Phone Number" type="number" fullWidth variant="outlined" size='small' helperText={error.phonenumber ? "Please enter the Phone Numeber" : " "} value={data.phonenumber} onChange={(e) => handleChange(e, 'phonenumber')} />
                                            </Grid>

                                            <Grid item xs={12} md={6}>
                                                <FormControl>
                                                    <FormLabel id="demo-radio-buttons-group-label">Is it the WhatsApp number?</FormLabel>
                                                    <RadioGroup
                                                        aria-labelledby="demo-radio-buttons-group-label"
                                                        defaultValue="female"
                                                        name="radio-buttons-group"
                                                        value={checked}
                                                        onChange={(e) => handleCheckChange(e)}
                                                        row
                                                    >
                                                        <FormControlLabel value={"yes"} control={<Radio />} label="Yes" />
                                                        <FormControlLabel value={"no"} control={<Radio />} label="No" />
                                                    </RadioGroup>
                                                </FormControl>
                                            </Grid>

                                            <Grid item xs={12} md={6}>
                                                <TextField focused label="WhatsApp Number" type="number" fullWidth variant="outlined" size="small" helperText={error.whatsappnumber ? "Please enter the WhatsApp Number" : " "} value={data.whatsappnumber} onChange={(e) => handleChange(e, 'whatsappnumber')} />
                                            </Grid>

                                            <Grid item xs={12} md={12}>
                                                <TextField label="Email Id" type="number" fullWidth variant="outlined" size='small' helperText={error.emailid ? "Please enter the Email Id" : " "} value={data.emailid} onChange={(e) => handleChange(e, 'emailid')} />
                                            </Grid>

                                            <Grid item xs={12} md={12} style={{ display: "flex", flexDirection: "row-reverse", marginTop: 20 }}>
                                                <Button variant="contained" onClick={handleClickOpen} style={{ backgroundColor: "#194d33" }}>
                                                    Submit
                                                </Button>
                                                <Dialog
                                                    open={open}
                                                    onClose={handleClose}
                                                    aria-labelledby="alert-dialog-title"
                                                    aria-describedby="alert-dialog-description"
                                                >
                                                    <DialogContent>
                                                        <DialogContentText id="alert-dialog-description">
                                                            Are you sure want to submit this form ?
                                                        </DialogContentText>
                                                    </DialogContent>
                                                    <DialogActions>
                                                        <Button variant="outlined" color="error" onClick={handleClose}> Cancel </Button>
                                                        <Button onClick={submit} autoFocus variant="contained" style={{ backgroundColor: "#194d33" }}>
                                                            Submit
                                                        </Button>
                                                    </DialogActions>
                                                </Dialog>

                                                <Snackbar open={opensnackbar} autoHideDuration={6000} onClose={() => setOpensnackbar(false)} anchorOrigin={{ vertical: "top", horizontal: "right" }}>
                                                    <Alert onClose={handleClosesnackbar} severity="success" variant="filled" sx={{ width: '100%' }}>
                                                        Saved Successfully
                                                    </Alert>
                                                </Snackbar>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </Grid>

                        </Grid>
                    </form>
                </CardContent>
            </Card>
        </>
    );
}
