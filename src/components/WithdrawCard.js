import { Avatar, Card, Button, InputNumber, Form, Input, Select } from "antd";
import React, { useContext } from "react";
import { ContractContext } from "../contexts/ContractContext";

const WithdrawCard = (props) => {
    const { withdrawMoney } = useContext(ContractContext);
    const [form] = Form.useForm();

    const onFinish = (values) => {
        withdrawMoney(values);
    };

    const onAddressChange = (value) => {
        switch (value) {
            case props.person.addr1.address:
                form.setFieldsValue({
                    balance: `Çekilebilir Bakiyeniz: ${
                        props.person.age > 568036800
                            ? props.person.addr1.eth
                            : 0
                    } ETH`,
                });
                return;

            case props.person.addr2.address:
                form.setFieldsValue({
                    balance: `Çekilebilir Bakiyeniz: ${
                        props.person.age > 568036800
                            ? props.person.addr2.eth
                            : 0
                    } ETH`,
                });
                return;

            default:
                return;
        }
    };

    return (
        <Card
            style={{
                backgroundImage: "linear-gradient(#0984E3,#F5F5F5)",
                color: "black",
                borderRadius: 100,
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
                <h1 style={{ color: "#ffffff" }}>{props.person.name}</h1>
                <h6 style={{ color: "#ffffff" }}>{props.person.address}</h6>
                <br />
                <br />
                <br />
                <Form
                    name="basic"
                    form={form}
                    initialValues={{
                        balance: "Çekilebilir Bakiyeniz:",
                        amount: 0,
                    }}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Form.Item label="Çekilecek Adres" name="address">
                        <Select
                            onChange={onAddressChange}
                            rules={[
                                {
                                    required: true,
                                    message: "Lütfen çekilecek adresi seçiniz!",
                                },
                            ]}
                        >
                            <Select.Option value={props.person.addr1.address}>
                                {`${props.person.addr1.address.substr(
                                    0,
                                    5
                                )}...${props.person.addr1.address.substr(
                                    39,
                                    42
                                )}`}
                            </Select.Option>
                            {props.person.addr2.address !== "N/A" ? (
                                <Select.Option
                                    value={props.person.addr2.address}
                                >
                                    {`${props.person.addr2.address.substr(
                                        0,
                                        5
                                    )}...${props.person.addr2.address.substr(
                                        39,
                                        42
                                    )}`}
                                </Select.Option>
                            ) : null}
                        </Select>
                    </Form.Item>
                    <Form.Item name="balance">
                        <Input
                            style={{
                                backgroundImage:
                                    "linear-gradient(#ffffff,#ffffff))",
                                color: "grey",
                                borderRadius: 10,
                            }}
                            disabled
                        />
                    </Form.Item>

                    <Form.Item
                        shouldUpdate={(prevValues, currentValues) =>
                            prevValues.address !== currentValues.address
                        }
                    >
                        {({ getFieldValue }) =>
                            getFieldValue("address") ===
                            props.person.addr1.address ? (
                                <Form.Item
                                    name="amount"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Lütfen çekeceğiniz miktarı giriniz!",
                                        },
                                    ]}
                                >
                                    <InputNumber
                                        style={{
                                            backgroundImage:
                                                "linear-gradient(#ffffff,#ffffff))",
                                            color: "grey",
                                            borderRadius: 10,
                                            width: 250,
                                        }}
                                        min="0"
                                        max={
                                            props.person.age > 568036800
                                                ? props.person.addr1.eth
                                                : 0
                                        }
                                        step="0.00000000000001"
                                        stringMode
                                    />
                                </Form.Item>
                            ) : (
                                <Form.Item
                                    name="amount"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Lütfen çekeceğiniz miktarı giriniz!",
                                        },
                                    ]}
                                >
                                    <InputNumber
                                        style={{
                                            backgroundImage:
                                                "linear-gradient(#ffffff,#ffffff))",
                                            color: "grey",
                                            borderRadius: 10,
                                            width: 250,
                                        }}
                                        min="0"
                                        max={
                                            props.person.age > 568036800
                                                ? props.person.addr1.eth
                                                : 0
                                        }
                                        step="0.00000000000001"
                                        stringMode
                                    />
                                </Form.Item>
                            )
                        }
                    </Form.Item>

                    <Form.Item>
                        <Button
                            style={{
                                backgroundImage:
                                    "linear-gradient(#ffffff,#ffffff",
                                color: "grey",
                                borderRadius: 10,
                            }}
                            type="primary"
                            htmlType="submit"
                        >
                            PARA ÇEK
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </Card>
    );
};

export default WithdrawCard;
