import React from "react";
import "antd/dist/antd.min.css";

import MenuBar from "./components/MenuBar";
import InfoCard from "./components/InfoCard";
import FooterBar from "./components/FooterBar";

const AHMET = {
    name: "Ahmet",
    age: 222900000,
    addr1: {
        eth: 10.2665,
        usd: 1026.65,
    },
    addr2: {
        eth: 20.365,
        usd: 244.38,
    },
};

const LandingPage = () => {
    return (
        <>
            <MenuBar />
            <div
                className="App"
                style={{ marginLeft: "12%", marginRight: "12%" }}
            >
                <div
                    style={{
                        marginTop: "5rem",
                        display: "flex",
                    }}
                >
                    <div
                        style={{
                            marginLeft: "5rem",
                            marginRight: "1rem",
                            width: "25%",
                        }}
                    >
                        <h1>Safest Investment Network</h1>
                        <h3>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Aliquam dictum lectus non purus gravida
                            fringilla. Nunc tincidunt augue mauris, vel ultrices
                            nibh tempus id. In blandit magna a vulputate
                            viverra.
                        </h3>
                        <h3>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Aliquam dictum lectus non purus gravida
                            fringilla. Nunc tincidunt augue mauris, vel ultrices
                            nibh tempus id. In blandit magna a vulputate
                            viverra.
                        </h3>
                    </div>
                    <div style={{ marginLeft: "1rem", marginRight: "20rem" }}>
                        <InfoCard person={AHMET} />
                    </div>
                </div>
            </div>
            <FooterBar />
        </>
    );
};

export default LandingPage;
