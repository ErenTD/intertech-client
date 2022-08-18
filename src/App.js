import React, { useState } from "react";
import LandingPage from "./LandingPage";
import MenuBar from "./components/MenuBar";
import FooterBar from "./components/FooterBar";

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
            <FooterBar />
        </div>
    );
}

export default App;
