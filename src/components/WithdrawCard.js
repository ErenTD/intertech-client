import { Avatar, Card, Button, InputNumber, Form, Input } from "antd";
import React from "react";

const WithdrawCard = (props) => {
    const onFinish = (values) => {
        console.log("Success:", values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    const onChange = (value) => {
        console.log("changed", value);
    };

    return (
        <Card
            style={{
                ...props.style,
                width: 300,
            }}
            cover={
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
                <br />
                <br />
                <Form
                    name="basic"
                    initialValues={{
                        balance: `Çekilebilir Bakiyeniz: ${
                            props.person.age > 568036800
                                ? props.person.addr1.eth +
                                  props.person.addr2.eth
                                : 0
                        } ETH`,
                        amount: 0,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item name="balance">
                        <Input disabled />
                    </Form.Item>

                    <Form.Item
                        name="amount"
                        rules={[
                            {
                                required: true,
                                message: "Lütfen çekeceğiniz miktarı giriniz!",
                            },
                        ]}
                    >
                        <InputNumber
                            style={{
                                width: 250,
                            }}
                            min="0"
                            max={
                                props.person.age > 568036800
                                    ? props.person.addr1.eth +
                                      props.person.addr2.eth
                                    : 0
                            }
                            step="0.00000000000001"
                            onChange={onChange}
                            stringMode
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            PARA ÇEK
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </Card>
    );
};

export default WithdrawCard;
