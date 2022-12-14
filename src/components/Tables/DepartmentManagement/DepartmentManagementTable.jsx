import React, { useState } from "react";
import { DataGrid, GridToolbarContainer, GridToolbarColumnsButton, GridToolbarFilterButton, GridToolbarExport, GridToolbarDensitySelector } from '@mui/x-data-grid';
import { styled } from "@mui/material/styles";
import { IconButton, Grid, Button, Box, Typography } from "@mui/material";
import { Dialog, DialogActions, DialogContent, DialogContentText } from "@mui/material";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
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

export default function DepartmentManagementTable() {
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const handleClickOpen = () => { setOpen(true); };

    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        {
            field: "department",
            headerName: "Department",
            width: 250,
            editable: false
        },
        {
            field: "ministry",
            headerName: "Ministry",
            width: 250,
            editable: false
        },
        {
            field: "email",
            headerName: "Email Id",
            type: "email",
            width: 250,
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
                <Grid item xs={12} md={12} style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
                    <Link to="/">
                        <ArrowBackIcon sx={{ fontSize: 30 }} style={{ color: "#dd1818" }} />
                    </Link>
                </Grid>
            </Grid>

            <Grid container spacing={1} justifyContent="space-evenly">
                <Grid item xs={12} md={12} style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
                    <Typography gutterBottom component="div" marginLeft="12px" fontWeight={"bold"} marginTop={2} style={{ color: "#3b4a54", fontSize: "23px" }} align="center">
                        DEPARTMENT MANAGEMENT
                    </Typography>
                    <Link style={{ textDecoration: "none" }} to="/departmentmanagementform">
                        <Button variant="contained" style={{ backgroundColor: "#3b4a54", textTransform: "none", width: "200px", marginLeft: 10 }} startIcon={<AddIcon />}>
                            Add New Department
                        </Button>
                    </Link>
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
