import React from "react";
import { Button, Form, Input } from "antd";
import "antd/dist/antd.min.css";

const ContactPage = () => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log("Received values of form: ", values);
    };

    return (
        <div
            style={{
                width: "40%",
                marginLeft: "26.66%",
                marginTop: "5rem",
                flexDirection: "column",
                justifyContent: "center",
                display: "flex",
            }}
        >
            <h1 style={{ textAlign: "center", marginLeft: "3rem"}}>Bize Ulaşın</h1>

            <Form
                labelCol={{ span: 5 }}
                wrapperCol={{ span: 16 }}
                form={form}
                name="contact"
                onFinish={onFinish}
                scrollToFirstError
            >
                <Form.Item
                    name="fullname"
                    label="İsim - Soyisim"
                    rules={[
                        {
                            required: true,
                            message: "Lütfen isim-soyisim bilgisi giriniz",
                            whitespace: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="email"
                    label="E-mail"
                    rules={[
                        {
                            type: "email",
                            message: "Geçersiz E-mail!",
                        },
                        {
                            required: true,
                            message: "Lütfen E-mail'inizi giriniz",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="message"
                    label="Mesaj"
                    rules={[
                        {
                            required: true,
                            message: "Lütfen mesajınızı yazınız",
                        },
                    ]}
                >
                    <Input.TextArea showCount rows={5} maxLength={2500} />
                </Form.Item>

                <Form.Item
                    style={{ textAlign: "center" }}
                    wrapperCol={{ offset: 5, span: 16 }}
                >
                    <Button type="primary" htmlType="submit">
                        GÖNDER
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default ContactPage;
