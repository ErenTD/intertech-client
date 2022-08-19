import React from "react";
import InfoCard from "../components/InfoCard";
import WithdrawCard from "../components/WithdrawCard";

const AHMET = {
    name: "Ahmet",
    address: "0x9e5bF30a29560166fD47D461Dd1201a3bF56CEF4",
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

const ChildPage = () => {
    return (
        <div
            style={{
                marginLeft: "12%",
                marginRight: "12%",
                marginTop: "5rem",
                display: "flex",
                justifyContent: "center",
            }}
        >
            <InfoCard person={AHMET} style={{ marginRight: "3rem" }} />
            <WithdrawCard person={AHMET} style={{ marginLeft: "3rem" }} />
        </div>
    );
};

export default ChildPage;
