import React from 'react';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Card, Typography, CardContent, Grid, List, ListItem, ListItemText, ListItemIcon, } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
    return (
        <>
            <Grid container spacing={2} style={{ marginBottom: "20px" }}>
                <Grid item xs={12} md={12} style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", minHeight: "50%" }} sx={{ minWidth: "100%" }} >
                    <Card style={{ borderTop: "5px solid #dd1818", borderRadius: "15px", marginTop: "20px", alignItems: "stretch", minHeight: "50%", marginBottom: "30px" }} sx={{ minWidth: "100%" }}>
                        <CardContent>
                            <Grid container spacing={1} justifyContent="space-evenly">
                                <Grid item xs={12} md={1} style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}>
                                    <Link to="/">
                                        <ArrowBackIcon sx={{ fontSize: 30 }} style={{ color: "#3b4a54" }} />
                                    </Link>
                                </Grid>
                                <Grid item xs={12} md={11} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <Typography sx={{ fontSize: 30, fontWeight: "bold", color: "#3b4a54" }} align="center" gutterBottom>
                                        PRIVACY POLICY
                                    </Typography>
                                </Grid>
                            </Grid>

                            <List>
                                <ListItem disablePadding>
                                    <ListItemIcon>
                                        <ArrowRightIcon style={{ color: "#005896" }} />
                                    </ListItemIcon>
                                    <ListItemText style={{ fontSize: "10px" }} primary={
                                        <Typography gutterBottom style={{ fontFamily: 'Poppins', fontSize: "13px", color: "#000000" }} align="justify">
                                            Thanks for visiting website of Kerala NGO union, and reviewing our privacy policy.
                                        </Typography>
                                    } />
                                </ListItem>

                                <ListItem disablePadding>
                                    <ListItemIcon>
                                        <ArrowRightIcon style={{ color: "#005896" }} />
                                    </ListItemIcon>
                                    <ListItemText style={{ fontSize: "10px" }} primary={
                                        <Typography gutterBottom style={{ fontFamily: 'Poppins', fontSize: "13px", color: "#000000" }}>
                                            We collect no personal information, like names or addresses, when you visit our website. If
                                            you choose to provide that information to us, it is only used to fulfil your request for
                                            information.
                                        </Typography>
                                    } />
                                </ListItem>

                                <ListItem disablePadding>
                                    <ListItemIcon>
                                        <ArrowRightIcon style={{ color: "#005896" }} />
                                    </ListItemIcon>
                                    <ListItemText style={{ fontSize: "10px" }} primary={
                                        <Typography gutterBottom style={{ fontFamily: 'Poppins', fontSize: "13px", color: "#000000" }} align="justify">
                                            We do collect some technical information when you visit to make your visit seamless. The
                                            section below explains how we handle and collect technical information when you visit our website.
                                        </Typography>
                                    } />
                                </ListItem>


                                <Typography sx={{ fontSize: 24, fontWeight: "bold", color: "#3b4a54" }} align="center" gutterBottom>
                                    Information Collected And Stored Automatically
                                </Typography>

                                <ListItem disablePadding>
                                    <ListItemIcon>
                                        <ArrowRightIcon style={{ color: "#005896" }} />
                                    </ListItemIcon>
                                    <ListItemText style={{ fontSize: "10px" }} primary={
                                        <Typography gutterBottom style={{ fontFamily: 'Poppins', fontSize: "13px", color: "#000000" }}>
                                            When you browse, read pages, or download information on this website, we automatically
                                            gather and store certain technical information about your visit. This information never
                                            identifies who you are. The information we collect and store about your visit is listed below:
                                        </Typography>
                                    } />
                                </ListItem>

                                <ListItem disablePadding>
                                    <ListItemIcon>
                                        <FiberManualRecordIcon style={{ color: "#005896", fontSize: "20px" }} />
                                    </ListItemIcon>
                                    <ListItemText style={{ fontSize: "10px" }} primary={
                                        <Typography gutterBottom style={{ fontFamily: 'Poppins', fontSize: "13px", color: "#000000" }}>
                                            The Internet domain of your service provider (e.g. mtnl.net.in) and IP address (an IP address
                                            is a number that is automatically assigned to your computer whenever you are surfing the
                                            web) from which you access our website.
                                        </Typography>
                                    } />
                                </ListItem>

                                <ListItem disablePadding>
                                    <ListItemIcon>
                                        <FiberManualRecordIcon style={{ color: "#005896", fontSize: "20px" }} />
                                    </ListItemIcon>
                                    <ListItemText style={{ fontSize: "10px" }} primary={
                                        <Typography gutterBottom style={{ fontFamily: 'Poppins', fontSize: "13px", color: "#000000" }}>
                                            The type of browser (such as Firefox, Netscape, or Internet Explorer) and operating system
                                            (Windows, Linux) used to access our site.
                                        </Typography>
                                    } />
                                </ListItem>

                                <ListItem disablePadding>
                                    <ListItemIcon>
                                        <FiberManualRecordIcon style={{ color: "#005896", fontSize: "20px" }} />
                                    </ListItemIcon>
                                    <ListItemText style={{ fontSize: "10px" }} primary={
                                        <Typography gutterBottom style={{ fontFamily: 'Poppins', fontSize: "13px", color: "#000000" }}>
                                            The date and time you access/accessed our site.
                                        </Typography>
                                    } />
                                </ListItem>

                                <ListItem disablePadding>
                                    <ListItemIcon>
                                        <FiberManualRecordIcon style={{ color: "#005896", fontSize: "20px" }} />
                                    </ListItemIcon>
                                    <ListItemText style={{ fontSize: "10px" }} primary={
                                        <Typography gutterBottom style={{ fontFamily: 'Poppins', fontSize: "13px", color: "#000000" }}>
                                            The pages/URLs you have visited, and
                                        </Typography>
                                    } />
                                </ListItem>

                                <ListItem disablePadding>
                                    <ListItemIcon>
                                        <FiberManualRecordIcon style={{ color: "#005896", fontSize: "20px" }} />
                                    </ListItemIcon>
                                    <ListItemText style={{ fontSize: "10px" }} primary={
                                        <Typography gutterBottom style={{ fontFamily: 'Poppins', fontSize: "13px", color: "#000000" }}>
                                            If you reached this website from another website, the address of that referring website.
                                        </Typography>
                                    } />
                                </ListItem>

                                <ListItem disablePadding>
                                    <ListItemIcon>
                                        <ArrowRightIcon style={{ color: "#005896" }} />
                                    </ListItemIcon>
                                    <ListItemText style={{ fontSize: "10px" }} primary={
                                        <Typography gutterBottom style={{ fontFamily: 'Poppins', fontSize: "13px", color: "#000000" }}>
                                            This information is only used to help us make the site more useful for you. With this data, we
                                            learn about the number of visitors to our site and the types of technology our visitors use. We
                                            never track or record information about individuals and their visits.
                                        </Typography>
                                    } />
                                </ListItem>

                                <Typography sx={{ fontSize: 24, fontWeight: "bold", color: "#3b4a54" }} align="center" gutterBottom>
                                    Cookies
                                </Typography>

                                <ListItem disablePadding>
                                    <ListItemIcon>
                                        <ArrowRightIcon style={{ color: "#005896" }} />
                                    </ListItemIcon>
                                    <ListItemText style={{ fontSize: "10px" }} primary={
                                        <Typography gutterBottom style={{ fontFamily: 'Poppins', fontSize: "13px", color: "#000000" }}>
                                            When you visit some websites, they may download small pieces of software on your
                                            computer/browsing device known as cookies. Some cookies collect personal information to
                                            recognise your computer in the future. We only use non-persistent cookies or “per-session
                                            cookies”.
                                        </Typography>
                                    } />
                                </ListItem>

                                <ListItem disablePadding>
                                    <ListItemIcon>
                                        <ArrowRightIcon style={{ color: "#005896" }} />
                                    </ListItemIcon>
                                    <ListItemText style={{ fontSize: "10px" }} primary={
                                        <Typography gutterBottom style={{ fontFamily: 'Poppins', fontSize: "13px", color: "#000000" }}>
                                            Per-session cookies serve technical purposes, like providing seamless navigation through this
                                            website. These cookies do not collect personal information on users and they are deleted as
                                            soon as you leave our website. The cookies do not permanently record data and they are not
                                            stored on your computer’s hard drive. The cookies are stored in memory and are only
                                            available during an active browser session. Again, once you close your browser, the cookie
                                            disappears.
                                        </Typography>
                                    } />
                                </ListItem>

                                <Typography sx={{ fontSize: 24, fontWeight: "bold", color: "#3b4a54" }} align="center" gutterBottom>
                                    If You Send Us Personal Information
                                </Typography>

                                <ListItem disablePadding>
                                    <ListItemIcon>
                                        <ArrowRightIcon style={{ color: "#005896" }} />
                                    </ListItemIcon>
                                    <ListItemText style={{ fontSize: "10px" }} primary={
                                        <Typography gutterBottom style={{ fontFamily: 'Poppins', fontSize: "13px", color: "#000000" }}>
                                            We do not collect personal information for any purpose other than to respond to you (for
                                            example, to respond to your questions or provide subscriptions you have chosen). If you
                                            choose to provide us with personal information, like filling out a Contact Us form, with an e-
                                            mail address or postal address, we use that information to respond to your message, and to
                                            help you get the information you have requested. We only share the information you give us
                                            with another Government agency if your question relates to that agency, or as otherwise
                                            required by law.
                                        </Typography>
                                    } />
                                </ListItem>

                                <ListItem disablePadding>
                                    <ListItemIcon>
                                        <ArrowRightIcon style={{ color: "#005896" }} />
                                    </ListItemIcon>
                                    <ListItemText style={{ fontSize: "10px" }} primary={
                                        <Typography gutterBottom style={{ fontFamily: 'Poppins', fontSize: "13px", color: "#000000" }}>
                                            Our website never collects information or creates individual profiles for commercial
                                            marketing. While you must provide an email address for a localised response to any incoming
                                            questions or comments to us, we recommend that you do NOT include any other personal
                                            information.
                                        </Typography>
                                    } />
                                </ListItem>


                                <Typography sx={{ fontSize: 24, fontWeight: "bold", color: "#3b4a54" }} align="center" gutterBottom>
                                    Site Security
                                </Typography>

                                <ListItem disablePadding>
                                    <ListItemIcon>
                                        <ArrowRightIcon style={{ color: "#005896" }} />
                                    </ListItemIcon>
                                    <ListItemText style={{ fontSize: "10px" }} primary={
                                        <Typography gutterBottom style={{ fontFamily: 'Poppins', fontSize: "13px", color: "#000000" }}>
                                            For site security purposes and to ensure that this service remains available to all users, this
                                            Government computer system employs commercial software programs to monitor network
                                            traffic to identify unauthorised attempts to upload or change information, or otherwise cause
                                            damage.
                                        </Typography>
                                    } />
                                </ListItem>

                                <ListItem disablePadding>
                                    <ListItemIcon>
                                        <ArrowRightIcon style={{ color: "#005896" }} />
                                    </ListItemIcon>
                                    <ListItemText style={{ fontSize: "10px" }} primary={
                                        <Typography gutterBottom style={{ fontFamily: 'Poppins', fontSize: "13px", color: "#000000" }}>
                                            Except for authorised law enforcement investigations, no other attempts are made to
                                            identify individual users or their usage habits. Raw data logs are used for no other purposes
                                            and are scheduled for regular deletion.
                                        </Typography>
                                    } />
                                </ListItem>

                                <ListItem disablePadding>
                                    <ListItemIcon>
                                        <ArrowRightIcon style={{ color: "#005896" }} />
                                    </ListItemIcon>
                                    <ListItemText style={{ fontSize: "10px" }} primary={
                                        <Typography gutterBottom style={{ fontFamily: 'Poppins', fontSize: "13px", color: "#000000" }}>
                                            Unauthorised attempts to upload information or change information on this service are
                                            strictly prohibited and may be punishable under the Indian IT Act (2000).
                                        </Typography>
                                    } />
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}


