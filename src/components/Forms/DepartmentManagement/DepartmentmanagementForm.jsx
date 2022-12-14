import React, { useState } from 'react';
import { Card, Button, Typography, CardContent, Grid, Dialog, DialogActions, DialogContent, DialogContentText, TextField, Snackbar, Alert, MenuItem, FormControl, InputLabel, Select, FormHelperText } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function DepartmentmanagementForm() {
    const [data, setData] = useState({});
    const [error, setError] = useState({});
    const [open, setOpen] = React.useState(false);
    const [missing, setMissing] = useState(false);
    const [opensnackbar, setOpensnackbar] = useState(false);

    const handleClickOpen = () => { setOpen(true); };
    const handleClose = () => setOpen(false);

    const handleChange = (e, key) => {
        setData({ ...data, [key]: e.target.value })
    }

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
        if (!data.institution) {
            valid = false;
            tempError.institution = true;
        }
        if (!data.departmentname) {
            valid = false;
            tempError.departmentname = true;
        }
        if (!data.ministry) {
            valid = false;
            tempError.ministry = true;
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
                            <Link to="/departmentmanagementtable">
                                <ArrowBackIcon sx={{ fontSize: 30 }} style={{ color: "#3b4a54" }} />
                            </Link>
                        </Grid>
                        <Grid item xs={12} md={11} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Typography sx={{ fontSize: 30, fontWeight: "bold", color: "#3b4a54" }} align="center" gutterBottom>
                                DEPARTMENT MANAGEMENT FORM
                            </Typography>
                        </Grid>
                    </Grid>

                    <form autoComplete="auto">
                        <Grid container spacing={2} marginTop={2}>

                            <Grid item xs={12} md={4}>
                                <FormControl fullWidth size="small" variant="outlined" >
                                    <InputLabel id="institution-select-standard-label">
                                        Type of Institution
                                    </InputLabel>
                                    <Select
                                        labelId="institution-select-standard-label"
                                        id="institution-select-standard"
                                        value={data.institution} onChange={(e) => handleChange(e, 'institution')}
                                        label="Type of Institution"
                                        helperText={error.institution ? " Please selct the institution" : " "}
                                    >
                                        <MenuItem value=""> <em>None</em> </MenuItem>
                                        <MenuItem value={"State Government"}>  State Government  </MenuItem>
                                        <MenuItem value={"Agencies"}>  Agencies  </MenuItem>
                                        <MenuItem value={"Judiciary"}>  Judiciary </MenuItem>
                                        <MenuItem value={"PSU"}>  PSU </MenuItem>
                                        <MenuItem value={"Educational Institutions"}>  Educational Institutions </MenuItem>
                                        <MenuItem value={"Engineering Colleges"}>  Engineering Colleges </MenuItem>
                                        <MenuItem value={"Medical Colleges"}>  Medical Colleges </MenuItem>
                                        <MenuItem value={"Arts & Science Colleges"}>  Arts & Science Colleges </MenuItem>
                                        <MenuItem value={"Cooperatives"}>  Cooperatives </MenuItem>
                                        <MenuItem value={"Welfare Board"}>  Welfare Board </MenuItem>
                                        <MenuItem value={"Public"}>  Public </MenuItem>
                                        <MenuItem value={"Pensioners"}>  Pensioners </MenuItem>
                                        <MenuItem value={"Other"}>  Other </MenuItem>
                                    </Select>
                                </FormControl>
                                {error.institution && <FormHelperText >
                                    Please enter the institution
                                </FormHelperText>}
                            </Grid>

                            <Grid item xs={12} md={4}>
                                <TextField label="Department Name" fullWidth variant="outlined" size='small' helperText={error.departmentname ? "Please enter the Department Name" : " "} value={data.departmentname} onChange={(e) => handleChange(e, 'departmentname')} />
                            </Grid>

                            <Grid item xs={12} md={4}>
                                <TextField label="Ministry" fullWidth variant="outlined" size='small' helperText={error.ministry ? "Please enter the Ministry" : " "} value={data.ministry} onChange={(e) => handleChange(e, 'ministry')} />
                            </Grid>

                            <Grid item xs={12} md={4}>
                                <TextField label="Email Id" type="email" fullWidth variant="outlined" size='small' helperText={error.emailid ? "Please enter the Email Id" : " "} value={data.emailid} onChange={(e) => handleChange(e, 'emailid')} />
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
                    </form>
                </CardContent>
            </Card>
        </>
    );
}
