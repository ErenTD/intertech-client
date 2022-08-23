import React, { createContext, useState } from "react";

import { abi, address } from "../abi";
import { ethers } from "ethers";

export const ContractContext = createContext();

const provider = new ethers.providers.Web3Provider(window.ethereum);
const contract = new ethers.Contract(address, abi, provider);

export const ContractContextProvider = (props) => {
    const [accountType, setAccountType] = useState(0);

    const fetchAccountType = async () => {
        // TODO: FETCH FROM CONTRACT
        setAccountType(0);
    };

    const connect = async () => {
        await provider.send("eth_requestAccounts", []);
    };

    return (
        <ContractContext.Provider
            value={{ accountType, connect, setAccountType }}
        >
            {props.children}
        </ContractContext.Provider>
    );
};
