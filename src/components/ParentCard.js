import { Avatar, Card } from "antd";
import React from "react";

const ParentCard = (props) => {
    return (
        <Card
            style={{
                ...props.style,
                width: 300,
            }}
            cover={
                <div>
                    <div
                        style={{
                            overflow: "hidden",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginLeft: "auto",
                            marginRight: "auto",
                        }}
                    >
                        <Avatar
                            style={{
                                marginLeft: "auto",
                                marginRight: "auto",
                                marginTop: "10%",
                            }}
                            size={125}
                            src="https://joeschmoe.io/api/v1/random"
                        />
                    </div>
                    {props.buttons && (
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                marginTop: "10%",
                            }}
                        >
                            <div
                                style={{
                                    marginLeft: "2rem",
                                    marginRight: "auto",
                                }}
                            ></div>
                            <div
                                style={{
                                    marginLeft: "auto",
                                    marginRight: "2rem",
                                }}
                            ></div>
                        </div>
                    )}
                </div>
            }
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    textAlign: "center",
                }}
            >
                <h1>{props.person.name}</h1>
                <h6>{props.person.address}</h6>
                <br />
                <table style={{ textAlign: "left" }}>
                    <thead>
                        <tr style={{ textDecoration: "underline" }}>
                            <th>Çocuklar</th>
                            <th>ETH Miktarı</th>
                            <th>Toplam</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{`${props.person.addr1.address.substr(
                                0,
                                5
                            )}...${props.person.addr1.address.substr(
                                39,
                                42
                            )}`}</td>
                            <td>{props.person.addr1.eth}</td>
                            <td>${props.person.addr1.usd}</td>
                        </tr>
                        <tr>
                            <td>{`${props.person.addr2.address.substr(
                                0,
                                5
                            )}...${props.person.addr2.address.substr(
                                39,
                                42
                            )}`}</td>
                            <td>{props.person.addr2.eth}</td>
                            <td>${props.person.addr2.usd}</td>
                        </tr>
                    </tbody>
                </table>
                <table style={{ textAlign: "left" }}>
                    <thead>
                        <tr style={{ textDecoration: "underline" }}>
                            <th>Toplam Çekilen Miktar</th>
                            <th>Toplam</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{`${props.person.addr1.address.substr(
                                0,
                                5
                            )}...${props.person.addr1.address.substr(
                                39,
                                42
                            )}`}</td>
                            <td>${props.person.addr1.usd}</td>
                        </tr>
                        <tr>
                            <td>{`${props.person.addr2.address.substr(
                                0,
                                5
                            )}...${props.person.addr2.address.substr(
                                39,
                                42
                            )}`}</td>
                            <td>${props.person.addr2.usd}</td>
                        </tr>
                    </tbody>
                </table>
                <table style={{ textAlign: "left" }}>
                    <thead>
                        <tr style={{ textDecoration: "underline" }}>
                            <th>Toplam Yatırılan Miktar</th>

                            <th>Toplam</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{`${props.person.addr1.address.substr(
                                0,
                                5
                            )}...${props.person.addr1.address.substr(
                                39,
                                42
                            )}`}</td>
                            <td>${props.person.addr1.usd}</td>
                        </tr>
                        <tr>
                            <td>{`${props.person.addr2.address.substr(
                                0,
                                5
                            )}...${props.person.addr2.address.substr(
                                39,
                                42
                            )}`}</td>
                            <td>${props.person.addr2.usd}</td>
                        </tr>
                    </tbody>
                </table>
                <br />
            </div>
        </Card>
    );
};

export default ParentCard;