import * as React from 'react';
import { styled, useTheme, alpha } from '@mui/material/styles';
import {Box, Toolbar, List, CssBaseline, Typography, Divider, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText, InputBase,
    Badge, MenuItem, Menu, Button, Avatar, Grid} from '@mui/material';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import TableChartIcon from '@mui/icons-material/TableChart';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import { FaSearch } from 'react-icons/fa';
import HomeIcon from '@mui/icons-material/Home';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import CompareIcon from '@mui/icons-material/Compare';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import AssessmentIcon from '@mui/icons-material/Assessment';

import { Link } from "react-router-dom";
import NotificationSection from '../../Main/Notification';

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
    backgroundColor: "#3b4a54",
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    backgroundColor: "#3b4a54",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color:
            theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity,
                ),
            },
        },
    },
}));


export default function Drawers({ setLoggedIn }) {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const [searchanchorEl, setSearchAnchorEl] = React.useState(null);
    const opens = Boolean(searchanchorEl);
    const handleClick = (event) => {
        setSearchAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setSearchAnchorEl(null);
    };

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleCloseUserMenu = (value) => {
        setAnchorElUser(null);
        if (value === 'Logout') {
            setLoggedIn(false)
            localStorage.removeItem("isLoggedIn")
        }
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleCloseUserMenu}>My account</MenuItem>
            <MenuItem onClick={() => handleCloseUserMenu('Logout')}>Logout</MenuItem>
        </Menu>
    );


    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <Button variant="contained" size="small" style={{ backgroundColor: "transparent" }}>Home</Button>
            </MenuItem>

            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Badge badgeContent={17} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />

                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="fixed" open={open} style={{ backgroundColor: "#3b4a54" }} >
                        <Toolbar>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={handleDrawerOpen}
                                edge="start"
                                sx={{
                                    marginRight: 5,
                                    ...(open && { display: 'none' }),
                                }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Button variant="contained" size="small" disableElevation style={{ backgroundColor: "transparent", textTransform: "none" }}> <HomeIcon /> </Button>
                            <Box sx={{ flexGrow: 0.5 }} />
                            <Typography variant="h6" noWrap component="div">
                                Kerala Service Magazine Subscription Application
                            </Typography>

                            <Box sx={{ flexGrow: 1 }} />

                            <IconButton id="demo-customized-button"
                                aria-controls={opens ? 'demo-customized-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={opens ? 'true' : undefined}
                                variant="contained"
                                onClick={handleClick}
                                endIcon={<KeyboardArrowDownIcon />}>
                                <Avatar variant="square" sx={{ width: 35, height: 35 }} style={{ borderRadius: "7px", background: "#dd1818", boxShadow: "inset 20px 20px 60px #bcb9b9 inset -20px -20px 60px #fefbfb" }} > <FaSearch /> </Avatar>
                            </IconButton>
                            <StyledMenu
                                id="demo-customized-menu"
                                MenuListProps={{
                                    'aria-labelledby': 'demo-customized-button',
                                }}
                                anchorEl={searchanchorEl}
                                open={opens}
                                onClose={handleClose}
                            >
                                <Search >
                                    <SearchIconWrapper >
                                        <SearchIcon />
                                    </SearchIconWrapper>
                                    <StyledInputBase
                                        placeholder="Search…"
                                        inputProps={{ 'aria-label': 'search' }}
                                    />
                                </Search>
                            </StyledMenu>

                            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                                <NotificationSection />

                                <IconButton
                                    size="large"
                                    edge="end"
                                    aria-label="account of current user"
                                    aria-controls={menuId}
                                    aria-haspopup="true"
                                    onClick={handleProfileMenuOpen}
                                    color="inherit"
                                >
                                    <AccountCircle />
                                </IconButton>
                            </Box>
                            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                                <IconButton
                                    size="large"
                                    aria-label="show more"
                                    aria-controls={mobileMenuId}
                                    aria-haspopup="true"
                                    onClick={handleMobileMenuOpen}
                                    color="inherit"
                                >
                                    <MoreIcon />
                                </IconButton>
                            </Box>
                        </Toolbar>
                    </AppBar>
                    {renderMobileMenu}
                    {renderMenu}
                </Box>

                <Drawer variant="permanent" open={open} >
                    <DrawerHeader style={{ backgroundColor: "#3b4a54" }}>
                        <IconButton onClick={handleDrawerClose} style={{ color: "#dd1818" }} >
                            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                        </IconButton>
                    </DrawerHeader>
                    <Divider />

                    <List>
                        <Link style={{ textTransform: "none", textDecoration: "none", color: "#000000" }} to="/notfound">
                            <ListItem disablePadding sx={{ display: 'block' }}>
                                <ListItemButton >
                                    <Avatar sx={{ bgcolor: "#dd1818", borderRadius: 1, }} variant="square">
                                        <ListItemIcon style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                            <DashboardIcon style={{ color: "#ffffff" }} />
                                        </ListItemIcon>
                                    </Avatar>
                                    <ListItemText primary="Dashboard" style={{ color: "#ffffff", marginLeft: 10 }} />
                                </ListItemButton>
                            </ListItem>
                        </Link>

                        <Link style={{ textTransform: "none", textDecoration: "none", color: "#000000" }} to="/subscriptionmanagementtable">
                            <ListItem disablePadding sx={{ display: 'block' }}>
                                <ListItemButton>
                                    <Avatar sx={{ bgcolor: "#dd1818", borderRadius: 2, }} variant="square">
                                        <ListItemIcon style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                            <SubscriptionsIcon style={{ color: "#ffffff" }} />
                                        </ListItemIcon>
                                    </Avatar>
                                    <ListItemText primary="Subscription " style={{ color: "#ffffff", marginLeft: 10 }} />
                                </ListItemButton>
                            </ListItem>
                        </Link>

                        <Link style={{ textTransform: "none", textDecoration: "none", color: "#000000" }} to="/notfound">
                            <ListItem disablePadding sx={{ display: 'block' }}>
                                <ListItemButton>
                                    <Avatar sx={{ bgcolor: "#dd1818", borderRadius: 2, }} variant="square">
                                        <ListItemIcon style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                            <CompareIcon style={{ color: "#ffffff" }} />
                                        </ListItemIcon>
                                    </Avatar>
                                    <ListItemText primary="Edition " style={{ color: "#ffffff", marginLeft: 10 }} />
                                </ListItemButton>
                            </ListItem>
                        </Link>

                        <Link style={{ textTransform: "none", textDecoration: "none", color: "#000000" }} to="/paymenttable">
                            <ListItem disablePadding sx={{ display: 'block' }}>
                                <ListItemButton>
                                    <Avatar sx={{ bgcolor: "#dd1818", borderRadius: 2, }} variant="square">
                                        <ListItemIcon style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                            <CurrencyRupeeIcon style={{ color: "#ffffff" }} />
                                        </ListItemIcon>
                                    </Avatar>
                                    <ListItemText primary="Payment" style={{ color: "#ffffff", marginLeft: 10 }} />
                                </ListItemButton>
                            </ListItem>
                        </Link>

                    </List>
                    <Divider />

                    <List>
                        <Link style={{ textTransform: "none", textDecoration: "none", color: "#000000" }} to="/districtcommitteemanagementtable">
                            <ListItem disablePadding sx={{ display: 'block' }}>
                                <ListItemButton>
                                    <Avatar sx={{ bgcolor: "#dd1818", borderRadius: 2, }} variant="square">
                                        <ListItemIcon style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                            <GroupIcon style={{ color: "#ffffff" }} />
                                        </ListItemIcon>
                                    </Avatar>
                                    <ListItemText primary="District Committee " style={{ color: "#ffffff", marginLeft: 10 }} />
                                </ListItemButton>
                            </ListItem>
                        </Link>

                        <Link style={{ textTransform: "none", textDecoration: "none", color: "#000000" }} to="/areacommitteemanagementtable">
                            <ListItem disablePadding sx={{ display: 'block' }}>
                                <ListItemButton>
                                    <Avatar sx={{ bgcolor: "#dd1818", borderRadius: 2, }} variant="square">
                                        <ListItemIcon style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                            <GroupIcon style={{ color: "#ffffff" }} />
                                        </ListItemIcon>
                                    </Avatar>
                                    <ListItemText primary="Area Committee " style={{ color: "#ffffff", marginLeft: 10 }} />
                                </ListItemButton>
                            </ListItem>
                        </Link>

                        <Link style={{ textTransform: "none", textDecoration: "none", color: "#000000" }} to="/unitcommitteemanagementtable">
                            <ListItem disablePadding sx={{ display: 'block' }}>
                                <ListItemButton>
                                    <Avatar sx={{ bgcolor: "#dd1818", borderRadius: 2, }} variant="square">
                                        <ListItemIcon style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                            <GroupAddIcon style={{ color: "#ffffff" }} />
                                        </ListItemIcon>
                                    </Avatar>
                                    <ListItemText primary="Unit Committee " style={{ color: "#ffffff", marginLeft: 10 }} />
                                </ListItemButton>
                            </ListItem>
                        </Link>

                    </List>
                    <Divider />
                    <List>
                        <Link style={{ textTransform: "none", textDecoration: "none", color: "#000000" }} to="/departmentmanagementtable">
                            <ListItem disablePadding sx={{ display: 'block' }}>
                                <ListItemButton>
                                    <Avatar sx={{ bgcolor: "#dd1818", borderRadius: 2, }} variant="square">
                                        <ListItemIcon style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                            <AnalyticsIcon style={{ color: "#ffffff" }} />
                                        </ListItemIcon>
                                    </Avatar>
                                    <ListItemText primary="Department " style={{ color: "#ffffff", marginLeft: 10 }} />
                                </ListItemButton>
                            </ListItem>
                        </Link>

                        <Link style={{ textTransform: "none", textDecoration: "none", color: "#000000" }} to="/officemanagementtable">
                            <ListItem disablePadding sx={{ display: 'block' }}>
                                <ListItemButton>
                                    <Avatar sx={{ bgcolor: "#dd1818", borderRadius: 2, }} variant="square">
                                        <ListItemIcon style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                            <MapsHomeWorkIcon style={{ color: "#ffffff" }} />
                                        </ListItemIcon>
                                    </Avatar>
                                    <ListItemText primary="Office " style={{ color: "#ffffff", marginLeft: 10 }} />
                                </ListItemButton>
                            </ListItem>
                        </Link>

                        <Link style={{ textTransform: "none", textDecoration: "none", color: "#000000" }} to="/reportscard ">
                            <ListItem disablePadding sx={{ display: 'block' }}>
                                <ListItemButton>
                                    <Avatar sx={{ bgcolor: "#dd1818", borderRadius: 2, }} variant="square">
                                        <ListItemIcon style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                            <AssessmentIcon style={{ color: "#ffffff" }} />
                                        </ListItemIcon>
                                    </Avatar>
                                    <ListItemText primary="Reports" style={{ color: "#ffffff", marginLeft: 10 }} />
                                </ListItemButton>
                            </ListItem>
                        </Link>

                    </List>

                    <Divider />

                    <List>
                        <Link style={{ textTransform: "none", textDecoration: "none", color: "#000000" }} to="/masterdata">
                            <ListItem disablePadding sx={{ display: 'block' }}>
                                <ListItemButton>
                                    <Avatar sx={{ bgcolor: "#dd1818", borderRadius: 2, }} variant="square">
                                        <ListItemIcon style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                            <TableChartIcon style={{ color: "#ffffff" }} />
                                        </ListItemIcon>
                                    </Avatar>
                                    <ListItemText primary="Master Data" style={{ color: "#ffffff", marginLeft: 10 }} />
                                </ListItemButton>
                            </ListItem>
                        </Link>

                        <Link style={{ textTransform: "none", textDecoration: "none", color: "#000000" }} to="/platformsettings">
                            <ListItem disablePadding sx={{ display: 'block' }}>
                                <ListItemButton>
                                    <Avatar sx={{ bgcolor: "#dd1818", borderRadius: 2, }} variant="square">
                                        <ListItemIcon style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                            <SettingsApplicationsIcon style={{ color: "#ffffff" }} />
                                        </ListItemIcon>
                                    </Avatar>
                                    <ListItemText primary="Platform Settings" style={{ color: "#ffffff", marginLeft: 10 }} />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                    </List>

                    <Divider />

                    <Box marginTop="80px">
                        <Grid container spacing={1} justifyContent="space-evenly">
                            <Grid item xs={12} md={12} style={{ display: "flex", alignItems: "center", justifyContent: "center", paddingTop: 25 }}>
                                <Typography sx={{ color: "#ffffff", marginRight: 2, fontSize: "13px" }} gutterBottom>
                                    Contact Us
                                </Typography>
                                <Typography sx={{ color: "#ffffff", marginRight: 2, fontSize: "13px" }} gutterBottom>
                                    Privacy Policy
                                </Typography>
                            </Grid>

                            <Grid item xs={12} md={12} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <Typography sx={{ color: "#ffffff", marginRight: 2, fontSize: "13px" }} gutterBottom>
                                    Terms and Condition
                                </Typography>
                                <Typography sx={{ color: "#ffffff", marginRight: 2, fontSize: "13px" }} gutterBottom>
                                    Legal Info
                                </Typography>
                            </Grid>

                            <Grid item xs={12} md={12} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <Typography sx={{ color: "#ffffff", marginRight: 2, fontSize: "13px" }} gutterBottom>
                                    FAQ & Help
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Drawer>
            </Box>
        </>

    );
}
