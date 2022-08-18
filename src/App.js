import React, { useState } from "react";
import LandingPage from "./pages/LandingPage";
import MenuBar from "./components/MenuBar";
import FooterBar from "./components/FooterBar";
import AboutPage from "./pages/AboutPage";

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
            <FooterBar />
        </div>
    );
}

export default App;
