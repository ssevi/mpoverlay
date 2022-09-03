import React, { useState } from 'react';
import { Card, Button, Typography, CardContent, Grid, Select, FormControl, MenuItem, InputLabel, FormHelperText } from "@mui/material";
import { Dialog, DialogActions, DialogContent, DialogContentText, Snackbar, Alert } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function OrdercreationForm() {
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
        if (!data.selectoffice) {
            valid = false;
            tempError.selectoffice = true;
        }
        if (!data.selectmonth) {
            valid = false;
            tempError.selectmonth = true;
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
                            <Link to="/ordercreationtable">
                                <ArrowBackIcon sx={{ fontSize: 30 }} style={{ color: "#3b4a54" }} />
                            </Link>
                        </Grid>
                        <Grid item xs={12} md={11} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Typography sx={{ fontSize: 30, fontWeight: "bold", color: "#3b4a54" }} align="center" gutterBottom>
                                ORDER CREATION FORM
                            </Typography>
                        </Grid>
                    </Grid>

                    <form autoComplete="auto">
                        <Grid container spacing={2} marginTop={2}>
                            <Grid item xs={12} md={4}>
                                <FormControl fullWidth size="small" variant="outlined" >
                                    <InputLabel id="selectoffice-select-standard-label">
                                        Select Office
                                    </InputLabel>
                                    <Select
                                        labelId="selectoffice-select-standard-label"
                                        id="selectoffice-select-standard"
                                        value={data.selectoffice} onChange={(e) => handleChange(e, 'selectoffice')}
                                        label=" Select Office"
                                        helperText={error.selectoffice ? " Please selct the Office" : " "}
                                    >
                                        <MenuItem value=""> <em>None</em> </MenuItem>
                                        <MenuItem value={"Office1"}>  Office1  </MenuItem>
                                        <MenuItem value={"Office2"}>  Office2  </MenuItem>
                                        <MenuItem value={"Office3"}>  Office3 </MenuItem>
                                    </Select>
                                </FormControl>
                                {error.selectoffice && <FormHelperText >
                                    Please select the Office
                                </FormHelperText>}
                            </Grid>

                            <Grid item xs={12} md={4}>
                                <FormControl fullWidth size="small" variant="outlined" >
                                    <InputLabel id="selectmonth-select-standard-label">
                                        Select Subscriber List/Month
                                    </InputLabel>
                                    <Select
                                        labelId="selectmonth-select-standard-label"
                                        id="selectmonth-select-standard"
                                        value={data.selectmonth} onChange={(e) => handleChange(e, 'selectmonth')}
                                        label=" Select Subscriber List/Month"
                                        helperText={error.selectmonth ? " Please selct the Subscriber List/Month" : " "}
                                    >
                                        <MenuItem value=""> <em>None</em> </MenuItem>
                                        <MenuItem value={"Office1"}>  Office1  </MenuItem>
                                        <MenuItem value={"Office2"}>  Office2  </MenuItem>
                                        <MenuItem value={"Office3"}>  Office3 </MenuItem>
                                    </Select>
                                </FormControl>
                                {error.selectmonth && <FormHelperText >
                                    Please select the Subscriber List/Month
                                </FormHelperText>}
                            </Grid>

                            <Grid item xs={12} md={12} style={{ display: "flex", flexDirection: "row-reverse", marginTop: 20 }}>
                                <Button variant="contained" onClick={handleClickOpen} style={{ backgroundColor: "#194d33" }}>
                                    Create Order
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
