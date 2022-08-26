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
    const [ParentList, setParentList] = useState([]);
    const [childObject, setChildObject] = useState({
        name: "-",
        address: "-",
        age: 0,
        addrlist: [],
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
        if (accountTypeString === "owner") {
            setAccountType(3);
            generateParentList();
        }
        navigate(`/${accountTypeString}`);
        setCurrent("sub4");
    };

    const generateChildList = async () => {
        const rate = await fetchExchangeRate();
        const cl = await contractWithSigner.getChildren(address);
        const newChildList = [];
        for (let i = 0; i < cl.length; i++) {
            newChildList.push({
                name: cl[i].name,
                address: cl[i].childAddress,
                age: Date.now() / 1000 - cl[i].birthDate,
                addrlist: [
                    {
                        address: address,
                        eth: ethers.utils.formatEther(cl[i].balance),
                        usd:
                            Math.trunc(
                                100 *
                                    Number(
                                        ethers.utils.formatEther(cl[i].balance)
                                    ) *
                                    rate
                            ) / 100,
                    },
                ],
            });
        }
        setChildList(newChildList);
    };

    const generateParentList = async () => {
        const rate = await fetchExchangeRate();
        const pl = await contractWithSigner.getParents();
        const newParentList = [];
        for (let i = 0; i < pl.length; i++) {
            const children = [];
            let totalETH = 0;
            let totalUSD = 0;
            for (let j = 0; j < pl[i].childDetails.length; j++) {
                children.push({
                    address: pl[i].childDetails[j].childAddress,
                    name: pl[i].childDetails[j].name,
                    isAdult:
                        Date.now() / 1000 - pl[i].childDetails[j].birthDate >
                        568036800,
                    eth: ethers.utils.formatEther(
                        pl[i].childDetails[j].balance
                    ),
                    usd:
                        Math.trunc(
                            100 *
                                Number(
                                    ethers.utils.formatEther(
                                        pl[i].childDetails[j].balance
                                    )
                                ) *
                                rate
                        ) / 100,
                });
                totalETH += Number(
                    ethers.utils.formatEther(pl[i].childDetails[j].balance)
                );
                totalUSD +=
                    Math.trunc(
                        100 *
                            Number(
                                ethers.utils.formatEther(
                                    pl[i].childDetails[j].balance
                                )
                            ) *
                            rate
                    ) / 100;
            }
            newParentList.push({
                name: `Ebeveyn ${i + 1}`,
                address: pl[i].parentAddress,
                children: children,
                totalETH: totalETH,
                totalUSD: totalUSD,
            });
        }
        setParentList(newParentList);
    };

    const generateChildObject = async () => {
        const rate = await fetchExchangeRate();
        const co = await contractWithSigner.getChild();
        const addrlist = [];
        for (let i = 0; i < co.funds.length; i++) {
            addrlist.push({
                address: co.funds[i].parentAddress,
                eth: ethers.utils.formatEther(co.funds[i].balance),
                usd:
                    Math.trunc(
                        100 *
                            Number(
                                ethers.utils.formatEther(co.funds[0].balance)
                            ) *
                            rate
                    ) / 100,
            });
        }
        setChildObject({
            name: co.name,
            address: co.childAddress,
            age: Date.now() / 1000 - co.birthDate,
            addrlist: addrlist,
        });
    };

    const addChild = async (values) => {
        await contractWithSigner.createChild(
            values.address,
            values.name,
            values.birthdate.unix()
        );
    };

    const sendMoney = async (address, amount) => {
        await contractWithSigner.sendBalance(address, {
            value: ethers.utils.parseUnits(amount, 18),
        });
    };

    const unsendMoney = async (address, amount) => {
        await contractWithSigner.withdrawParent(
            address,
            ethers.utils.parseUnits(amount, 18)
        );
    };

    const withdrawMoney = async (values) => {
        await contractWithSigner.withdrawChild(
            values.address,
            ethers.utils.parseUnits(values.amount, 18)
        );
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
                ParentList,
                addChild,
                sendMoney,
                unsendMoney,
                withdrawMoney,
            }}
        >
            {props.children}
        </ContractContext.Provider>
    );
};
