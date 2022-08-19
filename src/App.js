import React, { useState } from "react";
import { ethers } from "ethers";
import { Routes, Route, Link } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import ChildPage from "./pages/ChildPage";
import MenuBar from "./components/MenuBar";
import FooterBar from "./components/FooterBar";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

const provider = new ethers.providers.Web3Provider(window.ethereum);

const App = () => {
    const [current, setCurrent] = useState("sub1");
    const [userType, setUserType] = useState(0);

    const onClick = (e) => {
        // console.log("click", e);
        setCurrent(e.key);
    };

    const connect = async () => {
        await provider.send("eth_requestAccounts", []);
    };

    // DELETE AFTER DEVELOPMENT (TEMP LINKS)
    const ss0 = () => {
        setUserType(0);
        setCurrent("sub1");
    };
    const ss1 = () => {
        setUserType(1);
        setCurrent("sub4");
    };
    const ss2 = () => {
        setUserType(2);
        setCurrent("sub4");
    };
    const ss3 = () => {
        setUserType(3);
        setCurrent("sub4");
    };
    // END OF DELETE AFTER DEVELOPMENT AREA

    return (
        <div>
            {userType === 0 && (
                <MenuBar
                    onClick={onClick}
                    current={current}
                    connect={connect}
                />
            )}
            {userType === 1 && (
                <MenuBar onClick={onClick} current={current} typeChild />
            )}
            {userType === 2 && (
                <MenuBar onClick={onClick} current={current} typeParent />
            )}
            {userType === 3 && (
                <MenuBar onClick={onClick} current={current} typeAdmin />
            )}
            <Routes>
                <Route path="/" element={<Landing current={current} />} />
                <Route path="child" element={<Child />} />
                <Route path="parent" element={<Parent />} />
                <Route path="admin" element={<Admin />} />
            </Routes>
            <FooterBar />
            {/* DELETE AFTER DEVELOPMENT (TEMP LINKS) */}
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
            {/* END OF DELETE AFTER DEVELOPMENT AREA */}
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
    return <div>TODO: Parent Page</div>;
};

const Admin = () => {
    return <div>TODO: Admin Page</div>;
};

export default App;
