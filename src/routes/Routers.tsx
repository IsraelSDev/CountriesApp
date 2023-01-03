import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NotFound from "../pages/404/404";
import Home from "../pages/Home/Home";


const Routers = (): JSX.Element => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" index element={<Navigate to={"/home"} />} />
                <Route path="/home" element={<Home />} />
                <Route path="*" element={< NotFound />} />
            </Routes>
        </BrowserRouter >
    );
}

export default Routers;
