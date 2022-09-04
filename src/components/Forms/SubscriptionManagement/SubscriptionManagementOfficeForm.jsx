import React, { useEffect, useState } from 'react';
import { Card, Button, Typography, CardContent, Grid, Select, FormControl, MenuItem, InputLabel, FormHelperText } from "@mui/material";
import { Dialog, DialogActions, DialogContent, DialogContentText, TextField, Snackbar, Alert, RadioGroup, FormControlLabel, FormLabel, Radio, } from "@mui/material";

export default function SubscriptionManagementOfficeForm() {
    const [data, setData] = useState({});
    const [error, setError] = useState({});
    const [open, setOpen] = React.useState(false);
    const [missing, setMissing] = useState(false);
    const [opensnackbar, setOpensnackbar] = useState(false);
    const [checked, setChecked] = useState();
    const [permanent, setPermanent] = useState();
    const [dispatch, setDispatch] = useState();


    const handleClickOpen = () => { setOpen(true); };
    const handleClose = () => setOpen(false);

    const handleChange = (e, key) => {
        setData({ ...data, [key]: e.target.value })
    }

    const handleCheckChange = (event) => {
        setChecked(event.target.value);
    };

    const handlePermanentChange = (event) => {
        setPermanent(event.target.value);
    };

    const handleDispatchChange = (event) => {
        setDispatch(event.target.value);
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

    useEffect(() => {
        if (permanent === "yes") {
            setData({
                ...data,
                communicationaddress: data.presentaddress
            })
        } else if (permanent === "no") {
            setData({
                ...data,
                communicationaddress: ""
            })
        }
    }, [permanent])

    useEffect(() => {
        if (dispatch === "yes") {
            setData({
                ...data,
                dispatchaddress: data.presentaddress
            })
        } else if (dispatch === "no") {
            setData({
                ...data,
                dispatchaddress: ""
            })
        }
    }, [dispatch])

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
        if (!data.aadhaarnumber) {
            valid = false;
            tempError.aadhaarnumber = true;
        }
        if (!data.emailid) {
            valid = false;
            tempError.emailid = true;
        }
        if (!data.presentaddress) {
            valid = false;
            tempError.presentaddress = true;
        }
        if (!data.communicationaddress) {
            valid = false;
            tempError.communicationaddress = true;
        }
        if (!data.dispatchaddress) {
            valid = false;
            tempError.dispatchaddress = true;
        }
        if (!data.dateentryservice) {
            valid = false;
            tempError.dateentryservice = true;
        }
        if (!data.pensionscheme) {
            valid = false;
            tempError.pensionscheme = true;
        }
        if (!data.dateofretirement) {
            valid = false;
            tempError.dateofretirement = true;
        }
        if (!data.pensionnumber) {
            valid = false;
            tempError.pensionnumber = true;
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

            <form autoComplete="auto">
                <Card style={{ borderTop: "2px solid #3b4a54", borderRadius: "15px", marginTop: "2px", alignItems: "stretch" }} sx={{ width: "100%", height: 450, overflowY: 'scroll' }}>
                    <CardContent>
                        <Grid container spacing={2} >

                            <Grid item xs={12} md={12} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <Typography sx={{ fontSize: 24, fontWeight: "bold", color: "#3b4a54" }} align="center" gutterBottom>
                                    OFFICIAL DETAILS
                                </Typography>
                            </Grid>

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
                                <TextField label="Aadhaar Number" type="number" fullWidth variant="outlined" size='small' helperText={error.aadhaarnumber ? "Please enter the Aadhaar Number" : " "} value={data.aadhaarnumber} onChange={(e) => handleChange(e, 'aadhaarnumber')} />
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

                            <Grid item xs={12} md={4}>
                                <TextField label="Email Id" type="number" fullWidth variant="outlined" size='small' helperText={error.emailid ? "Please enter the Email Id" : " "} value={data.emailid} onChange={(e) => handleChange(e, 'emailid')} />
                            </Grid>

                            <Grid item xs={12} md={8}>
                                <TextField label="Present Address" fullWidth variant="outlined" size='small' helperText={error.presentaddress ? "Please enter the Present Address" : " "} value={data.presentaddress} onChange={(e) => handleChange(e, 'presentaddress')} />
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <FormControl>
                                    <FormLabel id="demo-radio-buttons-group-label">Permanent address is same as Present Address ?</FormLabel>
                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        name="radio-buttons-group"
                                        value={permanent}
                                        onChange={(e) => handlePermanentChange(e)}
                                        row
                                    >
                                        <FormControlLabel value={"yes"} control={<Radio />} label="Yes" />
                                        <FormControlLabel value={"no"} control={<Radio />} label="No" />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <FormControl>
                                    <FormLabel id="demo-radio-buttons-group-label">Dispatch address is same as Present Address ?</FormLabel>
                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        name="radio-buttons-group"
                                        value={dispatch}
                                        onChange={(e) => handleDispatchChange(e)}
                                        row
                                    >
                                        <FormControlLabel value={"yes"} control={<Radio />} label="Yes" />
                                        <FormControlLabel value={"no"} control={<Radio />} label="No" />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField label="Communication Address" focused fullWidth variant="outlined" size='small' helperText={error.communicationaddress ? "Please enter the Communication Address" : " "} value={data.communicationaddress} onChange={(e) => handleChange(e, 'communicationaddress')} />
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <TextField label="Dispatch Address" focused fullWidth variant="outlined" size='small' helperText={error.dispatchaddress ? "Please enter the Dispatch Address" : " "} value={data.dispatchaddress} onChange={(e) => handleChange(e, 'dispatchaddress')} />
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <TextField label="Date of entry in Service" type="date" focused fullWidth variant="outlined" size='small' helperText={error.dateentryservice ? "Please enter the Date of entry in Service" : " "} value={data.dateentryservice} onChange={(e) => handleChange(e, 'dateentryservice')} />
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <FormControl fullWidth size="small" variant="outlined" >
                                    <InputLabel id="pensionscheme-select-standard-label">
                                        Pension Scheme
                                    </InputLabel>
                                    <Select
                                        labelId="pensionscheme-select-standard-label"
                                        id="pensionscheme-select-standard"
                                        value={data.pensionscheme} onChange={(e) => handleChange(e, 'pensionscheme')}
                                        label="Pension Scheme"
                                        helperText={error.pensionscheme ? " Please selct the Pension Scheme" : " "}
                                    >
                                        <MenuItem value=""> <em>None</em> </MenuItem>
                                        <MenuItem value={"NPS"}>  NPS  </MenuItem>
                                        <MenuItem value={"Statutory"}>  Statutory  </MenuItem>
                                    </Select>
                                </FormControl>
                                {error.pensionscheme && <FormHelperText >
                                    Please enter the pensionscheme
                                </FormHelperText>}
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <TextField label="Date of Retirement" type="date" focused fullWidth variant="outlined" size='small' helperText={error.dateofretirement ? "Please enter the Date of Retirement" : " "} value={data.dateofretirement} onChange={(e) => handleChange(e, 'dateofretirement')} />
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <TextField label="Pension Number" type="number" fullWidth variant="outlined" size='small' helperText={error.pensionnumber ? "Please enter the Pension Number" : " "} value={data.pensionnumber} onChange={(e) => handleChange(e, 'pensionnumber')} />
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
            </form>
        </>
    );
}
