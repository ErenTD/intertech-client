import { Button, DatePicker, Form, Input, Card, Row, Modal } from "antd";
import React, { useState, useContext } from "react";
import { ContractContext } from "../contexts/ContractContext";
import "antd/dist/antd.min.css";

const AddChild = (props) => {
    const { addChild } = useContext(ContractContext);
    const [componentSize, setComponentSize] = useState("default");
    const [form] = Form.useForm();

    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };

    const handleCancel = () => {
        props.setIsModalVisible(false);
    };

    const onSubmit = (values) => {
        addChild(values);
    };

    return (
        <Modal
            visible={props.isModalVisible}
            onCancel={handleCancel}
            footer={[
                <Button key="back" onClick={handleCancel}>
                    İptal
                </Button>,
            ]}
        >
            <Row
                type="flex"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "10%",
                }}
            >
                <Card
                    title="Yeni Çocuk Ekle"
                    style={{
                        width: 600,
                        verticalAlign: "middle",
                        backgroundImage: "linear-gradient(#0984E3,#F5F5F5)",
                        color: "#003C96",
                        borderRadius: 10,
                    }}
                >
                    <Form
                        labelCol={{
                            span: 8,
                        }}
                        wrapperCol={{
                            span: 16,
                        }}
                        initialValues={{
                            size: componentSize,
                        }}
                        onValuesChange={onFormLayoutChange}
                        size={componentSize}
                        form={form}
                        onFinish={onSubmit}
                    >
                        <Form.Item
                            label="İsim/Soyisim"
                            name="name"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input
                                style={{
                                    inputStyle,
                                    backgroundImage:
                                        "linear-gradient(#e3f6ff,#f0faff)",
                                    color: "black",
                                    borderRadius: 12,
                                }}
                            />
                        </Form.Item>
                        <Form.Item
                            label="Cüzdan Adresi"
                            name="address"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <Input
                                style={{
                                    inputStyle,
                                    backgroundImage:
                                        "linear-gradient(#e3f6ff,#f0faff)",
                                    color: "black",
                                    borderRadius: 12,
                                }}
                            />
                        </Form.Item>
                        <Form.Item
                            label="Doğum Günü"
                            name="birthdate"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                        >
                            <DatePicker
                                style={{
                                    inputStyle,
                                    backgroundImage:
                                        "linear-gradient(#e3f6ff,#f0faff)",
                                    color: "black",
                                    borderRadius: 12,
                                }}
                            />
                        </Form.Item>
                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button
                                style={{
                                    backgroundImage:
                                        "linear-gradient(#e3f6ff,#f0faff)",
                                    color: "#003C96",
                                    borderRadius: 10,
                                }}
                                type="primary"
                            >
                                Kaydet
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </Row>
        </Modal>
    );
};

const inputStyle = {
    width: "300px",
};

export default AddChild;
