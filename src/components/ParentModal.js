import { Button, Modal, Form, InputNumber, Typography } from "antd";
import React, { useState } from "react";

const { Title } = Typography;

const ParentModal = (props) => {
    const handleCancel = () => {
        props.setIsModalVisible(false);
    };

    const [componentSize, setComponentSize] = useState("default");
    const [form] = Form.useForm();

    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };

    const onSubmit = (values) => {
        console.log(values);
    };

    return (
        <Modal
            title={props.action}
            visible={props.isModalVisible}
            onCancel={handleCancel}
            footer={[
                <Button key="back" onClick={handleCancel}>
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
                    span: 1,
                }}
                wrapperCol={{
                    span: 10,
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
                <Form.Item wrapperCol={{ offset: 4, span: 12 }}>
                    <InputNumber style={inputStyle} />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
                    <Button style={inputStyle} htmlType="submit">
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
