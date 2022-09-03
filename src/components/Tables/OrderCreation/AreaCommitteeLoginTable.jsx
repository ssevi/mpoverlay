import React from "react";
import { DataGrid, GridToolbarContainer, GridToolbarColumnsButton, GridToolbarFilterButton, GridToolbarExport, GridToolbarDensitySelector } from '@mui/x-data-grid';
import { styled, alpha } from "@mui/material/styles";
import { IconButton, Grid, Button, Box, Typography, InputBase, Input, Modal } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PrintIcon from '@mui/icons-material/Print';
import CloseIcon from '@mui/icons-material/Close';

import { Link } from "react-router-dom";
import PdfIcon from "../../../assets/images/pdf.png"

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 650,
    bgcolor: 'background.paper',
    borderRadius: 5,
    boxShadow: 24,
    p: 1,
};

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

export default function AreaCommitteeLoginTable() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
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
            width: 200,
            renderCell: (params) => (
                <strong>
                    <Button onClick={handleOpen}>View More</Button>
                    <Modal
                        open={open}
                        onClose={handleClose}>
                        <Box sx={style} >
                            <Grid container spacing={1}>
                                <Grid item xs={12} md={12} style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
                                    <IconButton onClick={handleClose}>
                                        <CloseIcon style={{ marginRight: 4, color: "#0693e3" }} />
                                    </IconButton>
                                </Grid>

                                <Grid item xs={12} md={12} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <Typography gutterBottom component="div" marginLeft="12px" fontWeight={"bold"} style={{color: "#3b4a54", fontSize: "30px" }} align="center">
                                       ORDER CREATION
                                    </Typography>
                                    </Grid>

                                <Grid item xs={12} md={12} style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
                                    <Typography gutterBottom component="div" marginLeft="12px"  style={{ fontSize: "18px", marginLeft:80 }} align="center">
                                        District: Thiruvananthapuram North
                                    </Typography>
                                    </Grid>

                                    <Grid item xs={12} md={12} style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
                                    <Typography gutterBottom component="div" marginLeft="12px"  style={{ fontSize: "18px", marginLeft:80 }} align="center">
                                        Area: Nedumangad
                                    </Typography>
                                    </Grid>

                                    <Grid item xs={12} md={12} style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
                                    <Typography gutterBottom component="div" marginLeft="12px"  style={{ fontSize: "18px", marginLeft:80 }} align="center">
                                        Email Id: ssevikamanas@gmail.com
                                    </Typography>
                                    </Grid>

                                    <Grid item xs={12} md={12} style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
                                    <Typography gutterBottom component="div" marginLeft="12px"  style={{ fontSize: "18px", marginLeft:80 }} align="center">
                                        User Name: Aryams
                                    </Typography>
                                    </Grid>
                                
                                <Grid item xs={12} md={12} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <IconButton style={{ backgroundColor: "transparent" }}>
                                        <img src={PdfIcon} alt="PdfIcon" height="40px" />
                                    </IconButton>

                                    <Button variant="contained" style={{ backgroundColor: "#4a90e2", textTransform: "none", marginLeft: 10 }} >
                                        Update Payment
                                    </Button>

                                    <Button variant="contained" style={{ backgroundColor: "#006b76", textTransform: "none", marginLeft: 10 }} >
                                        Create Receipt
                                    </Button>

                                    <Button variant="contained" style={{ backgroundColor: "#d9b008", textTransform: "none", marginLeft: 10 }} >
                                        Sent to State Committee
                                    </Button>
                                </Grid>

                                <Grid item xs={12} md={12} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <Button variant="outlined" component="span" size="small" style={{ backgroundColor: "#3b4a54", textTransform: "none", marginLeft: 10,width:540, color: "#ffffff" }}>
                                        Upload Slip
                                        <Input accept="image/*" id="outlined-button-file" multiple type="file" style={{ marginLeft: "10px", color: "#ffffff" }} />
                                    </Button>
                                </Grid>

                            </Grid>
                        </Box>
                    </Modal>

                </strong>
            )
        }
    ];

    return (

        <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Grid container spacing={1} justifyContent="space-evenly">
                <Grid item xs={12} md={6} style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
                    <Link to="/ordercreationtable">
                        <ArrowBackIcon sx={{ fontSize: 30 }} style={{ color: "#dd1818" }} />
                    </Link>
                </Grid>
                <Grid item xs={12} md={6} style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
                    <Search style={{ color: "#dd1818" }}>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…" style={{ border: "1px solid", borderColor: "#3b4a54", borderRadius: "25px", width: "250px" }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                </Grid>
            </Grid>

            <Grid container spacing={1} justifyContent="space-evenly">
                <Grid item xs={12} md={12} style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
                    <Typography gutterBottom component="div" marginLeft="12px" fontWeight={"bold"} marginTop={2} style={{ color: "#3b4a54", fontSize: "23px" }} align="center">
                        ALL ORDERS - AREA COMMITTEE
                    </Typography>
                </Grid>

                <Grid item xs={12} md={12} style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
                    <Button variant="contained" style={{ backgroundColor: "#0693e3", textTransform: "none", width: "240px", height: "40px", marginLeft: 10 }} startIcon={<PrintIcon />}>
                        Print Consolidated Data
                    </Button>

                    <Button variant="contained" style={{ backgroundColor: "#64dbf6", textTransform: "none", width: "240px", height: "40px", marginLeft: 10 }} startIcon={<PrintIcon />}>
                        Bulk Create Receipt
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
