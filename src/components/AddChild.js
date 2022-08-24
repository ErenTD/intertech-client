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
                            <Input style={inputStyle} />
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
                            <Input style={inputStyle} />
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
                            <DatePicker style={inputStyle} />
                        </Form.Item>
                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary" htmlType="submit">
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
