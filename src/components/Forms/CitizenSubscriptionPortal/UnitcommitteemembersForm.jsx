import React, { useEffect, useState } from 'react';
import {
    InputLabel, Grid, TextField, Button, RadioGroup, FormControlLabel, FormControl, FormLabel, Radio, Select, MenuItem, FormHelperText, Snackbar, Alert
} from '@mui/material';

const districts = [
    { id: 1, district: " Alappuzha" },
    { id: 2, district: "Ernakulam" },
    { id: 3, district: " Idukki" },
    { id: 4, district: "Kannur" },
    { id: 5, district: "Kasaragod" },
    { id: 6, district: " Kollam" },
    { id: 7, district: "Kottayam" },
    { id: 8, district: "Kozhikode" },
    { id: 9, district: "Malappuram" },
    { id: 10, district: "Palakkad" },
    { id: 11, district: "Pathanamthitta" },
    { id: 12, district: "Thiruvananthapuram" },
    { id: 13, district: "Thrissur" },
    { id: 14, district: "Wayanad" },
];

export default function UnitcommitteemembersForm() {
    const [radio, setRadio] = useState();
    const [error, setError] = useState({})
    const [missing, setMissing] = useState(false)
    const [opensnackbar, setOpensnackbar] = useState(false);
    const [data, setData] = useState({});
    const [checked, setChecked] = useState();
    const [open, setOpen] = useState(false);

    const handleClose = () => { setOpen(false); };


    const handleRadioChange = (event) => {
        setRadio(event.target.value);
    };

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
            setMissing(true);
            handleClose();

        }
    }

    const validate = () => {
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
        if (!data.email) {
            valid = false;
            tempError.email = true;
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

            <Grid container spacing={1} >
                <Grid item xs={12} md={12} >
                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label">Are you a government employee</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                            value={radio}
                            onChange={handleRadioChange}
                            row
                        >
                            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                            <FormControlLabel value="no" control={<Radio />} label="No" />
                        </RadioGroup>
                    </FormControl>
                    {
                        radio === 'yes' &&
                        <>
                            <Grid container spacing={1} >
                                <Grid item xs={12} md={4}>
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

                                <Grid item xs={12} md={4}>
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

                                <Grid item xs={12} md={4}>
                                    {error.officeposition && <FormHelperText style={{ color: "#ff1100" }}>Please enter the Office Position </FormHelperText>}
                                    <TextField label="Enter Office Position" fullWidth variant="outlined" size="small" value={data.officeposition} onChange={(e) => handleChange(e, 'officeposition')} />
                                </Grid>

                                <Grid item xs={12} md={4}>
                                    {error.district && <FormHelperText style={{ color: "#ff1100" }}>
                                        Please enter the District
                                    </FormHelperText>}
                                    <FormControl fullWidth variant="outlined" size="small" >
                                        <InputLabel id="district-select-label">
                                            District
                                        </InputLabel>
                                        <Select
                                            labelId="district-select-label"
                                            id="district-select"
                                            label="District"
                                            value={data.district} onChange={(e) => handleChange(e, 'district')}>
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            {districts.map((option) => (
                                                <MenuItem key={option.id} value={option.district}>{option.district}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Grid>

                                <Grid item xs={12} md={4}>
                                    {error.location && <FormHelperText style={{ color: "#ff1100" }}>Please enter the Office Position </FormHelperText>}
                                    <TextField label="Enter Location" fullWidth variant="outlined" size="small" value={data.location} onChange={(e) => handleChange(e, 'location')} />
                                </Grid>

                                <Grid item xs={12} md={4}>
                                    {error.pincode && <FormHelperText style={{ color: "#ff1100" }}>Please enter the Office Position </FormHelperText>}
                                    <TextField label="Enter Pincode" fullWidth variant="outlined" size="small" value={data.pincode} onChange={(e) => handleChange(e, 'pincode')} />
                                </Grid>

                            </Grid>
                        </>
                    }
                </Grid>
                <Grid item xs={12} md={4}>
                    {error.firstname && <FormHelperText style={{ color: "#ff1100" }}>Please enter the Office Position </FormHelperText>}
                    <TextField label="First Name" fullWidth variant="outlined" size="small" value={data.firstname} onChange={(e) => handleChange(e, 'firstname')} />
                </Grid>

                <Grid item xs={12} md={4}>
                    {error.lastname && <FormHelperText style={{ color: "#ff1100" }}>Please enter the Office Position </FormHelperText>}
                    <TextField label="Last Name" fullWidth variant="outlined" size="small" value={data.lastname} onChange={(e) => handleChange(e, 'lastname')} />
                </Grid>


                <Grid item xs={12} md={4}>
                    {error.gender && <FormHelperText style={{ color: "#ff1100" }}>
                        Please enter the Gender
                    </FormHelperText>}
                    <FormControl fullWidth size="small" variant="outlined" >
                        <InputLabel id="country-select-standard-label">
                            Gender
                        </InputLabel>
                        <Select
                            labelId="country-select-standard-label"
                            id="countrye-select-standard"
                            value={data.gender} onChange={(e) => handleChange(e, 'gender')}
                            label="Gender"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={"Male"}>Male</MenuItem>
                            <MenuItem value={"Female"}>Female</MenuItem>
                            <MenuItem value={"Other"}>Other</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={12} md={4}>
                    {error.dateofbirth && <FormHelperText style={{ color: "#ff1100" }}>Please enter the Office Position </FormHelperText>}
                    <TextField label="Date of Birth" type="date" focused fullWidth variant="outlined" size="small" value={data.dateofbirth} onChange={(e) => handleChange(e, 'dateofbirth')} />
                </Grid>

                <Grid item xs={12} md={4}>
                    {error.phonenumber && <FormHelperText style={{ color: "#ff1100" }}>Please enter the Office Position </FormHelperText>}
                    <TextField label="Phone Number" type="number" fullWidth variant="outlined" size="small" value={data.phonenumber} onChange={(e) => handleChange(e, 'phonenumber')} />
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
                    {error.whatsappnumber && <FormHelperText style={{ color: "#ff1100" }}>Please enter the Office Position </FormHelperText>}
                    <TextField focused label="WhatsApp Number" type="number" fullWidth variant="outlined" size="small" value={data.whatsappnumber} onChange={(e) => handleChange(e, 'whatsappnumber')} />
                </Grid>

                <Grid item xs={12} md={4}>
                    {error.email && <FormHelperText style={{ color: "#ff1100" }}>Please enter the Office Position </FormHelperText>}
                    <TextField label="Email" type="email" fullWidth variant="outlined" size="small" value={data.email} onChange={(e) => handleChange(e, 'email')} />
                </Grid>

                <Grid item xs={12} md={4}>
                    {error.presentaddress && <FormHelperText style={{ color: "#ff1100" }}>Please enter the Office Position </FormHelperText>}
                    <TextField label="Present Address" fullWidth variant="outlined" size="small" value={data.presentaddress} onChange={(e) => handleChange(e, 'presentaddress')} />
                </Grid>

                <Grid item xs={12} md={4}>
                    {error.communicationaddress && <FormHelperText style={{ color: "#ff1100" }}>Please enter the Office Position </FormHelperText>}
                    <TextField label="Communication Address" fullWidth variant="outlined" size="small" value={data.communicationaddress} onChange={(e) => handleChange(e, 'communicationaddress')} />
                </Grid>

                <Grid item xs={12} md={4}>
                    {error.dispatchaddress && <FormHelperText style={{ color: "#ff1100" }}>Please enter the Office Position </FormHelperText>}
                    <TextField label="Dispatch Address" fullWidth variant="outlined" size="small" value={data.dispatchaddress} onChange={(e) => handleChange(e, 'dispatchaddress')} />
                </Grid>

                <Grid item xs={12} md={12} style={{ display: "flex", justifyContent: "center", alignItem: "center", marginTop: "10px" }}>
                    <Button variant="contained" onClick={submit} size="small" style={{ backgroundColor: "#770404", width: "90px" }}>Login</Button>
                </Grid>
            </Grid>
            <Snackbar open={opensnackbar} autoHideDuration={6000} onClose={() => setOpensnackbar(false)} anchorOrigin={{ vertical: "top", horizontal: "right" }}>
                <Alert onClose={handleClosesnackbar} severity="success" variant="filled" sx={{ width: '100%' }}>
                    Saved Successfully
                </Alert>
            </Snackbar>
        </>
    )
}
