import ParentCard from "../components/ParentCard";
import Slider from "react-slick";
import React from "react";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
};

const Parent = [
    {
        name: "Ahmet",
        address: "0x9e5bF30a29560166fD47D461Dd1201a3bF56CEF4",
        age: 1325419200,
        addr1: {
            eth: 10.2665,
            usd: 1026.65,
        },
        addr2: {
            eth: 10.2665,
            usd: 1026.65,
        },
    },

    {
        name: "Fatma",
        address: "0x9e5bF30a29560166fD47D461Dd1201a3bF56CEF4",
        age: 1325419200,
        addr1: {
            eth: 10.2665,
            usd: 1026.65,
        },
        addr2: {
            eth: 10.2665,
            usd: 1026.65,
        },
    },
    {
        name: "Dilara",
        address: "0x9e5bF30a29560166fD47D461Dd1201a3bF56CEF4",
        age: 1325419200,
        addr1: {
            eth: 10.2665,
            usd: 1026.65,
        },
        addr2: {
            eth: 10.2665,
            usd: 1026.65,
        },
    },
    {
        name: "Meryem",
        address: "0x9e5bF30a29560166fD47D461Dd1201a3bF56CEF4",
        age: 1325419200,
        addr1: {
            eth: 10.2665,
            usd: 1026.65,
        },
        addr2: {
            eth: 10.2665,
            usd: 1026.65,
        },
    },
    {
        name: "Mahir",
        address: "0x9e5bF30a29560166fD47D461Dd1201a3bF56CEF4",
        age: 1325419200,
        addr1: {
            eth: 10.2665,
            usd: 1026.65,
        },
        addr2: {
            eth: 10.2665,
            usd: 1026.65,
        },
    },
    {
        name: "Nergiz",
        address: "0x9e5bF30a29560166fD47D461Dd1201a3bF56CEF4",
        age: 1325419200,
        addr1: {
            eth: 10.2665,
            usd: 1026.65,
        },
        addr2: {
            eth: 10.2665,
            usd: 1026.65,
        },
    },
    {
        name: "Kaan",
        address: "0x9e5bF30a29560166fD47D461Dd1201a3bF56CEF4",
        age: 1325419200,
        addr1: {
            eth: 10.2665,
            usd: 1026.65,
        },
        addr2: {
            eth: 10.2665,
            usd: 1026.65,
        },
    },
];

const AdminPage = () => {
    return (
        <>
            <div
                style={{
                    marginLeft: "12%",
                    marginRight: "12%",
                    marginTop: "5rem",
                }}
            >
                <Slider {...settings}>
                    {Parent.map((parent) => (
                        <div>
                            <ParentCard person={parent} buttons />
                        </div>
                    ))}
                </Slider>
            </div>
            <div
                style={{
                    marginLeft: "30%",
                    marginRight: "30%",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    textAlign: "center",
                }}
            >
                <br />
                <br />
                <h1>Toplam</h1>
                <br />
                <table style={{ textAlign: "left" }}>
                    <thead>
                        <tr style={{ textDecoration: "underline" }}>
                            <th>Ebeveyn Sayısı</th>
                            <th>Çocuk Sayısı</th>
                            <th>Yatırılan Para</th>
                            <th>Yatırılan Ethereum</th>
                            <th>18 Yaşını Dolduran Çocuk Sayısı</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>8</td>
                            <td>35</td>
                            <td></td>
                            <td></td>
                            <td>22</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default AdminPage;
