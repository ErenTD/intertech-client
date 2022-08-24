import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { abi, address } from "../abi";
import { ethers } from "ethers";

export const ContractContext = createContext();

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const contract = new ethers.Contract(address, abi, provider);
const contractWithSigner = contract.connect(signer);

export const ContractContextProvider = (props) => {
    const [accountType, setAccountType] = useState(0);
    const [current, setCurrent] = useState("sub1");
    const [ChildList, setChildList] = useState([]);
    const [childObject, setChildObject] = useState({
        name: "-",
        address: "-",
        age: 0,
        addr1: {
            eth: "0",
            usd: "0",
        },
        addr2: {
            eth: "0",
            usd: "0",
        },
    });

    const navigate = useNavigate();
    let address;

    const connect = async () => {
        await provider.send("eth_requestAccounts", []);
        address = await signer.getAddress();
        const accountTypeString = await contract.getRole(address);
        if (accountTypeString === "child") {
            setAccountType(1);
            generateChildObject();
        }
        if (accountTypeString === "parent") {
            setAccountType(2);
            generateChildList();
        }
        if (accountTypeString === "admin") setAccountType(3);
        navigate(`/${accountTypeString}`);
        setCurrent("sub4");
    };

    const generateChildList = async () => {
        const cl = await contractWithSigner.getChildren();
        const newChildList = [];
        for (let i = 0; i < cl.length; i++) {
            newChildList.push({
                name: cl[i].name,
                address: cl[i].childAddress,
                age: Date.now() / 1000 - cl[i].birthDate,
                addr1: {
                    eth: cl[i].balance.toString(),
                    usd: "TODO",
                },
                addr2: {
                    eth: "HIDDEN",
                    usd: "HIDDEN",
                },
            });
        }
        setChildList(newChildList);
    };

    const generateChildObject = async () => {
        const co = await contractWithSigner.getChild();
        console.log(co);
        setChildObject({
            name: co.name,
            address: co.childAddress,
            age: Date.now() / 1000 - co.birthDate,
            addr1: {
                eth: co.funds[0].balance.toString(),
                usd: "TODO",
            },
            addr2: {
                eth:
                    co.funds.length > 1
                        ? co.funds[1].balance.toString()
                        : "N/A",
                usd: "TODO",
            },
        });
    };

    const addChild = async (values) => {
        await contractWithSigner.createChild(
            values.address,
            values.name,
            values.birthdate.unix()
        );
        // await contractwithSigner.sendBalance(values.address, values.balance);
        generateChildList();
        console.log(values.address, values.name, values.birthdate.unix());
    };

    return (
        <ContractContext.Provider
            value={{
                accountType,
                setAccountType,
                current,
                setCurrent,
                connect,
                childObject,
                ChildList,
                addChild,
            }}
        >
            {props.children}
        </ContractContext.Provider>
    );
};
