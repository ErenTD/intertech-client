import React from "react";
import "antd/dist/antd.min.css";

import InfoCard from "../components/InfoCard";

const AHMET = {
    name: "Ahmet",
    age: 345200000,
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
        <div style={{ marginLeft: "12%", marginRight: "12%" }}>
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
                    <h3>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aliquam dictum lectus non purus gravida fringilla. Nunc
                        tincidunt augue mauris, vel ultrices nibh tempus id. In
                        blandit magna a vulputate viverra.
                    </h3>
                </div>
                <div style={{ marginLeft: "1rem", marginRight: "20rem" }}>
                    <InfoCard person={AHMET} />
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
