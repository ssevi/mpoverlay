import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Main/Login";

export default function AppRouter (){
    return (
<>
            <Routes>
                <Route path="/" element={<Login />} />

            </Routes>
</>
    );
}
