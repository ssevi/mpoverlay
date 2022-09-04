import React, { useState } from "react";
import { DataGrid, GridToolbarContainer, GridToolbarColumnsButton, GridToolbarFilterButton, GridToolbarExport, GridToolbarDensitySelector } from '@mui/x-data-grid';
import { styled, alpha } from "@mui/material/styles";
import { IconButton, Grid, Button, Box, Typography, InputBase, MenuItem, FormControl, InputLabel, Select, TextField } from "@mui/material";
import { Dialog, DialogActions, DialogContent, DialogContentText } from "@mui/material";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import PrintIcon from '@mui/icons-material/Print';
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


const LightTooltip = styled(({ className, ...props }) => <Tooltip {...props} classes={{ popper: className }} />)(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.common.white,
        color: "rgba(0, 0, 0, 0.87)",
        boxShadow: theme.shadows[1],
        fontSize: 11,
    },
}));


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

export default function AreacommitteemanagementTable() {
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const handleClickOpen = () => { setOpen(true); };

    const [committee, setCommittee] = useState('');
    const handleChange = (event) => {
        setCommittee(event.target.value);
    };

    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        {
            field: "district",
            headerName: "District",
            width: 150,
            editable: false
        },
        {
            field: "area",
            headerName: "Area",
            width: 150,
            editable: false
        },
        {
            field: "email",
            headerName: "Email Id",
            type: "email",
            width: 210,
            editable: false
        },
        {
            field: "username",
            headerName: "User Name",
            width: 210,
            editable: false
        },
        {
            field: "action",
            headerName: "Action",
            width: 210,
            renderCell: (params) => (
                <strong>
                    <LightTooltip title="View" placement="top">
                        <IconButton>
                            <VisibilityIcon style={{ marginRight: 4, color: "#0693e3" }} />
                        </IconButton>
                    </LightTooltip>

                    <LightTooltip title="Edit" placement="top">
                        <IconButton>
                            <EditIcon style={{ marginRight: 4, color: "#fcb900" }} />
                        </IconButton>
                    </LightTooltip>

                    <LightTooltip title="Delete" placement="top">
                        <IconButton>
                            <DeleteIcon style={{ marginRight: 4, color: "red" }} onClick={handleClickOpen} />
                            <Dialog
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                            >
                                <DialogContent>
                                    <DialogContentText id="alert-dialog-description">
                                        Are you sure want to Delete
                                    </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleClose}> Cancel </Button>
                                    <Button autoFocus variant="contained" style={{ backgroundColor: "#194d33" }} >
                                        Delete
                                    </Button>
                                </DialogActions>
                            </Dialog>
                        </IconButton>
                    </LightTooltip>
                </strong>
            )
        }
    ];

    return (

        <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Grid container spacing={1} justifyContent="space-evenly">
                <Grid item xs={12} md={6} style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
                    <Link to="/">
                        <ArrowBackIcon sx={{ fontSize: 30 }} style={{ color: "#dd1818" }} />
                    </Link>
                </Grid>
                <Grid item xs={12} md={6} style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", marginBottom: "2px" }}>
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

            <Grid container spacing={1} >
                <Grid item xs={12} md={12} style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
                    <Typography gutterBottom component="div" marginLeft="12px" fontWeight={"bold"} style={{ color: "#3b4a54", fontSize: "20px" }} align="center">
                        AREA COMMITTEE MANAGEMENT
                    </Typography>
                    <Link style={{ textDecoration: "none" }} to="/areacommitteemanagementform">
                        <Button variant="contained" style={{ backgroundColor: "#3b4a54", textTransform: "none", width: "200px", marginLeft: 10 }} startIcon={<AddIcon />}>
                            Add New Area
                        </Button>
                    </Link>

                </Grid>

                <Grid item xs={12} md={2} style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
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

                <Grid item xs={12} md={7} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <TextField label="Start Date" type="date" focused variant="outlined" size='small' />
                    <TextField label="End Date" type="date" focused variant="outlined" size='small' style={{ marginLeft: 10 }} />
                    <Button variant="contained" style={{ backgroundColor: "#3b4a54", textTransform: "none", marginLeft: 10 }} >
                        Submit
                    </Button>
                </Grid>

                <Grid item xs={12} md={3} style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
                    <Button variant="contained" style={{ backgroundColor: "#3b4a54", textTransform: "none", width: "100%", marginLeft: 10 }} startIcon={<PrintIcon />}>
                        Add New Payment
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
