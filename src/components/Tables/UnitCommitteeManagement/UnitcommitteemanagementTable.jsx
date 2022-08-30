import React, { useState } from "react";
import { DataGrid, GridToolbarContainer, GridToolbarColumnsButton, GridToolbarFilterButton, GridToolbarExport, GridToolbarDensitySelector } from '@mui/x-data-grid';
import { styled, alpha } from "@mui/material/styles";
import { IconButton, Grid, Card, Button, Box, Typography, InputBase } from "@mui/material";
import { Dialog, DialogActions, DialogContent, DialogContentText } from "@mui/material";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { IoMdAddCircle } from 'react-icons/io';
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

export default function UnitcommitteemanagementTable() {
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const handleClickOpen = () => { setOpen(true); };

    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        {
            field: "membershipid",
            headerName: "Membership Id",
            width: 150,
            editable: false
        },
        {
            field: "reason",
            headerName: "Reason",
            width: 150,
            editable: false
        },
        {
            field: "noyearsmembership",
            headerName: "No: Years of Membership",
            type: "number",
            width: 210,
            editable: false
        },
        {
            field: "fullName",
            headerName: "Full name",
            description: "This column has a value getter and is not sortable.",
            sortable: false,
            width: 160,
            valueGetter: (params) =>
                `${params.row.membershipid || ""} ${params.row.reason || ""}`
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
            <Card style={{ borderTop: "5px solid #dd1818", background: "#ffffff", boxShadow: " 2px 2px 20px #bebebe,-2px -2px 20px #ffffff", marginTop: 10, marginBottom: 60, padding: "0 2% 0 2%", borderRadius: 35 }}
                sx={{ width: "100%", height: 550, overflowY: 'scroll' }}>
                <Grid container spacing={1} justifyContent="space-evenly">
                    <Grid item xs={12} md={1} style={{ display: "flex", alignItems: "center", justifyContent: "center", paddingTop: 25 }}>
                        <Link to="/SettingsCard">
                            <ArrowBackIcon sx={{ fontSize: 30 }} style={{ color: "#dd1818" }} />
                        </Link>
                    </Grid>
                    <Grid item xs={12} md={7} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Typography gutterBottom component="div" marginLeft="12px" fontWeight={"bold"} marginTop={2} style={{ color: "#3b4a54", fontSize: "22px" }} align="center">
                            UNIT COMMITTEE MANAGEMENT DETAILS
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={3} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Search style={{ color: "#dd1818" }}>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…" style={{ border: "1px solid", borderColor: "#3b4a54", borderRadius: "25px", width: "100%" }}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                    </Grid>
                    <Grid item xs={12} md={1} style={{ display: "flex", alignItems: "center", justifyContent: "end", marginTop: "13px" }}>
                        <LightTooltip title="Add" placement="right">
                            <Link to="/notfound">
                                <IconButton style={{ boxShadow: "1px 1px  10px #888888", size: "small", padding: 0 }}>
                                    <IoMdAddCircle className="hover" style={{ color: "#dd1818", fontSize: "50px", borderRadius: "50px" }} />
                                </IconButton>
                            </Link>
                        </LightTooltip>
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
            </Card>
        </Box>

    );
}
