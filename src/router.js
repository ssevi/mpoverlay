import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawers from "./components/Pages/Drawer/Drawer";
import NotFound from "./components/Pages/Error/NotFound";

import PlatformSettings from "./components/Pages/PlatformSettings/PlatformSettings";
import MasterData from "./components/Pages/MasterData/MasterData";
import Subscription from "./components/Pages/Subscription/Subscription"

import CitizensubscriptionportalForm from "./components/Forms/CitizenSubscriptionPortal/CitizensubscriptionportalForm"
import UnitCommitteeManagementForm from "./components/Forms/UnitCommitteeManagement/UnitCommitteeManagementForm";
import SubscriptionManagementForm from "./components/Forms/SubscriptionManagement/SubscriptionManagementForm";
import DistrictCommitteeManagementForm from "./components/Forms/DistrictCommitteeManagement/DistrictCommitteeManagementForm";
import PaymentForm from "./components/Forms/Payment/PaymentForm";
import DepartmentmanagementForm from "./components/Forms/DepartmentManagement/DepartmentmanagementForm";

import UnitcommitteemanagementTable from "./components/Tables/UnitCommitteeManagement/UnitcommitteemanagementTable";
import DistrictCommitteeManagementTable from "./components/Tables/DistrictCommitteeManagement/DistrictCommitteeManagementTable";
import SubscriptionmanagementTable from "./components/Tables/SubscriptionManagement/SubscriptionmanagementTable";
import PaymentTable from "./components/Tables/Payment/PaymentTable";
import DepartmentManagementTable from "./components/Tables/DepartmentManagement/DepartmentManagementTable";

import Login from "./components/Main/Login";
import StatuscheckForm from "./components/Forms/StatusCheck/StatuscheckForm";

const logged = localStorage.getItem("isLoggedIn");
const AppRouter = () => {
	const [loggedIn, setLoggedIn] = useState(logged ? true : false)
	if (!loggedIn) {
		return (
			<Routes>
				<Route path="/" element={<Login setLoggedIn={setLoggedIn} />} />
				<Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
                <Route path="/statuscheckform" element={<StatuscheckForm setLoggedIn={setLoggedIn}/>} />
                <Route path="/citizensubscriptionportalform" element={<CitizensubscriptionportalForm setLoggedIn={setLoggedIn}/>} />

				<Route path="*" element={<Navigate to="/login" replace />} />
			</Routes>
		)
	}
    
    return (
        <>
            <Box sx={{ display: "flex" }} >
                <Drawers setLoggedIn={setLoggedIn}/>
                <Box component="main" style={{ flexGrow: 1, background: "#ffffff", minHeight: "100vh", maxHeight: "auto", boxShadow: "inset 2px 2px 20px #bebebe,-2px -2px 20px #ffffff" }} sx={{ pt: 10, px: 2 }}>
                    <Routes>
                       
                        <Route path="/" element={<PlatformSettings />} />
                        <Route path="/platformsettings" element={<PlatformSettings />} />
                        <Route path="/masterdata" element={<MasterData />} />
                        <Route path="/subscription" element={<Subscription />} />
                                                
                        <Route path="/unitcommitteemanagementtable" element={<UnitcommitteemanagementTable />} />
                        <Route path="/districtcommitteemanagementtable" element={<DistrictCommitteeManagementTable />} />
                        <Route path="/subscriptionmanagementtable" element={<SubscriptionmanagementTable />} />
                        <Route path="/paymenttable" element={<PaymentTable />} />
                        <Route path="/departmentmanagementtable" element={<DepartmentManagementTable />} />
                        
                        
                        <Route path="/unitcommitteemanagementform" element={<UnitCommitteeManagementForm />} />
                        <Route path="/subscriptionmanagementform" element={<SubscriptionManagementForm />} />
                        <Route path="/districtcommitteemanagementform" element={<DistrictCommitteeManagementForm />} />
                        <Route path="/paymentform" element={<PaymentForm />} />
                        <Route path="/departmentmanagementform" element={<DepartmentmanagementForm />} />

                        
                        
                        <Route path="/notfound" element={<NotFound />} />

                    </Routes>
                </Box>
            </Box>
        </>
    );
}

export default AppRouter;
