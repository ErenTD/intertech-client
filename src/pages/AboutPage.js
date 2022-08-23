import React from "react";
import "antd/dist/antd.min.css";

const AboutPage = () => {
    return (
        <div style={{ marginLeft: "12%", marginRight: "12%" }}>
            <div
                style={{
                    marginTop: "5rem",
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
                    <h1 style={{ textAlign: "center" }}>Hakkımızda</h1>
                    <h3>
                    <b>Chain Masters</b> ekibi olarak bankacılık sektörünün 
                        önemli bir eksiğini kapatmaya geldik. Merkeziyetsiz 
                        finans teknolojisi hakkında uzmanlaşan ekibimiz ile 
                        geliştirdiğimiz bu teknolojide çocuklarınıza kripto 
                        cüzdan açabilecek, miras bırakabilecek ve onlar adına 
                        yatırım yapabileceksiniz. Aynı zamanda 18 yaşına ulaşan 
                        çocuğunuz istediği zaman kendi cüzdanını himayesi altına 
                        alabilecek.
                    </h3>
                    <h3>
                        Dilerseniz, çocuğunuz 18 yaşına gelmeden hesaptaki parayı çekebilirsiniz.
                        Bu şekilde ihtiyaç halinde paranıza istediğiniz zaman ulaşabileceksiniz.
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
