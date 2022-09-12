import React, { useState } from "react";
import { DataGrid, GridToolbarContainer, GridToolbarColumnsButton, GridToolbarFilterButton, GridToolbarExport, GridToolbarDensitySelector } from '@mui/x-data-grid';
import { styled, alpha } from "@mui/material/styles";
import { Grid, Button, Box, Typography, InputBase, MenuItem, FormControl, InputLabel, Select, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";

const rows = [
    { id: 1, reason: "Hi", membershipid: "Jon", noyearsmembership: 35 },
    { id: 2, reason: "Lannister", membershipid: "Cersei", noyearsmembership: 42 },
    { id: 3, reason: "Lannister", membershipid: "Jaime", noyearsmembership: 45 },
    { id: 4, reason: "Stark", membershipid: "Arya", noyearsmembership: 16 },
    { id: 5, reason: "Targaryen", membershipid: "Daenerys", noyearsmembership: null },
    { id: 6, reason: "Melisandre", membershipid: null, noyearsmembership: 150 },
    { id: 7, reason: "Clifford", membershipid: "Ferrara", noyearsmembership: 44 },
    { id: 8, reason: "Frances", membershipid: "Rossini", noyearsmembership: 36 },
    { id: 9, reason: "Roxie", membershipid: "Harvey", noyearsmembership: 65 }
];

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    border: 1,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    borderColor: alpha(theme.palette.common.black, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
        borderColor: alpha(theme.palette.common.black, 0.15),
    },
    marginRight: theme.spacing(4),
    marginLeft: 0,
    width: '100%',

    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(4),
        marginTop: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    border: 1,
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: "5%",
    borderColor: "black",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        border: 1,
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

function CustomToolbar() {
    return (
        <GridToolbarContainer>
            <GridToolbarColumnsButton style={{ color: "#3b4a54" }} />
            <GridToolbarFilterButton style={{ color: "#3b4a54" }} />
            <GridToolbarDensitySelector style={{ color: "#3b4a54" }} />
            <GridToolbarExport style={{ color: "#3b4a54" }} />
        </GridToolbarContainer>
    );
}

export default function ReportPaymentTable() {
    const [committee, setCommittee] = useState('');
    const handleChange = (event) => {
        setCommittee(event.target.value);
    };

    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        {
            field: "subscriptionnumber",
            headerName: "Subscription Number",
            type: "number",
            width: 250,
            editable: false
        },
        {
            field: "subscriptiondate",
            headerName: "Subscription Date",
            type: "date",
            width: 250,
            editable: false
        },
        {
            field: "method",
            headerName: "Method",
            width: 250,
            editable: false
        },
        {
            field: "employeetype",
            headerName: "Employee Type",
            width: 250,
            editable: false
        }
    ];

    return (

        <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Grid container spacing={1} justifyContent="space-evenly">
                <Grid item xs={12} md={6} style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
                    <Link to="/reportscard">
                        <ArrowBackIcon sx={{ fontSize: 30 }} style={{ color: "#dd1818" }} />
                    </Link>
                </Grid>

                <Grid item xs={12} md={6} style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
                    <Search style={{ color: "#dd1818" }}>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Subscriber Id" style={{ border: "1px solid", borderColor: "#3b4a54", borderRadius: "25px", width: "250px" }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                </Grid>

            </Grid>

            <Grid container spacing={1} justifyContent="space-evenly">
                <Grid item xs={12} md={12} style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
                    <Typography gutterBottom component="div" marginLeft="12px" fontWeight={"bold"} marginTop={2} style={{ color: "#3b4a54", fontSize: "25px" }} align="center">
                        PAYMENT DETAILS
                    </Typography>
                </Grid>

                <Grid item xs={12} md={6} style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
                    <FormControl variant="outlined" size="small" style={{ width: "200px" }} >
                        <InputLabel id="demo-simple-select-standard-label">Committee</InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={committee}
                            onChange={handleChange}
                            label="Committee"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={"District"}>District</MenuItem>
                            <MenuItem value={"Area"}>Area</MenuItem>
                            <MenuItem value={"Unit"}>Unit</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={12} md={6} style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
                    <TextField label="Start Date" type="date" focused variant="outlined" size='small' />
                    <TextField label="End Date" type="date" focused variant="outlined" size='small' style={{ marginLeft: 10 }} />
                    <Button variant="contained" style={{ backgroundColor: "#3b4a54", textTransform: "none", marginLeft: 10 }} >
                        Submit
                    </Button>
                </Grid>

            </Grid>

            <Grid container spacing={2} justifyContent="space-evenly" marginTop={1}>
                <Grid className="content" item xs={12} md={12} style={{ display: "flex", alignItems: "flex-start", justifyContent: "left" }}></Grid>
            </Grid>
            <div style={{ height: 350, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    disableSelectionOnClick
                    components={{ Toolbar: CustomToolbar }}
                />
            </div>
        </Box>

    );
}
