import { Button, Modal, Form, InputNumber } from "antd";
import React, { useState } from "react";

const ParentComp = (props) => {
   
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
          
            onCancel={handleCancel}
        >
            {props.childname}
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
            >
                <Form.Item wrapperCol={{ offset: 4, span: 12 }} >
                    <InputNumber style={inputStyle} />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
                    <Button style={inputStyle}>Para Çek</Button>
                </Form.Item>
            </Form>
        </Modal>
    );
};

const inputStyle = {
    width: "300px",
};

export default ParentComp;
