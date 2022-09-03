import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawers from "./components/Pages/Drawer/Drawer";
import NotFound from "./components/Pages/Error/NotFound";
import Footer from "./components/Main/Footer/Footer";

import TermsCondition from "./components/Pages/TermsCondition/TermsCondition";
import PrivacyPolicy from "./components/Pages/PrivacyPolicy/PrivacyPolicy";
import MyAccount from "./components/Forms/MyAccount/MyAccount";

import PlatformSettings from "./components/Pages/PlatformSettings/PlatformSettings";
import MasterData from "./components/Pages/MasterData/MasterData";
import ContactUs from "./components/Pages/ContactUs/ContactUs";
import Subscription from "./components/Pages/Subscription/Subscription";
import ReportsCard from "./components/Pages/Reports/ReportsCard";
import OrderCreationCard from "./components/Pages/OrderCreation/OrderCreationCard"

import CitizensubscriptionportalForm from "./components/Forms/CitizenSubscriptionPortal/CitizensubscriptionportalForm";

import UnitCommitteeManagementForm from "./components/Forms/UnitCommitteeManagement/UnitCommitteeManagementForm";
import SubscriptionManagementForm from "./components/Forms/SubscriptionManagement/SubscriptionManagementForm";
import DistrictCommitteeManagementForm from "./components/Forms/DistrictCommitteeManagement/DistrictCommitteeManagementForm";
import AreacommitteemanagementForm from "./components/Forms/AreaCommitteeManagement/AreacommitteemanagementForm";

import OrdercreationForm from "./components/Forms/OrderCreation/OrdercreationForm";
import OrderCreationTable from "./components/Tables/OrderCreation/OrderCreationTable";

import PaymentForm from "./components/Forms/Payment/PaymentForm";
import DepartmentmanagementForm from "./components/Forms/DepartmentManagement/DepartmentmanagementForm";
import OfficeManagementForm from "./components/Forms/OfficeManagement/OfficemanagementForm";
import ChangePasswordForm from "./components/Forms/ChangePassword/ChangePasswordForm";

import UnitcommitteemanagementTable from "./components/Tables/UnitCommitteeManagement/UnitcommitteemanagementTable";
import DistrictCommitteeManagementTable from "./components/Tables/DistrictCommitteeManagement/DistrictCommitteeManagementTable";
import SubscriptionmanagementTable from "./components/Tables/SubscriptionManagement/SubscriptionmanagementTable";
import AreacommitteemanagementTable from "./components/Tables/AreaCommitteeManagement/AreacommitteemanagementTable"

import PaymentTable from "./components/Tables/Payment/PaymentTable";
import DepartmentManagementTable from "./components/Tables/DepartmentManagement/DepartmentManagementTable";
import OfficemanagementTable from "./components/Tables/OfficeManagement/OfficemanagementTable";
import EditionmanagementTable from "./components/Tables/EditionManagement/EditionmanagementTable";
import UnitCommitteeLoginTable from "./components/Tables/OrderCreation/UnitCommitteeLoginTable";
import AreaCommitteeLoginTable from "./components/Tables/OrderCreation/AreaCommitteeLoginTable";
import StateCommitteeLoginTable from "./components/Tables/OrderCreation/StateCommitteeLoginTable";


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
                <Route path="/statuscheckform" element={<StatuscheckForm setLoggedIn={setLoggedIn} />} />
                <Route path="/citizensubscriptionportalform" element={<CitizensubscriptionportalForm setLoggedIn={setLoggedIn} />} />

                <Route path="*" element={<Navigate to="/login" replace />} />
            </Routes>
        )
    }

    return (
        <>
            <Box sx={{ display: "flex" }} >
                <Drawers setLoggedIn={setLoggedIn} />
                <Box component="main" style={{ flexGrow: 1, background: "#ffffff", minHeight: "100vh", maxHeight: "auto", boxShadow: "inset 2px 2px 20px #bebebe,-2px -2px 20px #ffffff" }} sx={{ pt: 10, px: 1 }}>
                    <Routes>

                        <Route path="/" element={<PlatformSettings />} />
                        <Route path="/platformsettings" element={<PlatformSettings />} />
                        <Route path="/masterdata" element={<MasterData />} />
                        <Route path="/contactus" element={<ContactUs />} />
                        <Route path="/reportscard" element={<ReportsCard />} />
                        <Route path="/footer" element={<Footer />} />

                        <Route path="/termscondition" element={<TermsCondition />} />
                        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
                        <Route path="/myaccount" element={<MyAccount />} />
                        <Route path="/ordercreationcard" element={<OrderCreationCard />} />

                        
                        <Route path="/subscription" element={<Subscription />} />

                        <Route path="/unitcommitteemanagementtable" element={<UnitcommitteemanagementTable />} />
                        <Route path="/districtcommitteemanagementtable" element={<DistrictCommitteeManagementTable />} />
                        <Route path="/subscriptionmanagementtable" element={<SubscriptionmanagementTable />} />
                        <Route path="/paymenttable" element={<PaymentTable />} />
                        <Route path="/departmentmanagementtable" element={<DepartmentManagementTable />} />
                        <Route path="/officemanagementtable" element={<OfficemanagementTable />} />
                        <Route path="/areacommitteemanagementtable" element={<AreacommitteemanagementTable />} />
                        <Route path="/editionmanagementtable" element={<EditionmanagementTable />} />
                        <Route path="/unitcommitteelogintable" element={<UnitCommitteeLoginTable />} />
                        <Route path="/areacommitteelogintable" element={<AreaCommitteeLoginTable />} />
                        <Route path="/statecommitteelogintable" element={<StateCommitteeLoginTable />} />
                        <Route path="/ordercreationtable" element={<OrderCreationTable />} />


                        <Route path="/unitcommitteemanagementform" element={<UnitCommitteeManagementForm />} />
                        <Route path="/subscriptionmanagementform" element={<SubscriptionManagementForm />} />
                        <Route path="/districtcommitteemanagementform" element={<DistrictCommitteeManagementForm />} />
                        <Route path="/paymentform" element={<PaymentForm />} />
                        <Route path="/departmentmanagementform" element={<DepartmentmanagementForm />} />
                        <Route path="/officemanagementform" element={<OfficeManagementForm />} />
                        <Route path="/changepasswordform" element={<ChangePasswordForm />} />
                        <Route path="/areacommitteemanagementform" element={<AreacommitteemanagementForm />} />
                        <Route path="/ordercreationform" element={<OrdercreationForm />} />

                        <Route path="/notfound" element={<NotFound />} />
                        <Route path="*" element={<Navigate to="/" replace />} />

                    </Routes>
                    <Footer />
                </Box>
            </Box>
        </>
    );
}

export default AppRouter;
