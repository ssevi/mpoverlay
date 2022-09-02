import React, { useState } from 'react';
import { Card, Button, Typography, CardContent, Grid, Dialog, DialogActions, DialogContent, DialogContentText, TextField, Snackbar, Alert } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function ChangePasswordForm() {
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
        if (!data.currentpassword) {
            valid = false;
            tempError.currentpassword = true;
        }
        if (!data.newpassword) {
            valid = false;
            tempError.newpassword = true;
        }
        if (!data.confirmpassword) {
            valid = false;
            tempError.confirmpassword = true;
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
                                CHANGE PASSWORD FORM
                            </Typography>
                        </Grid>
                    </Grid>

                    <form autoComplete="auto">
                        <Grid container spacing={2} marginTop={2}>
                            <Grid item xs={12} md={4}>
                                <TextField label="Current Password" fullWidth variant="outlined" size='small' helperText={error.currentpassword ? "Please enter the Current Password" : " "} value={data.currentpassword} onChange={(e) => handleChange(e, 'currentpassword')} />
                            </Grid>

                            <Grid item xs={12} md={4}>
                                <TextField label="New Password" fullWidth variant="outlined" size='small' helperText={error.newpassword ? "Please enter the New Password" : " "} value={data.newpassword} onChange={(e) => handleChange(e, 'newpassword')} />
                            </Grid>

                            <Grid item xs={12} md={4}>
                                <TextField label="Confirm Password" fullWidth variant="outlined" size='small' helperText={error.confirmpassword ? "Please enter the Confirm Password" : " "} value={data.confirmpassword} onChange={(e) => handleChange(e, 'confirmpassword')} />
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
