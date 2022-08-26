import { Avatar, Button, Card, Progress } from "antd";
import React, { useState } from "react";
import ParentModal from "./ParentModal";

const InfoCard = (props) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [action, setAction] = useState("");

    const years = Math.trunc((568036800 - props.person.age) / 31536000);
    const days = Math.trunc(
        (568036800 - props.person.age - years * 31536000) / 86400
    );
    const progress = Math.trunc(
        100 - ((568036800 - props.person.age) / 568036800) * 100
    );

    const interactWithdraw = () => {
        setAction("Para Çekme");
        setIsModalVisible(true);
    };
    const interactDeposit = () => {
        setAction("Para Yatırma");
        setIsModalVisible(true);
    };

    return (
        <Card
            bordered={false}
            style={{
                backgroundImage: "linear-gradient(#0984E3,#74B9FF)",
                color: "#ffffff",
                borderRadius: 100,
                ...props.style,
                width: 300,
            }}
            cover={
                <div>
                    <ParentModal
                        isModalVisible={isModalVisible}
                        setIsModalVisible={setIsModalVisible}
                        childname={props.person.name}
                        address={props.person.address}
                        action={action}
                    />
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
                                    color: "#ffffff",
                                    marginLeft: "2rem",
                                    marginRight: "auto",
                                }}
                            >
                                <Button
                                    type="primary"
                                    onClick={interactWithdraw}
                                    style={{
                                        backgroundImage:
                                            "linear-gradient(#fa8c16,#ffa940)",
                                        color: "#ffffff",
                                        borderRadius: 5,
                                    }}
                                >
                                    Para Çek
                                </Button>
                            </div>
                            <div
                                style={{
                                    marginLeft: "auto",
                                    marginRight: "2rem",
                                }}
                            >
                                <Button
                                    type="primary"
                                    onClick={interactDeposit}
                                    style={{
                                        backgroundImage:
                                            "linear-gradient(#ffffff,#ffffff)",
                                        color: "#bfbfbf",
                                        borderRadius: 5,
                                    }}
                                >
                                    Para Yatır
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            }
        >
            <div
                style={{
                    color: "#ffffff",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    textAlign: "center",
                }}
            >
                <h1 style={{ color: "#ffffff" }}>{props.person.name}</h1>
                <h6 style={{ color: "#ffffff" }}>{props.person.address}</h6>
                <br />
                <table style={{ textAlign: "left", color: "#ffffff" }}>
                    <thead>
                        <tr
                            style={{
                                textDecoration: "underline",
                                color: "#ffffff",
                            }}
                        >
                            <th>Cüzdan Adresi</th>
                            <th>ETH Miktarı</th>
                            <th>Toplam</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.person.addrlist.map((addr, index) => {
                            return (
                                <tr key={index}>
                                    <td>{`${addr.address.substr(
                                        0,
                                        5
                                    )}...${addr.address.substr(39, 42)}`}</td>
                                    <td>{addr.eth}</td>
                                    <td>${addr.usd}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <br />
                {years > 0 && days > 0 ? (
                    <h2 style={{ color: "#ffffff" }}>
                        Kalan Süre: {years} yıl {days} gün.
                    </h2>
                ) : (
                    <br />
                )}
                <Progress percent={progress} showInfo={false} />
                {years > 0 && days > 0 ? (
                    <p>
                        {props.person.name}'in 18 yaşına gelmesine bu günden
                        itibaren {years} yıl {days} gün var. {props.person.name}
                        'in yatırımlarını yukarıdaki özet tablosunda
                        görebilirsiniz.
                    </p>
                ) : (
                    <>
                        <br />
                        <h3 style={{ color: "#ffffff" }}>
                            {props.person.name} 18 yaşına geldi!
                        </h3>
                    </>
                )}
            </div>
        </Card>
    );
};

export default InfoCard;
