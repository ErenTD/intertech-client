import React, { useState } from "react";
import LandingPage from "./pages/LandingPage";
import MenuBar from "./components/MenuBar";
import FooterBar from "./components/FooterBar";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

function App() {
    const [current, setCurrent] = useState("sub1");

    const onClick = (e) => {
        // console.log("click", e);
        setCurrent(e.key);
    };

    return (
        <div>
            <MenuBar onClick={onClick} current={current} />
            {current === "sub1" && <LandingPage />}
            {current === "sub2" && <AboutPage />}
            {current === "sub3" && <ContactPage />}
            <FooterBar />
        </div>
    );
}

export default App;
