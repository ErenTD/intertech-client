import { Avatar, Button, Card, Progress } from "antd";
import React, { useState } from "react";
import ParentModal from "./ParentModal";

const InfoCard = (props) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const years = Math.trunc((568036800 - props.person.age) / 31536000);
    const days = Math.trunc(
        (568036800 - props.person.age - years * 31536000) / 86400
    );
    const progress = Math.trunc(
        100 - ((568036800 - props.person.age) / 568036800) * 100
    );
    const interact = () => {
        setIsModalVisible(true);
    };
    return (
        <Card
            style={{
                ...props.style,
                width: 300,
            }}
            cover={
                <div>
                    <ParentModal
                        isModalVisible={isModalVisible}
                        setIsModalVisible={setIsModalVisible}
                        childname={props.person.name}
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
                                    marginLeft: "2rem",
                                    marginRight: "auto",
                                }}
                            >
                                <Button
                                    type="primary"
                                    onClick={interact}
                                    islem={"Para Çekme"}
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
                                    onClick={interact}
                                    islem={"Para Yatırma"}
                                    danger
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
                            <th>Cüzdan Adresi</th>
                            <th>ETH Miktarı</th>
                            <th>Toplam</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Adres 1</td>
                            <td>{props.person.addr1.eth}</td>
                            <td>${props.person.addr1.usd}</td>
                        </tr>
                        <tr>
                            <td>Adres 2</td>
                            <td>{props.person.addr2.eth}</td>
                            <td>${props.person.addr2.usd}</td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <h2>
                    Kalan Süre: {years} yıl {days} gün.
                </h2>
                <Progress percent={progress} showInfo={false} />
                <p>
                    {props.person.name}'in 18 yaşına gelmesine bu günden
                    itibaren {years} yıl {days} gün var. Ahmet'in yatırımlarını
                    yukarıdaki özet tablosunda görebilirsiniz.
                </p>
            </div>
        </Card>
    );
};

export default InfoCard;
