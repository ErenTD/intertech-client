import { Button, Modal, Form, InputNumber, Typography } from "antd";
import React, { useState, useContext } from "react";
import { ContractContext } from "../contexts/ContractContext";

const { Title } = Typography;

const ParentModal = (props) => {
    const { sendMoney, unsendMoney } = useContext(ContractContext);

    const handleCancel = () => {
        props.setIsModalVisible(false);
    };

    const [componentSize, setComponentSize] = useState("default");
    const [form] = Form.useForm();

    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };

    const onSubmit = (values) => {
        const action = props.action === "Para Çekme" ? true : false;
        if (action) {
            unsendMoney(props.address, values.amount);
        } else {
            sendMoney(props.address, values.amount);
        }
    };

    return (
        <Modal
            title={props.action}
            visible={props.isModalVisible}
            onCancel={handleCancel}
            footer={[
                <Button
                    style={{
                        backgroundImage: "linear-gradient(#e3f6ff,#f0faff)",
                        color: "#003C96",
                        borderRadius: 10,
                    }}
                    key="back"
                    onClick={handleCancel}
                >
                    İptal
                </Button>,
            ]}
        >
            <Title
                level={3}
                style={{
                    marginBottom: "1rem",
                    textAlign: "center",
                }}
            >
                {props.childname}
            </Title>
            <Form
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                layout="horizontal"
                initialValues={{
                    size: componentSize,
                }}
                onValuesChange={onFormLayoutChange}
                size={componentSize}
                form={form}
                onFinish={onSubmit}
            >
                <Form.Item wrapperCol={{ offset: 4, span: 12 }} name="amount">
                    <InputNumber
                        style={{
                            inputStyle,
                            backgroundImage: "linear-gradient(#e3f6ff,#f0faff)",
                            color: "black",
                            borderRadius: 12,
                        }}
                        step="0.00000000000001"
                        stringMode
                    />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
                    <Button
                        style={{
                            inputStyle,
                            backgroundImage: "linear-gradient(#e3f6ff,#f0faff)",
                            color: "black",
                            borderRadius: 12,
                        }}
                        htmlType="submit"
                    >
                        {props.action === "Para Çekme"
                            ? "Para Çek"
                            : "Para Yatır"}
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    );
};

const inputStyle = {
    width: "300px",
};

export default ParentModal;
