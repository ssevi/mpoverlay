import React from 'react';
import { Box,  Grid } from '@mui/material';
import White from "../../../../assets/images/White.jpeg"

import Topcards from '../TopCards.jsx/Topcards';
import SecondCard from './SecondCard/SecondCard';
import ThirdCards from "./ThirdCard/ThirdCards"


function DashboardMain() {
    return (
        <>

            <Grid container spacing={1} style={{ backgroundImage: `url(${White})`, backgroundPosition: "center", backgroundSize: "cover", height: "85vh" }}>
                <Grid item xs={12} md={12} >


                    <Box mb={3} >
                        <Grid container spacing={1}>
                            <Grid item xs={12} lg={12}>
                                <Topcards />
                            </Grid>

                            <Grid item xs={12} lg={12}>
                                <SecondCard />
                            </Grid>

                            <Grid item xs={12} lg={12}>
                                <ThirdCards />
                            </Grid>

                        </Grid>
                    </Box>
                </Grid>
            </Grid>

        </>
    )
}

export default DashboardMain

