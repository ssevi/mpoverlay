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

export default function SubscriptionManagementForm() {
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
    if (!data.employmenttype) {
      valid = false;
      tempError.employmenttype = true;
    }
    if (!data.department) {
      valid = false;
      tempError.department = true;
    }
    if (!data.office) {
      valid = false;
      tempError.office = true;
    }
    if (!data.officeposition) {
      valid = false;
      tempError.officeposition = true;
    }
    if (!data.district) {
      valid = false;
      tempError.district = true;
    }
    if (!data.location) {
      valid = false;
      tempError.location = true;
    }
    if (!data.pincode) {
      valid = false;
      tempError.pincode = true;
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
    if (!data.aadhaarnumber) {
      valid = false;
      tempError.aadhaarnumber = true;
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
              <Link to="/subscriptionmanagementtable">
                <ArrowBackIcon sx={{ fontSize: 30 }} style={{ color: "#3b4a54" }} />
              </Link>
            </Grid>
            <Grid item xs={12} md={11} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Typography sx={{ fontSize: 30, fontWeight: "bold", color: "#3b4a54" }} align="center" gutterBottom>
                SUBSCRIPTION MANAGEMENT FORM
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
                          <InputLabel id="employmenttype-select-standard-label">
                            Type of Employment
                          </InputLabel>
                          <Select
                            labelId="employmenttype-select-standard-label"
                            id="employmenttype-select-standard"
                            value={data.employmenttype} onChange={(e) => handleChange(e, 'employmenttype')}
                            label="Type of Employment"
                            helperText={error.employmenttype ? " Please selct the Type of Employment" : " "}
                          >
                            <MenuItem value=""> <em>None</em> </MenuItem>
                            <MenuItem value={"Employee"}>  Employee </MenuItem>
                            <MenuItem value={"Pensioner"}> Pensioner </MenuItem>
                            <MenuItem value={"Citizen"}>  Citizen </MenuItem>
                          </Select>
                        </FormControl>
                        {error.employmenttype && <FormHelperText >
                          Please enter the Tdeype of Employment
                        </FormHelperText>}
                      </Grid>

                      <Grid item xs={12} md={6}>
                        {error.department && <FormHelperText style={{ color: "#ff1100" }}>Please select the Department </FormHelperText>}
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
                        </FormControl>
                      </Grid>

                      <Grid item xs={12} md={6}>
                        {error.office && <FormHelperText style={{ color: "#ff1100" }}>Please select the Office </FormHelperText>}
                        <FormControl fullWidth variant="outlined" size="small" >
                          <InputLabel id="office-select-standard-label">Select Office</InputLabel>
                          <Select
                            labelId="office-select-standard-label"
                            id="office-select-standard"
                            value={data.office} onChange={(e) => handleChange(e, 'office')}
                            label="Select Office"
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={"Office 1"}>Office 1</MenuItem>
                            <MenuItem value={"Office 2"}>Office 2</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>

                      <Grid item xs={12} md={6}>
                        {error.officeposition && <FormHelperText style={{ color: "#ff1100" }}>Please enter the Office Position </FormHelperText>}
                        <TextField label="Enter Office Position" fullWidth variant="outlined" size="small" value={data.officeposition} onChange={(e) => handleChange(e, 'officeposition')} />
                      </Grid>

                      <Grid item xs={12} md={6}>
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

                      <Grid item xs={12} md={6}>
                        {error.location && <FormHelperText style={{ color: "#ff1100" }}>Please enter the Enter Location </FormHelperText>}
                        <TextField label="Enter Location" fullWidth variant="outlined" size="small" value={data.location} onChange={(e) => handleChange(e, 'location')} />
                      </Grid>

                      <Grid item xs={12} md={6}>
                        {error.pincode && <FormHelperText style={{ color: "#ff1100" }}>Please enter the Enter Pincode </FormHelperText>}
                        <TextField label="Enter Pincode" fullWidth variant="outlined" size="small" value={data.pincode} onChange={(e) => handleChange(e, 'pincode')} />
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

            </Grid>
          </form>
        </CardContent>
      </Card>
    </>
  );
}
