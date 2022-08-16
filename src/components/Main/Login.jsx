import React from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { FaSearchPlus } from 'react-icons/fa';
import { FaSearchMinus } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { AiFillFormatPainter } from 'react-icons/ai';
import Pic from "../../assets/images/LoginSide.webp"

const drawerWidth = 240;

function DrawerAppBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                MUI
            </Typography>
            <Divider />
            <List>

                <ListItem disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                        <ListItemText primary="Home" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                        <ListItemText primary="Employees" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                        <ListItemText primary="Pensioners" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                        <ListItemText primary="Subscription" />
                    </ListItemButton>
                </ListItem>

            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }} style={{ marginTop: 40 }}>
            <AppBar component="nav" style={{ backgroundColor: "#B1B1B1", marginTop: 40 }}>
                <Toolbar>
                    <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2, display: { sm: 'none' } }}>
                        <MenuIcon />
                    </IconButton>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
                        <Button sx={{ color: '#fff' }}> Home </Button>
                        <Button sx={{ color: '#fff' }}> Employees </Button>
                        <Button sx={{ color: '#fff' }}> Pensioners </Button>
                        <Button sx={{ color: '#fff' }}> Subscription </Button>
                    </Box>

                    <Box >
                        <Stack direction="row" spacing={2}>
                            <Avatar variant="square"> <FaSearchMinus /> </Avatar>
                            <Avatar variant="square"> <FaSearch /> </Avatar>
                            <Avatar variant="square"> <FaSearchPlus /> </Avatar>
                            <Avatar variant="square"> <AiFillFormatPainter /> </Avatar>
                            <Avatar variant="square" >Mal</Avatar>
                            <Avatar variant="square">Eng</Avatar>
                        </Stack>
                    </Box>
                </Toolbar>
            </AppBar>


            <Box component="nav" >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>

            </Box>
            <Box component="main" sx={{ p: 3 }}>
                <Toolbar />
                <Grid container spacing={1}>
                    <Grid item xs={12} md={6} style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItem: "center" }} >
                        <Typography style={{ fontSize: "70px", fontFamily: "Playfair Display", color: "#B1B1B1" }} align="center">
                            magazine
                        </Typography>
                        <Typography style={{ fontSize: "50px", fontFamily: "Playfair Display", color: "#770404" }} align="center">
                            subscription
                        </Typography>
                    </Grid>

                    <Grid item xs={12} md={6} style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItem: "center" }} >
                        <img src={Pic} alt="pic" height="500vh" />
                    </Grid>

                </Grid>
            </Box>
        </Box>
    );
}

DrawerAppBar.propTypes = {
    window: PropTypes.func,
};

export default DrawerAppBar;
