import React, { useState } from 'react';
import { Card, Button, Typography, CardContent, Grid, Select, FormControl, MenuItem, InputLabel, FormHelperText } from "@mui/material";
import { Dialog, DialogActions, DialogContent, DialogContentText, TextField, Snackbar, Alert, Input } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function PaymentForm() {
    const [data, setData] = useState({});
    const [error, setError] = useState({});
    const [open, setOpen] = React.useState(false);
    const [missing, setMissing] = useState(false);
    const [opensnackbar, setOpensnackbar] = useState(false);
    const [hand, setHand] = useState();
    const [upi, setUpi] = useState(false);
    const [bank, setBank] = useState(false);
    const [proofofpayment, setProofofpayment] = useState("");


    const handleClickOpen = () => { setOpen(true); };
    const handleClose = () => setOpen(false);

    const handleChange = (e, key) => {
        setData({ ...data, [key]: e.target.value })
        if (key === 'paymentmethod') {
            setHand(e.target.value)
        }
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
        if (!data.paymentmethod) {
            valid = false;
            tempError.paymentmethod = true;
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
                            <Link to="/paymenttable">
                                <ArrowBackIcon sx={{ fontSize: 30 }} style={{ color: "#3b4a54" }} />
                            </Link>
                        </Grid>
                        <Grid item xs={12} md={11} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Typography sx={{ fontSize: 30, fontWeight: "bold", color: "#3b4a54" }} align="center" gutterBottom>
                                PAYMENT FORM
                            </Typography>
                        </Grid>
                    </Grid>

                    <form autoComplete="auto">
                        <Grid container spacing={2} marginTop={2}>
                            <Grid item xs={12} md={4}>
                                <FormControl fullWidth size="small" variant="outlined" >
                                    <InputLabel id="paymentmethod-select-standard-label">
                                        Payment Method
                                    </InputLabel>
                                    <Select
                                        labelId="paymentmethod-select-standard-label"
                                        id="paymentmethod-select-standard"
                                        value={data.paymentmethod} onChange={(e) => handleChange(e, 'paymentmethod')}
                                        label="Payment Method"
                                        helperText={error.paymentmethod ? " Please selct the Area" : " "}
                                    >
                                        <MenuItem value=""> <em>None</em> </MenuItem>
                                        <MenuItem hand={hand} value={"Hand"}>  Hand </MenuItem>
                                        <MenuItem upi={upi} value={"Upi"}> Upi </MenuItem>
                                        <MenuItem bank={bank} value={"Bank"}> Bank </MenuItem>
                                    </Select>
                                </FormControl>
                                {error.paymentmethod && <FormHelperText >
                                    Please enter the Payment Method
                                </FormHelperText>}
                            </Grid>

                            <Grid item xs={12} md={12}>
                                {hand === "Hand" && <Grid container spacing={2} marginTop={2}>
                                    <Grid item xs={12} md={4}>
                                        <TextField label="Paid to person" fullWidth size="small" variant="outlined" value={data.paidtoperson} onChange={(e) => handleChange(e, 'paidtoperson')} />
                                    </Grid>

                                    <Grid item xs={12} md={4}>
                                        <TextField label="Contact number" focused fullWidth size="small" variant="outlined" value={data.contactnumber} onChange={(e) => handleChange(e, 'contactnumber')} />
                                    </Grid>
                                </Grid>
                                }
                            </Grid>

                            <Grid item xs={12} md={12}>
                                {hand === "Upi" && <Grid container spacing={2} marginTop={2}>
                                    <Grid item xs={12} md={4}>
                                        <TextField label="Transaction id" fullWidth size="small" variant="outlined" value={data.transactionid} onChange={(e) => handleChange(e, 'transactionid')} />
                                    </Grid>
                                </Grid>
                                }
                            </Grid>

                            <Grid item xs={12} md={12}>
                                {hand === "Bank" && <Grid container spacing={2} marginTop={2}>
                                    <Grid item xs={12} md={4}>
                                        <TextField label="challan number or Transaction Id" fullWidth size="small" variant="outlined" value={data.challannumber} onChange={(e) => handleChange(e, 'challannumber')} />
                                    </Grid>

                                    <Grid item xs={12} md={4}>
                                        <TextField label="Date" type="date" focused fullWidth size="small" variant="outlined" value={data.date} onChange={(e) => handleChange(e, 'date')} />
                                    </Grid>
                                </Grid>
                                }
                            </Grid>

                            <Grid item xs={12} md={6} >
                                <Button variant="outlined" fullWidth component="span" size="small" marginBottom="10px" style={{ textTransform: "none", color: "#3b4a54" }}>
                                    Upload Proof of Payment
                                    <Input accept="image/*" id="outlined-button-file" multiple type="file" style={{ marginLeft: "10px" }} value={data.proofofpayment} onChange={(event) => setProofofpayment(event.target.files[0])} />
                                </Button>
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
