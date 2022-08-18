import React from "react";
import "antd/dist/antd.min.css";

import { Button } from "antd";
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
        <div
            className="App"
            style={{ marginLeft: "250px", marginRight: "250px" }}
        >
            <MenuBar />
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aliquam dictum lectus non purus gravida fringilla. Nunc
                        tincidunt augue mauris, vel ultrices nibh tempus id. In
                        blandit magna a vulputate viverra.
                    </h3>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginLeft: "auto",
                            marginRight: "auto",
                            marginTop: "10%",
                        }}
                    >
                        <Button
                            type="primary"
                            size="large"
                            shape="round"
                            style={{ height: "100px" }}
                        >
                            Start
                            <br />
                            Investing
                            <br />
                            Today
                        </Button>
                        <Button type="text">Learn More</Button>
                    </div>
                </div>
                <div style={{ marginLeft: "1rem", marginRight: "20rem" }}>
                    <InfoCard person={AHMET} />
                </div>
            </div>
            <FooterBar />
        </div>
    );
};

export default LandingPage;
