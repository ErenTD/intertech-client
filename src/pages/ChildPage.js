import React, { useContext } from "react";
import { ContractContext } from "../contexts/ContractContext";
import InfoCard from "../components/InfoCard";
import WithdrawCard from "../components/WithdrawCard";

const ChildPage = () => {
    const { childObject } = useContext(ContractContext);

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
            <InfoCard person={childObject} style={{ marginRight: "3rem" }} />
            <WithdrawCard person={childObject} style={{ marginLeft: "3rem" }} />
        </div>
    );
};

export default ChildPage;
