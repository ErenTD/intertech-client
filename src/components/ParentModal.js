import { Button, Modal, Form, InputNumber, Typography } from "antd";
import React, { useContext } from "react";
import { ContractContext } from "../contexts/ContractContext";

const { Title } = Typography;

const ParentModal = (props) => {
    const [form] = Form.useForm();
    const { sendMoney, unsendMoney } = useContext(ContractContext);

    const handleCancel = () => {
        props.setIsModalVisible(false);
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
            footer={null}
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
            <Form form={form} onFinish={onSubmit}>
                <Form.Item name="amount">
                    <InputNumber
                        style={{
                            backgroundImage: "linear-gradient(#e3f6ff,#f0faff)",
                            color: "black",
                            borderRadius: 12,
                            width: "100%",
                        }}
                        step="0.00000000000001"
                        stringMode
                    />
                </Form.Item>

                <Form.Item>
                    <Button
                        style={{
                            backgroundImage: "linear-gradient(#e3f6ff,#f0faff)",
                            color: "black",
                            borderRadius: 12,
                            width: "100%",
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

export default ParentModal;
