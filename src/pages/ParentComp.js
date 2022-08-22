import { Button, Modal, Form, InputNumber } from "antd";
import React, { useState } from "react";

const ParentComp = (props) => {
    const handleOk = () => {
        props.setIsModalVisible(false);
    };

    const handleCancel = () => {
        props.setIsModalVisible(false);
    };

    const [componentSize, setComponentSize] = useState("default");

    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };

    return (
        <Modal
            title={props.islem}
            visible={props.isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
        >
            <Form
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
                initialValues={{
                    size: componentSize,
                }}
                onValuesChange={onFormLayoutChange}
                size={componentSize}
            >
                <Form.Item>
                    <InputNumber />
                </Form.Item>

                <Form.Item>
                    <Button>Button</Button>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default ParentComp;
