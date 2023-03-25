import { Routes, Route, BrowserRouter } from "react-router-dom";

import App from "./app/app";
import Home from "./home/home";
import About from "./about/about";
import Links from "./links/links";

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App child={<Home/>} />} />
                <Route path="/about" element={<App child={<About/>} />} />
                <Route path="/links" element={<App child={<Links/>} />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;