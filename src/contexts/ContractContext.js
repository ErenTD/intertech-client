import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { abi, address } from "../abi";
import { ethers } from "ethers";

export const ContractContext = createContext();

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const contract = new ethers.Contract(address, abi, provider);

export const ContractContextProvider = (props) => {
    const [accountType, setAccountType] = useState(0);
    const [current, setCurrent] = useState("sub1");

    const navigate = useNavigate();
    let address;

    const connect = async () => {
        await provider.send("eth_requestAccounts", []);
        address = await signer.getAddress();
        const accountTypeString = await contract.getRole(address);
        if (accountTypeString === "child") setAccountType(1);
        if (accountTypeString === "parent") setAccountType(2);
        if (accountTypeString === "admin") setAccountType(3);
        navigate(`/${accountTypeString}`);
        setCurrent("sub4");
    };

    return (
        <ContractContext.Provider
            value={{
                accountType,
                setAccountType,
                current,
                setCurrent,
                connect,
            }}
        >
            {props.children}
        </ContractContext.Provider>
    );
};
