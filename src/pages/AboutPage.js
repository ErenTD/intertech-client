import React from "react";
import "antd/dist/antd.min.css";

const AboutPage = () => {
    return (
        <div style={{ marginLeft: "12%", marginRight: "12%" }}>
            <div
                style={{
                    marginTop: "3rem",
                    display: "flex",
                }}
            >
                <div
                    style={{
                        marginLeft: "5rem",
                        marginRight: "5rem",
                        width: "100%",
                    }}
                >
                    <h1
                        style={{
                            textAlign: "center",
                            color: "#ffffff",
                            fontSize: 45,
                        }}
                    >
                        Hakkımızda
                    </h1>
                    <h2 style={{ color: "#ffffff" }}>
                        <b>Chain Masters</b> ekibi olarak bankacılık sektörünün
                        önemli bir eksiğini kapatmaya geldik. Merkeziyetsiz
                        finans teknolojisi hakkında uzmanlaşan ekibimiz ile
                        geliştirdiğimiz bu teknolojide çocuklarınıza kripto
                        cüzdan açabilecek, miras bırakabilecek ve onlar adına
                        yatırım yapabileceksiniz. Aynı zamanda 18 yaşına ulaşan
                        çocuğunuz istediği zaman kendi cüzdanını himayesi altına
                        alabilecek.
                    </h2>
                    <h2 style={{ color: "#ffffff" }}>
                        Dilerseniz, çocuğunuz 18 yaşına gelmeden hesaptaki
                        parayı çekebilirsiniz. Bu şekilde ihtiyaç halinde
                        paranıza istediğiniz zaman ulaşabileceksiniz.
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
