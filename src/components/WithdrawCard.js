import { Card, Button, InputNumber, Form, Input, Select } from "antd";
import React, { useContext } from "react";
import { ContractContext } from "../contexts/ContractContext";

const WithdrawCard = (props) => {
    const { withdrawMoney } = useContext(ContractContext);
    const [form] = Form.useForm();

    const style = {
        width: 450,
        borderRadius: "10px",
        margin: 3,
    };

    const onFinish = (values) => {
        const tmp = values;
        tmp.address = props.person.addrlist[values.address].address;
        withdrawMoney(tmp);
    };

    let chosenAddr = 0;

    const onAddressChange = (value) => {
        chosenAddr = value;
        form.setFieldsValue({
            balance: `Çekilebilir Bakiyeniz: ${
                props.person.age > 568036800
                    ? props.person.addrlist[value].eth
                    : 0
            } ETH`,
        });
    };

    return (
        <Card
            bordered={false}
            style={{
                backgroundImage: "linear-gradient(#0984E3,#74B9FF)",
                color: "black",
                borderRadius: 100,
                ...props.style,
                width: 300,
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    textAlign: "center",
                    marginTop: "5rem",
                }}
            >
                <h1 style={{ color: "#ffffff" }}>Para Çek</h1>
                <h6 style={{ color: "#ffffff" }}>
                    Çekilecek Adres: {props.person.address}
                </h6>
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
                    colon={false}
                >
                    <Form.Item
                        label={
                            <label style={{ color: "white" }}>
                                Çekilecek Adres
                            </label>
                        }
                        name="address"
                    >
                        <div className="rounded-select">
                            <Select
                                onChange={onAddressChange}
                                rules={[
                                    {
                                        required: true,
                                        message:
                                            "Lütfen çekilecek adresi seçiniz!",
                                    },
                                ]}
                                dropdownStyle={{
                                    backgroundImage:
                                        "linear-gradient(#ECF6FF,#ECF6FF)",
                                    color: "black",
                                    borderRadius: 12,
                                }}
                                style={{ style }}
                            >
                                {props.person.addrlist.map((addr, index) => {
                                    return (
                                        <Select.Option key={index}>
                                            {`${addr.address.substr(
                                                0,
                                                5
                                            )}...${addr.address.substr(
                                                39,
                                                42
                                            )}`}
                                        </Select.Option>
                                    );
                                })}
                            </Select>
                        </div>
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
                                backgroundImage:
                                    "linear-gradient(#ffffff,#ffffff))",
                                color: "grey",
                                borderRadius: 10,
                                width: 250,
                            }}
                            min="0"
                            max={
                                props.person.age > 568036800
                                    ? props.person.addrlist[chosenAddr].eth
                                    : 0
                            }
                            step="0.00000000000001"
                            stringMode
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button
                            style={{
                                backgroundImage:
                                    "linear-gradient(#fa8c16,#ffa940)",
                                color: "#ffffff",
                                borderRadius: 5,
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
