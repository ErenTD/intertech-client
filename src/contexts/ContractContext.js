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
            address: "-",
            eth: "0",
            usd: "0",
        },
        addr2: {
            address: "-",
            eth: "0",
            usd: "0",
        },
    });

    const navigate = useNavigate();
    let address;

    const fetchExchangeRate = async () => {
        const response = await fetch(
            "https://api.coinbase.com/v2/exchange-rates?currency=ETH"
        );
        const data = await response.json();
        return Number(data.data.rates.USD);
    };

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
        const rate = await fetchExchangeRate();
        const cl = await contractWithSigner.getChildren();
        const newChildList = [];
        for (let i = 0; i < cl.length; i++) {
            newChildList.push({
                name: cl[i].name,
                address: cl[i].childAddress,
                age: Date.now() / 1000 - cl[i].birthDate,
                addr1: {
                    address: address,
                    eth: ethers.utils.formatEther(cl[i].balance),
                    usd: Number(ethers.utils.formatEther(cl[i].balance)) * rate,
                },
                addr2: {
                    address: "N/A",
                    eth: "HIDDEN",
                    usd: "HIDDEN",
                },
            });
        }
        setChildList(newChildList);
    };

    const generateChildObject = async () => {
        const rate = await fetchExchangeRate();
        const co = await contractWithSigner.getChild();
        setChildObject({
            name: co.name,
            address: co.childAddress,
            age: Date.now() / 1000 - co.birthDate,
            addr1: {
                address: co.funds[0].parentAddress,
                eth: ethers.utils.formatEther(co.funds[0].balance),
                usd:
                    Number(ethers.utils.formatEther(co.funds[0].balance)) *
                    rate,
            },
            addr2: {
                address:
                    co.funds.length > 1 ? co.funds[1].parentAddress : "N/A",
                eth:
                    co.funds.length > 1
                        ? ethers.utils.formatEther(co.funds[1].balance)
                        : "N/A",
                usd:
                    co.funds.length > 1
                        ? Number(
                              ethers.utils.formatEther(co.funds[0].balance)
                          ) * rate
                        : "N/A",
            },
        });
    };

    const addChild = async (values) => {
        await contractWithSigner.createChild(
            values.address,
            values.name,
            values.birthdate.unix()
        );
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
