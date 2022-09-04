import React, { useState } from 'react';
import { Card, Button, CardContent, Grid, Select, FormControl, MenuItem, InputLabel, FormHelperText } from "@mui/material";
import { Dialog, DialogActions, DialogContent, DialogContentText, TextField, Snackbar, Alert, Typography } from "@mui/material";

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

export default function SubscriptionManagementLocalForm() {
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
    if (!data.employmenttype) {
      valid = false;
      tempError.employmenttype = true;
    }
    if (!data.department) {
      valid = false;
      tempError.department = true;
    }
    if (!data.localbody) {
      valid = false;
      tempError.localbody = true;
    }
    if (!data.office) {
      valid = false;
      tempError.office = true;
    }
    if (!data.designation) {
      valid = false;
      tempError.designation = true;
    }
    if (!data.subscriptionstart) {
      valid = false;
      tempError.subscriptionstart = true;
    }
    if (!data.subscriptionend) {
      valid = false;
      tempError.subscriptionend = true;
    }
    if (!data.member) {
      valid = false;
      tempError.member = true;
    }
    if (!data.district) {
      valid = false;
      tempError.district = true;
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
        <Card style={{ borderTop: "2px solid #3b4a54", borderRadius: "15px", marginTop: "2px", alignItems: "stretch", minHeight: "50%" }} sx={{ minWidth: "100%" }}>
          <CardContent>
            <Grid container spacing={2} >

              <Grid item xs={12} md={12} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Typography sx={{ fontSize: 24, fontWeight: "bold", color: "#3b4a54" }} align="center" gutterBottom>
                  LOCAL BODY DETAILS
                </Typography>
              </Grid>

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
                  Please enter the Type of Employment
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
                </FormControl>
                {error.department && <FormHelperText >
                  Please enter the Department
                </FormHelperText>}
              </Grid>

              <Grid item xs={12} md={6}>
                <FormControl fullWidth variant="outlined" size="small" >
                  <InputLabel id="localbody-select-standard-label">Type of Local Body</InputLabel>
                  <Select
                    labelId="localbody-select-standard-label"
                    id="localbody-select-standard"
                    value={data.localbody} onChange={(e) => handleChange(e, 'localbody')}
                    label="Type of Local Body"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"Panchayat"}> Panchayat </MenuItem>
                    <MenuItem value={"Municipality"}> Municipality</MenuItem>
                    <MenuItem value={"Coorporation"}> Coorporation</MenuItem>
                  </Select>
                </FormControl>
                {error.localbody && <FormHelperText >
                  Please enter the Local Body
                </FormHelperText>}
              </Grid>

              <Grid item xs={12} md={6}>
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
                {error.office && <FormHelperText >
                  Please enter the Office
                </FormHelperText>}
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField label="Designation" fullWidth variant="outlined" size="small" helperText={error.designation ? "Please enter the Designation" : " "} value={data.designation} onChange={(e) => handleChange(e, 'designation')} />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField label="Subscription Start Date" fullWidth variant="outlined" size="small" helperText={error.subscriptionstart ? "Please enter the Subscription Start Date" : " "} value={data.subscriptionstart} onChange={(e) => handleChange(e, 'subscriptionstart')} />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField label="Subscription End Date" fullWidth variant="outlined" size="small" helperText={error.subscriptionend ? "Please enter the Subscription End Date" : " "} value={data.subscriptionend} onChange={(e) => handleChange(e, 'subscriptionend')} />
              </Grid>

              <Grid item xs={12} md={6}>
                <FormControl fullWidth size="small" variant="outlined" >
                  <InputLabel id="member-select-standard-label">
                    Member
                  </InputLabel>
                  <Select
                    labelId="member-select-standard-label"
                    id="member-select-standard"
                    value={data.member} onChange={(e) => handleChange(e, 'member')}
                    label="Member"
                    helperText={error.member ? " Please selct the member" : " "}>
                    <MenuItem value=""> <em>None</em> </MenuItem>
                    <MenuItem value={"Yes"}>  Yes  </MenuItem>
                    <MenuItem value={"No"}>  No  </MenuItem>
                  </Select>
                </FormControl>
                {error.member && <FormHelperText >
                  Please enter the Member
                </FormHelperText>}
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
                <TextField label="Enter Pincode" fullWidth variant="outlined" size="small" helperText={error.pincode ? "Please enter the Enter Pincode" : " "} value={data.pincode} onChange={(e) => handleChange(e, 'pincode')} />
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
      </form>
    </>
  );
}
