import React, { useState } from "react";
import { ethers } from "ethers";

import LandingPage from "./pages/LandingPage";
import MenuBar from "./components/MenuBar";
import FooterBar from "./components/FooterBar";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

const provider = new ethers.providers.Web3Provider(window.ethereum);

function App() {
    const [current, setCurrent] = useState("sub1");

    const onClick = (e) => {
        // console.log("click", e);
        setCurrent(e.key);
    };

    const connect = async () => {
        await provider.send("eth_requestAccounts", []);
    };

    return (
        <div>
            <MenuBar onClick={onClick} current={current} connect={connect} />
            {current === "sub1" && <LandingPage />}
            {current === "sub2" && <AboutPage />}
            {current === "sub3" && <ContactPage />}
            <FooterBar />
        </div>
    );
}

export default App;
