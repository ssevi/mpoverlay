import React, { useState } from 'react';
import { Card, Typography, CardContent, Grid, Snackbar, Alert } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SubscriptionManagementLocalForm from './SubscriptionManagementLocalForm';
import SubscriptionManagementOfficeForm from './SubscriptionManagementOfficeForm';

export default function SubscriptionManagementForm() {
  const [missing, setMissing] = useState(false);
  const [data, setData] = useState({
    employmenttype: "", department: "", localbody: "", office: "", designation: "", subscriptionstart: "", subscriptionend: "", member: "", district: "", pincode: "", firstname: "",
    lastname: "", gender: "", dateofbirth: "", phonenumber: undefined, whatsappnumber: undefined, aadhaarnumber: undefined, emailid: "", presentaddress: "", communicationaddress: "",
    dispatchaddress: "", dateentryservice: "", pensionscheme: "", dateofretirement: "", pensionnumber: undefined
  });

  const { employmenttype, department, localbody, office, designation, subscriptionstart, subscriptionend, member, district, pincode, firstname, lastname, gender,
    dateofbirth, phonenumber, whatsappnumber, aadhaarnumber, emailid, presentaddress, communicationaddress, dispatchaddress, dateentryservice, pensionscheme, dateofretirement, pensionnumber } = data;
  const [error, setError] = useState({});
  const [opensnackbar, setOpensnackbar] = useState(false);
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => { setOpen(true); };
  const handleClose = () => setOpen(false);

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
    if (!employmenttype) {
      valid = false;
      tempError.employmenttype = true;
    }
    if (!department) {
      valid = false;
      tempError.department = true;
    }
    if (!localbody) {
      valid = false;
      tempError.localbody = true;
    }
    if (!office) {
      valid = false;
      tempError.office = true;
    }
    if (!designation) {
      valid = false;
      tempError.designation = true;
    }
    if (!subscriptionstart) {
      valid = false;
      tempError.subscriptionstart = true;
    }
    if (!subscriptionend) {
      valid = false;
      tempError.subscriptionend = true;
    }
    if (!member) {
      valid = false;
      tempError.member = true;
    }
    if (!district) {
      valid = false;
      tempError.district = true;
    }
    if (!pincode) {
      valid = false;
      tempError.pincode = true;
    }
    if (!firstname) {
      valid = false;
      tempError.firstname = true;
    }
    if (!lastname) {
      valid = false;
      tempError.lastname = true;
    }
    if (!gender) {
      valid = false;
      tempError.gender = true;
    }
    if (!dateofbirth) {
      valid = false;
      tempError.dateofbirth = true;
    }
    if (!phonenumber) {
      valid = false;
      tempError.phonenumber = true;
    }
    if (!whatsappnumber) {
      valid = false;
      tempError.whatsappnumber = true;
    }
    if (!aadhaarnumber) {
      valid = false;
      tempError.aadhaarnumber = true;
    }
    if (!emailid) {
      valid = false;
      tempError.emailid = true;
    }
    if (!presentaddress) {
      valid = false;
      tempError.presentaddress = true;
    }
    if (!communicationaddress) {
      valid = false;
      tempError.communicationaddress = true;
    }
    if (!dispatchaddress) {
      valid = false;
      tempError.dispatchaddress = true;
    }
    if (!dateentryservice) {
      valid = false;
      tempError.dateentryservice = true;
    }
    if (!pensionscheme) {
      valid = false;
      tempError.pensionscheme = true;
    }
    if (!dateofretirement) {
      valid = false;
      tempError.dateofretirement = true;
    }
    if (!pensionnumber) {
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

      <Card style={{ borderTop: "5px solid #dd1818", borderRadius: "15px", marginTop: "20px", alignItems: "stretch" }} sx={{ width: "100%", height: 580, overflowY: 'scroll' }} >
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
                <SubscriptionManagementLocalForm data={data} setData={setData} error={error} setError={setError} employmenttype={employmenttype} department={department} localbody={localbody}
                  office={office} designation={designation} subscriptionstart={subscriptionstart}
                  subscriptionend={subscriptionend} member={member} district={district} pincode={pincode} />
              </Grid>

              <Grid item xs={12} md={6}>
                <SubscriptionManagementOfficeForm data={data} setData={setData} error={error} setError={setError} submit={submit} open={open} setOpen={setOpen}
                  handleClickOpen={handleClickOpen} handleClose={handleClose}
                  firstname={firstname} lastname={lastname} gender={gender} dateofbirth={dateofbirth}
                  phonenumber={phonenumber} whatsappnumber={whatsappnumber} aadhaarnumber={aadhaarnumber}
                  emailid={emailid} presentaddres={presentaddress} communicationaddress={communicationaddress}
                  dispatchaddress={dispatchaddress} dateentryservice={dateentryservice} pensionscheme={pensionscheme}
                  dateofretirement={dateofretirement} pensionnumber={pensionnumber}
                />
              </Grid>

            </Grid>
          </form>
        </CardContent>
      </Card>

      <Snackbar open={opensnackbar} autoHideDuration={6000} onClose={() => setOpensnackbar(false)} anchorOrigin={{ vertical: "top", horizontal: "right" }}>
        <Alert onClose={handleClosesnackbar} severity="success" variant="filled" sx={{ width: '100%' }}>
          Saved Successfully
        </Alert>
      </Snackbar>
    </>
  );
}
