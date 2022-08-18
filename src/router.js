import { Routes, Route } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawers from "./components/Pages/Drawer/Drawer";

import Login from "./components/Main/Login";
import StatuscheckForm from "./components/Forms/StatusCheck/StatuscheckForm";

export default function AppRouter() {
    return (
        <>
            <Box sx={{ display: "flex" }} >
                <Drawers />
                <Box component="main" style={{ flexGrow: 1, background: "#ffffff", minHeight: "100vh", maxHeight: "auto", boxShadow: "inset 2px 2px 20px #bebebe,-2px -2px 20px #ffffff" }} sx={{ pt: 10, px: 2 }}>
                <Routes>
                    {/* <Route path="/" element={<Login />} />
                    <Route path="/satuscheckform" element={<StatuscheckForm />} /> */}
                </Routes>
            </Box>
        </Box> 
</>
    );
}
