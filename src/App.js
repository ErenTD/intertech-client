import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import ChildPage from "./pages/ChildPage";
import ParentPage from "./pages/ParentPage";
import AdminPage from "./pages/AdminPage";
import MenuBar from "./components/MenuBar";
import FooterBar from "./components/FooterBar";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

import {
    ContractContextProvider,
    ContractContext,
} from "./contexts/ContractContext";

// import background from "./media/bgimg.svg";

const App = () => {
    return (
        <div
            style={{
                // backgroundImage: `url(${background})`,
                display: "flex",
                minHeight: "100vh",
                flexDirection: "column",
                justifyContent: "space-between",
            }}
        >
            <ContractContextProvider>
                <MenuBar />
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="child" element={<Child />} />
                    <Route path="parent" element={<Parent />} />
                    <Route path="owner" element={<Admin />} />
                </Routes>
                <FooterBar />
            </ContractContextProvider>
        </div>
    );
};

const Landing = () => {
    const { current } = useContext(ContractContext);
    return (
        <div>
            {current === "sub1" && <LandingPage />}
            {current === "sub2" && <AboutPage />}
            {current === "sub3" && <ContactPage />}
        </div>
    );
};

const Child = () => {
    return <ChildPage />;
};

const Parent = () => {
    return <ParentPage />;
};

const Admin = () => {
    return <AdminPage />;
};

export default App;
