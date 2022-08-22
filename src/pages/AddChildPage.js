import {
    Button,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Card,
    Row,
    Modal,
} from "antd";
import React, { useState } from "react";
import "antd/dist/antd.min.css";

const AddChildPage = (props) => {
    const [componentSize, setComponentSize] = useState("default");

    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };

    const handleOk = () => {
        props.setIsModalVisible(false);
    };

    const handleCancel = () => {
        props.setIsModalVisible(false);
    };

    return (
        <Modal
            visible={props.isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
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
                    >
                        <Form.Item label="İsim/Soyisim">
                            <Input style={inputStyle} />
                        </Form.Item>
                        <Form.Item label="Cüzdan Adresi">
                            <Input style={inputStyle} />
                        </Form.Item>
                        <Form.Item label="Doğum Günü">
                            <DatePicker style={inputStyle} />
                        </Form.Item>
                        <Form.Item label="Eth Miktarı">
                            <InputNumber style={inputStyle} />
                        </Form.Item>
                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary">Kaydet</Button>
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

export default AddChildPage;
