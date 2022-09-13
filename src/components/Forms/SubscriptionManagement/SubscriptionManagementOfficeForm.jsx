import React, { useEffect, useState } from 'react';
import { Card, Button, Typography, CardContent, Grid, Select, FormControl, MenuItem, InputLabel, FormHelperText } from "@mui/material";
import { Dialog, DialogActions, DialogContent, DialogContentText, TextField, RadioGroup, FormControlLabel, FormLabel, Radio, } from "@mui/material";

export default function SubscriptionManagementOfficeForm({ data, setData, submit, error, setError, handleChange, firstname, open, setOpen, handleClickOpen, handleClose }, props) {
    const [checked, setChecked] = useState();
    const [permanent, setPermanent] = useState();
    const [dispatch, setDispatch] = useState();

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

    return (
        <>
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
                                <TextField label="First Name" fullWidth variant="outlined" size='small' helperText={error.firstname ? "Please enter the FirstName" : " "} value={firstname} onChange={(e) => handleChange(e, 'firstname')} />
                            </Grid>

                            <Grid item xs={12} md={4}>
                                <TextField label="Last Name" fullWidth variant="outlined" size='small' helperText={error.lastname ? "Please enter the Last Name" : " "} value={props.lastname} onChange={(e) => handleChange(e, 'lastname')} />
                            </Grid>

                            <Grid item xs={12} md={4}>
                                <FormControl fullWidth size="small" variant="outlined" >
                                    <InputLabel id="gender-select-standard-label">
                                        Gender
                                    </InputLabel>
                                    <Select
                                        labelId="gender-select-standard-label"
                                        id="gender-select-standard"
                                        value={props.gender} onChange={(e) => handleChange(e, 'gender')}
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
                                <TextField label="Date of Birth" focused type="date" fullWidth variant="outlined" size='small' helperText={error.dateofbirth ? "Please enter the Date of Birth" : " "} value={props.dateofbirth} onChange={(e) => handleChange(e, 'dateofbirth')} />
                            </Grid>

                            <Grid item xs={12} md={4}>
                                <TextField label="Aadhaar Number" type="number" fullWidth variant="outlined" size='small' helperText={error.aadhaarnumber ? "Please enter the Aadhaar Number" : " "} value={props.aadhaarnumber} onChange={(e) => handleChange(e, 'aadhaarnumber')} />
                            </Grid>

                            <Grid item xs={12} md={4}>
                                <TextField label="Phone Number" type="number" fullWidth variant="outlined" size='small' helperText={error.phonenumber ? "Please enter the Phone Numeber" : " "} value={props.phonenumber} onChange={(e) => handleChange(e, 'phonenumber')} />
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
                                <TextField focused label="WhatsApp Number" type="number" fullWidth variant="outlined" size="small" helperText={error.whatsappnumber ? "Please enter the WhatsApp Number" : " "} value={props.whatsappnumber} onChange={(e) => handleChange(e, 'whatsappnumber')} />
                            </Grid>

                            <Grid item xs={12} md={4}>
                                <TextField label="Email Id" type="email" fullWidth variant="outlined" size='small' helperText={error.emailid ? "Please enter the Email Id" : " "} value={props.emailid} onChange={(e) => handleChange(e, 'emailid')} />
                            </Grid>

                            <Grid item xs={12} md={8}>
                                <TextField label="Present Address" fullWidth variant="outlined" size='small' helperText={error.presentaddress ? "Please enter the Present Address" : " "} value={props.presentaddress} onChange={(e) => handleChange(e, 'presentaddress')} />
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
                                <TextField label="Communication Address" focused fullWidth variant="outlined" size='small' helperText={error.communicationaddress ? "Please enter the Communication Address" : " "} value={props.communicationaddress} onChange={(e) => handleChange(e, 'communicationaddress')} />
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <TextField label="Dispatch Address" focused fullWidth variant="outlined" size='small' helperText={error.dispatchaddress ? "Please enter the Dispatch Address" : " "} value={props.dispatchaddress} onChange={(e) => handleChange(e, 'dispatchaddress')} />
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <TextField label="Date of entry in Service" type="date" focused fullWidth variant="outlined" size='small' helperText={error.dateentryservice ? "Please enter the Date of entry in Service" : " "} value={props.dateentryservice} onChange={(e) => handleChange(e, 'dateentryservice')} />
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <FormControl fullWidth size="small" variant="outlined" >
                                    <InputLabel id="pensionscheme-select-standard-label">
                                        Pension Scheme
                                    </InputLabel>
                                    <Select
                                        labelId="pensionscheme-select-standard-label"
                                        id="pensionscheme-select-standard"
                                        value={props.pensionscheme} onChange={(e) => handleChange(e, 'pensionscheme')}
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
                                <TextField label="Date of Retirement" type="date" focused fullWidth variant="outlined" size='small' helperText={error.dateofretirement ? "Please enter the Date of Retirement" : " "} value={props.dateofretirement} onChange={(e) => handleChange(e, 'dateofretirement')} />
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <TextField label="Pension Number" type="number" fullWidth variant="outlined" size='small' helperText={error.pensionnumber ? "Please enter the Pension Number" : " "} value={props.pensionnumber} onChange={(e) => handleChange(e, 'pensionnumber')} />
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

                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </form>
        </>
    );
}
