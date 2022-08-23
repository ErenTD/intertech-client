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

    const childObject = {
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

    // const generateChildObject = async () => {
    //     const gc = await contract.getChild();
    //     childObject.name = gc.name;
    //     childObject.address = gc.childAddress;
    //     childObject.age = Date.now() / 1000 - gc.birthDate;
    //     childObject.addr1.eth = gc.funds[0].balance;
    //     childObject.addr2.eth = gc.funds[1].balance;
    //     console.log(childObject);
    // };

    return (
        <ContractContext.Provider
            value={{
                accountType,
                setAccountType,
                current,
                setCurrent,
                connect,
                childObject,
            }}
        >
            {props.children}
        </ContractContext.Provider>
    );
};
