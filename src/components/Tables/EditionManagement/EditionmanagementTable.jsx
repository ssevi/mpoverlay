import React, { useState } from "react";
import { DataGrid, GridToolbarContainer, GridToolbarColumnsButton, GridToolbarFilterButton, GridToolbarExport, GridToolbarDensitySelector } from '@mui/x-data-grid';
import { styled, alpha } from "@mui/material/styles";
import { IconButton, Grid, Button, Box, Typography, InputBase, MenuItem, FormControl, InputLabel, Select, TextField, Modal } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PdfIcon from "../../../assets/images/pdf.png";
import AddIcon from '@mui/icons-material/Add';

import { Link } from "react-router-dom";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 450,
    bgcolor: 'background.paper',
    borderRadius: 3,
    boxShadow: 24,
    p: 4,
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

export default function EditionmanagementTable() {
    const [opens, setOpens] = useState(false);
    const handleOpens = () => setOpens(true);
    const handleCloses = () => setOpens(false);

    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        {
            field: "department",
            headerName: "Department",
            width: 250,
            editable: false
        },
        {
            field: "office",
            headerName: "Office",
            width: 200,
            editable: false
        },
        {
            field: "email",
            headerName: "Email",
            type: "email",
            width: 200,
            editable: false
        },
        {
            field: "action",
            headerName: "Action",
            width: 350,
            renderCell: (params) => (
                <strong>
                    <Grid container spacing={1}>
                        <Grid item xs={12} md={12} style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                            <IconButton style={{ backgroundColor: "transparent" }}>
                                <img src={PdfIcon} alt="PdfIcon" height="40px" />
                                <Typography gutterBottom component="div" marginLeft="12px" fontWeight={"bold"} marginTop={2} style={{ color: "#3b4a54", fontSize: "15px" }} align="center"> Download Edition List as Pdf</Typography>
                            </IconButton>

                        </Grid>

                        <Grid item xs={12} md={12} style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                            <IconButton style={{ backgroundColor: "transparent" }} >
                                <img src={PdfIcon} alt="PdfIcon" height="40px" />
                                <Typography gutterBottom component="div" marginLeft="12px" fontWeight={"bold"} marginTop={2} style={{ color: "#3b4a54", fontSize: "15px" }} align="center"> Download Dispatch Address </Typography>
                            </IconButton>
                        </Grid>
                    </Grid>


                </strong>
            )
        }
    ];

    return (

        <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Grid container spacing={1} justifyContent="space-evenly">
                <Grid item xs={12} md={6} style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
                    <Link to="/ordercreationcard">
                        <ArrowBackIcon sx={{ fontSize: 30 }} style={{ color: "#dd1818" }} />
                    </Link>
                </Grid>

                <Grid item xs={12} md={6} style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
                    <Button onClick={handleOpens} variant="contained" style={{ background: "linear-gradient(to left, #333333, #dd1818)" }}>
                        Set Edition Date
                    </Button>
                    <Modal
                        open={opens}
                        onClose={handleCloses}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Grid item xs={12} md={12} style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
                                <Typography gutterBottom component="div" marginLeft="12px" fontWeight={"bold"} style={{ color: "#3b4a54", fontSize: "30px" }} align="center">
                                    SET DATE
                                </Typography>
                            </Grid>

                            <Grid item xs={12} md={12}>
                                <TextField label="Date " fullWidth type="date" variant="outlined" size="small" focused />
                            </Grid>

                            <Grid item xs={12} md={6} style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
                                <Button variant="contained" style={{ background: "linear-gradient(to left, #0f2027, #203a43, #2c5364)", marginTop: "20px" }} align="right">
                                    Set Edition Date
                                </Button>
                            </Grid>
                        </Box>
                    </Modal>

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
                    <Typography gutterBottom component="div" marginLeft="12px" fontWeight={"bold"} marginTop={2} style={{ color: "#3b4a54", fontSize: "30px", }} align="center">
                        EDITION MANAGEMENT
                    </Typography>

                    <FormControl variant="outlined" size="small" style={{ width: "180px", marginLeft: 10 }} >
                        <InputLabel id="selectmonth-select-standard-label">Select Month</InputLabel>
                        <Select
                            labelId="selectmonth-select-standard-label"
                            id="selectmonth-select-standard"
                            label="Select Month"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={"January"}>January</MenuItem>
                            <MenuItem value={"February"}>February</MenuItem>
                            <MenuItem value={"March"}>March</MenuItem>
                            <MenuItem value={"April"}>April</MenuItem>
                            <MenuItem value={"May"}>May</MenuItem>
                            <MenuItem value={"June"}>June</MenuItem>
                            <MenuItem value={"July"}>July</MenuItem>
                            <MenuItem value={"August"}>August</MenuItem>
                            <MenuItem value={"September"}>September</MenuItem>
                            <MenuItem value={"October"}>October</MenuItem>
                            <MenuItem value={"November"}>November</MenuItem>
                            <MenuItem value={"December"}>December</MenuItem>
                        </Select>
                    </FormControl>

                </Grid>

            </Grid>

            <Grid container spacing={2} marginTop={1}>
                <Grid className="content" item xs={12} md={12} style={{ display: "flex", alignItems: "flex-start", justifyContent: "left" }}></Grid>
            </Grid>
            <div style={{ height: 430, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowHeight={125}
                    rowsPerPageOptions={[5]}
                    disableSelectionOnClick
                    components={{ Toolbar: CustomToolbar }}
                />
            </div>
        </Box>

    );
}
