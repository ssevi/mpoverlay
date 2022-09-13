import React, { useState } from 'react';
import { Card, Button, Typography, CardContent, Grid, Dialog, DialogActions, DialogContent, DialogContentText, TextField, Select, FormHelperText, InputLabel, FormControl, Snackbar, Alert, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function OfficemanagementForm() {
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
        if (!data.department) {
            valid = false;
            tempError.department = true;
        }
        if (!data.officename) {
            valid = false;
            tempError.officename = true;
        }
        if (!data.officetype) {
            valid = false;
            tempError.officetype = true;
        }
        if (!data.emailid) {
            valid = false;
            tempError.emailid = true;
        }
        if (!data.address) {
            valid = false;
            tempError.address = true;
        }
        if (!data.employeesno) {
            valid = false;
            tempError.employeesno = true;
        }
        if (!data.designationdetails) {
            valid = false;
            tempError.designationdetails = true;
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
                            <Link to="/officemanagementtable">
                                <ArrowBackIcon sx={{ fontSize: 30 }} style={{ color: "#3b4a54" }} />
                            </Link>
                        </Grid>
                        <Grid item xs={12} md={11} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Typography sx={{ fontSize: 30, fontWeight: "bold", color: "#3b4a54" }} align="center" gutterBottom>
                                OFFICE MANAGEMENT FORM
                            </Typography>
                        </Grid>
                    </Grid>

                    <form autoComplete="auto">
                        <Grid container spacing={2} marginTop={2}>
                            <Grid item xs={12} md={6}>
                                <Card style={{ borderTop: "2px solid #3b4a54", borderRadius: "15px", marginTop: "2px", alignItems: "stretch", minHeight: "50%" }} sx={{ minWidth: "100%" }}>
                                    <CardContent>
                                        <Grid container spacing={2} >
                                            <Grid item xs={12} md={6}>
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
                                                    Please enter the Institution
                                                </FormHelperText>}
                                            </Grid>

                                            <Grid item xs={12} md={6}>
                                                <FormControl fullWidth variant="outlined" size="small" >
                                                    <InputLabel id="department-select-standard-label">Department</InputLabel>
                                                    <Select
                                                        labelId="department-select-standard-label"
                                                        id="department-select-standard"
                                                        value={data.department} onChange={(e) => handleChange(e, 'department')}
                                                        label="Department"
                                                    >
                                                        <MenuItem value="">
                                                            <em>None</em>
                                                        </MenuItem>
                                                        <MenuItem value={"Animal Husbandry"}>Animal Husbandry</MenuItem>
                                                        <MenuItem value={"Government Secretariat"}>Government Secretariat</MenuItem>
                                                        <MenuItem value={"Agriculture Department"}>Agriculture Department</MenuItem>
                                                        <MenuItem value={"Coastal Shipping and inland Navigation Department"}>Coastal Shipping and inland Navigation Department</MenuItem>
                                                        <MenuItem value={"Co-operation Department"}>Co-operation Department</MenuItem>
                                                        <MenuItem value={"Cultural Affairs Department"}>Cultural Affairs Department</MenuItem>
                                                        <MenuItem value={"Finance Department"}>Finance Department</MenuItem>
                                                        <MenuItem value={"Food and Civil Supplies Department"}>Food and Civil Supplies Department</MenuItem>
                                                        <MenuItem value={"Forest and Wild life Department"}>Forest and Wild life Department</MenuItem>
                                                        <MenuItem value={"General Administration Department"}>General Administration Department</MenuItem>
                                                        <MenuItem value={"General Education Department"}>General Education Department</MenuItem>
                                                        <MenuItem value={"Health & Family Welfare Department"}>Health & Family Welfare Department</MenuItem>
                                                        <MenuItem value={"Higher Education Department"}>Higher Education Department</MenuItem>
                                                        <MenuItem value={"Home Department"}>Home Department</MenuItem>
                                                        <MenuItem value={"Housing Department"}>Housing Department</MenuItem>
                                                        <MenuItem value={"Industries Department"}>Industries Department</MenuItem>
                                                        <MenuItem value={"Information Technology Department"}>Information Technology Department</MenuItem>
                                                        <MenuItem value={"Labour & Rehabilitation Department"}>Labour & Rehabilitation Department</MenuItem>
                                                        <MenuItem value={"Law Department"}>Law Department</MenuItem>
                                                        <MenuItem value={"Local Self Department"}>Local Self Department</MenuItem>
                                                        <MenuItem value={"Non- Resident Keralites Affairs Department"}>Non- Resident Keralites Affairs Department</MenuItem>
                                                        <MenuItem value={"Parliamentary Affairs Department"}>Parliamentary Affairs Department</MenuItem>
                                                        <MenuItem value={"Personnel & Administrative Reforms Department"}>Personnel & Administrative Reforms Department</MenuItem>
                                                        <MenuItem value={"Planning & Economic Affairs Department"}>Planning & Economic Affairs Department</MenuItem>
                                                        <MenuItem value={"Power Department"}>Power Department</MenuItem>
                                                        <MenuItem value={"Public Works Department"}>Public Works Department</MenuItem>
                                                        <MenuItem value={"Revenue Department"}>Revenue Department</MenuItem>
                                                        <MenuItem value={"Scheduled Caste Development Department"}>Scheduled Caste Development Department</MenuItem>
                                                        <MenuItem value={"Scheduled Tribe Development Department"}>Scheduled Tribe Development Department</MenuItem>
                                                        <MenuItem value={"Science Technology & Environment Department"}>Science Technology & Environment Department</MenuItem>
                                                        <MenuItem value={"Social Welfare Department"}>Social Welfare Department</MenuItem>
                                                        <MenuItem value={"Stores Purchase Department"}>Stores Purchase Department</MenuItem>
                                                        <MenuItem value={"Taxes Department"}>Taxes Department</MenuItem>
                                                        <MenuItem value={"Transport Department"}>Transport Department</MenuItem>
                                                        <MenuItem value={"Vigilance Department"}>Vigilance Department</MenuItem>
                                                        <MenuItem value={"Water Resources Department"}>Water Resources Department</MenuItem>
                                                    </Select>
                                                    {error.department && <FormHelperText>Please select the Department </FormHelperText>}
                                                </FormControl>
                                            </Grid>

                                            <Grid item xs={12} md={6}>
                                                <TextField label="Office Name" fullWidth variant="outlined" size='small' helperText={error.officename ? "Please enter the Office Name" : " "} value={data.officename} onChange={(e) => handleChange(e, 'officename')} />
                                            </Grid>

                                            <Grid item xs={12} md={6}>
                                                <TextField label="Type of Office" fullWidth variant="outlined" size='small' helperText={error.officetype ? "Please enter the Type of Office" : " "} value={data.officetype} onChange={(e) => handleChange(e, 'officetype')} />
                                            </Grid>

                                            <Grid item xs={12} md={6}>
                                                <TextField label="Email Id" type="email" fullWidth variant="outlined" size='small' helperText={error.emailid ? "Please enter the Email Id" : " "} value={data.emailid} onChange={(e) => handleChange(e, 'emailid')} />
                                            </Grid>

                                            <Grid item xs={12} md={6}>
                                                <TextField label="Phone Number" type="number" fullWidth variant="outlined" size='small' helperText={error.phonenumber ? "Please enter the Phone Number" : " "} value={data.phonenumber} onChange={(e) => handleChange(e, 'phonenumber')} />
                                            </Grid>


                                            <Grid item xs={12} md={6}>
                                                <TextField label="Address" fullWidth variant="outlined" size='small' helperText={error.address ? "Please enter the Address" : " "} value={data.address} onChange={(e) => handleChange(e, 'address')} />
                                            </Grid>

                                            {/* <Grid item xs={12} md={12} style={{ display: "flex", flexDirection: "row-reverse", marginTop: 20 }}>
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
                                            </Grid> */}
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </Grid>


                            <Grid item xs={12} md={6}>
                                <Card style={{ borderTop: "2px solid #3b4a54", borderRadius: "15px", marginTop: "2px", alignItems: "stretch", minHeight: "50%" }} sx={{ minWidth: "100%" }}>
                                    <CardContent>
                                        <Grid container spacing={2} >
                                            <Grid item xs={12} md={12} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                                <Typography sx={{ fontSize: 30, fontWeight: "bold", color: "#3b4a54" }} align="center" gutterBottom>
                                                    STAFF DETAILS
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12} md={6}>
                                                <TextField label="Number of Employees" fullWidth variant="outlined" size='small' helperText={error.employeesno ? "Please enter the Number of Employees" : " "} value={data.employeesno} onChange={(e) => handleChange(e, 'employeesno')} />
                                            </Grid>

                                            <Grid item xs={12} md={6}>
                                                <FormControl fullWidth size="small" variant="outlined" >
                                                    <InputLabel id=" designationdetails-select-standard-label">
                                                        Designation Details
                                                    </InputLabel>
                                                    <Select
                                                        labelId=" designationdetails-select-standard-label"
                                                        id=" designationdetails-select-standard"
                                                        value={data.designationdetails} onChange={(e) => handleChange(e, ' designationdetails')}
                                                        label=" Designation Details"
                                                        helperText={error.designationdetails ? " Please selct the  designationdetails" : " "}
                                                    >
                                                        <MenuItem value=""> <em>None</em> </MenuItem>
                                                        <MenuItem value={"Gazetted"}>  Gazetted  </MenuItem>
                                                        <MenuItem value={"Non-Gazetted"}>  Non-Gazetted  </MenuItem>
                                                        <MenuItem value={"Other"}>  Other </MenuItem>
                                                    </Select>
                                                </FormControl>
                                                {error.designationdetails && <FormHelperText >
                                                    Please enter the  Designation Details
                                                </FormHelperText>}
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
