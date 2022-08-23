import React, { useState, useContext } from "react";
import { Routes, Route, Link } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import ChildPage from "./pages/ChildPage";
import ParentDeposit from "./pages/ParentDeposit";
import MenuBar from "./components/MenuBar";
import FooterBar from "./components/FooterBar";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

import {
    ContractContextProvider,
    ContractContext,
} from "./contexts/ContractContext";

//DELETE ME LATER
let glbsc;

const App = () => {
    const [current, setCurrent] = useState("sub1");
    //DELETE ME LATER
    glbsc = setCurrent;

    const onClick = (e) => {
        // console.log("click", e);
        setCurrent(e.key);
    };

    return (
        <div>
            <ContractContextProvider>
                <MenuBar onClick={onClick} />
                <Routes>
                    <Route path="/" element={<Landing current={current} />} />
                    <Route path="child" element={<Child />} />
                    <Route path="parent" element={<Parent />} />
                    <Route path="admin" element={<Admin />} />
                </Routes>
                <FooterBar />
                <Temp />
            </ContractContextProvider>
        </div>
    );
};

const Landing = (props) => {
    return (
        <div>
            {props.current === "sub1" && <LandingPage />}
            {props.current === "sub2" && <AboutPage />}
            {props.current === "sub3" && <ContactPage />}
        </div>
    );
};

const Child = () => {
    return <ChildPage />;
};

const Parent = () => {
    return <ParentDeposit />;
};

const Admin = () => {
    return <div>TODO: Admin Page</div>;
};

//DELETE ME LATER
const Temp = () => {
    const { setAccountType } = useContext(ContractContext);
    const setCurrent = glbsc;

    const ss0 = () => {
        setAccountType(0);
        setCurrent("sub1");
    };
    const ss1 = () => {
        setAccountType(1);
        setCurrent("sub4");
    };
    const ss2 = () => {
        setAccountType(2);
        setCurrent("sub4");
    };
    const ss3 = () => {
        setAccountType(3);
        setCurrent("sub4");
    };

    return (
        <>
            Temporary Links:
            <Link to="/" onClick={ss0}>
                Home
            </Link>
            <Link to="child" onClick={ss1}>
                Child
            </Link>
            <Link to="parent" onClick={ss2}>
                Parent
            </Link>
            <Link to="admin" onClick={ss3}>
                Admin
            </Link>
        </>
    );
};

export default App;
