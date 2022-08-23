import React from "react";
import { Button, Form, Input, Typography } from "antd";

import "antd/dist/antd.min.css";

import NOTIFICATION_DETAILS from "../utils/Constants";
import ShowNotification from "../utils/ShowNotification";

const ContactPage = () => {
    const [form] = Form.useForm();
    const { Title } = Typography;

    const handleSubmission = React.useCallback(
        (result) => {
            if (result.error) {
                ShowNotification("error", NOTIFICATION_DETAILS.error);
            } else {
                ShowNotification("success", NOTIFICATION_DETAILS.success);
                form.resetFields();
            }
        },
        [form]
    );

    const onSubmit = React.useCallback(async () => {
        let values;
        try {
            values = await form.validateFields();
        } catch (errorInfo) {
            return;
        }
        const result = await UseContactUs(values);
        handleSubmission(result);
    }, [form, handleSubmission]);

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
            <Title
                level={2}
                style={{
                    marginBottom: "5rem",
                    marginLeft: "5rem",
                    paddingTop: 20,
                    paddingLeft: 30,
                    paddingRight: 30,
                    textAlign: "center",
                }}
            >
                Bize Ulaşın
            </Title>
            <Form
                labelCol={{ span: 5 }}
                wrapperCol={{ span: 16 }}
                form={form}
                name="contact"
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
                    <Button type="primary" onClick={onSubmit}>
                        GÖNDER
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

const UseContactUs = async (data) => {
    const url =
        "https://public.herotofu.com/v1/699958b0-22f6-11ed-a969-f1ede4dc5ccf";

    const submitRequest = async (reqBody) => {
        try {
            const res = await fetch(url, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ input: reqBody }),
            });
            const json = await res.json();
            return { response: json, error: undefined };
        } catch (error) {
            return { response: undefined, error: error };
        }
    };

    return await submitRequest(data);
};

export default ContactPage;
