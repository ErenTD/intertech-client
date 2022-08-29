import React from "react";
import "antd/dist/antd.min.css";

import InfoCard from "../components/InfoCard";

const AHMET = {
    name: "Ahmet",
    address: "0x2F55073c97D9E00B094f5353F8114E0Ae0be0BF7",
    age: 345200000,
    addrlist: [
        {
            address: "0xfC9F7e34782B70c3096133eAD13BD54c863051D4",
            eth: 10.2665,
            usd: 14873.85,
        },
        {
            address: "0x7e1b65998b60Ce19b09373C82e30171C6D2dC0d9",
            eth: 20.365,
            usd: 29504.3,
        },
    ],
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
                        marginLeft: "9rem",
                        marginTop: "3rem",
                        width: "40%",
                    }}
                >
                    <h1 style={{ color: "#ffffff", fontSize: 40 }}>
                        Güvenli, sürdürülebilir ve kaliteli bir yatırım ağı.
                    </h1>
                    <h3 style={{ color: "#ffffff" }}>
                        <b>Chain Masters</b> ekibi olarak bankacılık sektörünün
                        önemli bir eksiğini kapatmaya geldik. Merkeziyetsiz
                        finans teknolojisi hakkında uzmanlaşan ekibimiz ile
                        geliştirdiğimiz bu teknolojide çocuklarınıza kripto
                        cüzdan açabilecek, miras bırakabilecek ve onlar adına
                        yatırım yapabileceksiniz. Aynı zamanda 18 yaşına ulaşan
                        çocuğunuz istediği zaman kendi cüzdanını himayesi altına
                        alabilecek.
                    </h3>
                    <h3 style={{ color: "#ffffff" }}>
                        Dilerseniz, çocuğunuz 18 yaşına gelmeden hesaptaki
                        parayı çekebilirsiniz. Bu şekilde ihtiyaç halinde
                        paranıza istediğiniz zaman ulaşabileceksiniz.
                    </h3>
                </div>
                <div style={{ marginLeft: "10rem", marginRight: "20rem" }}>
                    <InfoCard person={AHMET} />
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
