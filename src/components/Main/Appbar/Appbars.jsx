import * as React from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Stack, Container, Button, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { FaSearchPlus } from 'react-icons/fa';
import { FaSearchMinus } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { AiFillFormatPainter } from 'react-icons/ai';
import { Link } from "react-router-dom";

const Appbars = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static" style={{ backgroundColor: "#3b4a54" }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
                            <MenuIcon />
                        </IconButton>

                        <Menu id="menu-appbar" anchorEl={anchorElNav} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'left', }}
                            open={Boolean(anchorElNav)} onClose={handleCloseNavMenu} sx={{ display: { xs: 'block', md: 'none' } }}>

<Link style={{ textDecoration: "none", color:"#000000" }} to="/login">
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">Login</Typography>
                            </MenuItem>
</Link>
  
<Link style={{ textDecoration: "none", color:"#000000" }} to="/statuscheckform">
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center"> Status Check </Typography>
                            </MenuItem>
                            </Link>

                            <Link style={{ textDecoration: "none", color:"#000000" }} to="/citizensubscriptionportalform">
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography textAlign="center"> Citizen Subscription </Typography>
                            </MenuItem>
                            </Link>

                        </Menu>
                    </Box>

                    <Typography gutterBottom sx={{ mr: 2, display: { xs: 'flex', md: 'none' }, flexGrow: 1, color: 'inherit', textDecoration: 'none' }}>
                        Kerala Service Magazine Subscription
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

                        <Link style={{ textDecoration: "none" }} to="/login">
                            <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
                                Login
                            </Button>
                        </Link>

                        <Link style={{ textDecoration: "none" }} to="/statuscheckform">
                            <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
                                Status Check
                            </Button>
                        </Link>

                        <Link style={{ textDecoration: "none" }} to="/citizensubscriptionportalform">
                            <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
                                Citizen Subscription
                            </Button>
                        </Link>

                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        {/* <Stack direction="row" spacing={2}>
                                <IconButton style={{ fontSize: "20px", marginLeft: "-1px" }}> <FaSearchMinus style={{ color: "#ffffff" }} />  </IconButton>
                                <IconButton style={{ fontSize: "20px", marginLeft: "-1px" }}> <FaSearch style={{ color: "#ffffff" }} />  </IconButton>
                                <IconButton style={{ fontSize: "20px", marginLeft: "-1px" }}> <FaSearchPlus style={{ color: "#ffffff" }} />  </IconButton>
                                <IconButton style={{ fontSize: "20px", marginLeft: "-1px" }}> <AiFillFormatPainter style={{ color: "#ffffff" }} />  </IconButton>
                                <Button style={{ fontSize: "18px", color: "#ffffff", textTransform: "none", marginLeft: "-15px" }}>  Mal</Button>
                                <Button style={{ fontSize: "18px", color: "#ffffff", textTransform: "none", marginLeft: "-15px" }}>  Eng </Button>

                            </Stack> */}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Appbars;
