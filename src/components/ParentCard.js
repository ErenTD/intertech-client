import { Avatar, Card } from "antd";
import React from "react";

const ParentCard = (props) => {
    const imageUrl = `https://avatars.dicebear.com/api/adventurer/${props.person.address}.svg`;
    return (
        <Card
            bordered={false}
            style={{
                backgroundImage: "linear-gradient(#0984E3,#74B9FF)",
                color: "#ffffff",
                borderRadius: 100,
                ...props.style,
                width: 450,
                minHeight: 550,
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
                            src={imageUrl}
                        />
                    </div>
                    {props.buttons && (
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                marginTop: "0",
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
                <h1 style={{ color: "#ffffff" }}>{props.person.name}</h1>
                <h5 style={{ color: "#ffffff" }}>{props.person.address}</h5>
                <br />
                <table style={{ textAlign: "left" }}>
                    <thead>
                        <tr
                            key="titles"
                            style={{ textDecoration: "underline" }}
                        >
                            <th>Çocuklar</th>
                            <th>ETH Miktarı</th>
                            <th>Toplam</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.person.children.map((child, index) => {
                            return (
                                <tr key={index}>
                                    <td
                                        style={{
                                            color: `${
                                                child.isAdult
                                                    ? "#ccee00"
                                                    : "#ffffff"
                                            }`,
                                        }}
                                    >{`${child.name} (${child.address.substr(
                                        0,
                                        5
                                    )}...${child.address.substr(39, 42)})`}</td>
                                    <td>{child.eth}</td>
                                    <td>${child.usd}</td>
                                </tr>
                            );
                        })}
                        <br />
                        <tr key="total" style={{ fontWeight: "bold" }}>
                            <td>TOPLAM</td>
                            <td>{props.person.totalETH}</td>
                            <td>{props.person.totalUSD}</td>
                        </tr>
                    </tbody>
                </table>
                <br />
            </div>
        </Card>
    );
};

export default ParentCard;
