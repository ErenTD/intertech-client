import React from "react";
import { Row, Col, Avatar } from "antd";
import "antd/dist/antd.min.css";

import tasdemir from "../media/people/tasdemir.jpg";
import yurudur from "../media/people/yurudur.jpeg";
import ciftci from "../media/people/ciftci.jpeg";
import ozgur from "../media/people/ozgur.jpeg";
import aydin from "../media/people/aydin.jpeg";
import mert from "../media/people/mert.jpeg";
import savran from "../media/people/savran.png";
import kopuz from "../media/people/kopuz.jpeg";
import soydemir from "../media/people/soydemir.jpeg";
import karaarslan from "../media/people/karaarslan.jpg";
import coskuner from "../media/people/coskuner.jpeg";

const AboutPage = () => {
    return (
        <div style={{ marginLeft: "12%", marginRight: "12%" }}>
            <div
                style={{
                    marginTop: "3rem",
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center",
                }}
            >
                <div
                    style={{
                        width: "100%",
                        textAlign: "center",
                    }}
                >
                    <h1
                        style={{
                            color: "#ffffff",
                            fontSize: 45,
                        }}
                    >
                        Hakkımızda
                    </h1>
                    <h1
                        style={{
                            color: "#ffffff",
                        }}
                    >
                        ChainMasters
                    </h1>
                    <br />
                    <Row justify="center" align="middle">
                        <Col span={6}>
                            <Avatar
                                size={150}
                                icon={<img src={karaarslan} alt="" />}
                            />
                            <h3 style={{ color: "#ffffff" }}>Product Owner</h3>
                            <h5 style={{ color: "#ffffff" }}>
                                Murat Karaarslan
                            </h5>
                        </Col>
                        <Col span={6}>
                            <Avatar
                                size={150}
                                icon={<img src={savran} alt="" />}
                            />
                            <h3 style={{ color: "#ffffff" }}>Agile Koç</h3>
                            <h5 style={{ color: "#ffffff" }}>Birsen Savran</h5>
                        </Col>
                    </Row>
                    <br />
                    <br />
                    <br />
                    <Row justify="center" align="middle">
                        <Col span={6}>
                            <Avatar
                                size={150}
                                icon={<img src={tasdemir} alt="" />}
                            />
                            <h3 style={{ color: "#ffffff" }}>
                                Frontend Developer
                            </h3>
                            <h5 style={{ color: "#ffffff" }}>Eren Taşdemir</h5>
                        </Col>
                        <Col span={6}>
                            <Avatar
                                size={150}
                                icon={<img src={mert} alt="" />}
                            />
                            <h3 style={{ color: "#ffffff" }}>
                                Frontend Developer
                            </h3>
                            <h5 style={{ color: "#ffffff" }}>
                                Ezgi Başak Mert
                            </h5>
                        </Col>
                        <Col span={6}>
                            <Avatar
                                size={150}
                                icon={<img src={aydin} alt="" />}
                            />
                            <h3 style={{ color: "#ffffff" }}>
                                Frontend Developer
                            </h3>
                            <h5 style={{ color: "#ffffff" }}>Ramazan Aydın</h5>
                        </Col>
                    </Row>
                    <br />
                    <br />
                    <br />
                    <Row justify="center" align="middle">
                        <Col span={6}>
                            <Avatar
                                size={150}
                                icon={<img src={yurudur} alt="" />}
                            />
                            <h3 style={{ color: "#ffffff" }}>
                                Blockchain Developer
                            </h3>
                            <h5 style={{ color: "#ffffff" }}>
                                M. Berkay Yürüdür
                            </h5>
                        </Col>
                        <Col span={6}>
                            <Avatar
                                size={150}
                                icon={<img src={soydemir} alt="" />}
                            />
                            <h3 style={{ color: "#ffffff" }}>
                                Blockchain Developer
                            </h3>
                            <h5 style={{ color: "#ffffff" }}>
                                H. Berkay Soydemir
                            </h5>
                        </Col>
                        <Col span={6}>
                            <Avatar
                                size={150}
                                icon={<img src={coskuner} alt="" />}
                            />
                            <h3 style={{ color: "#ffffff" }}>
                                Blockchain Developer
                            </h3>
                            <h5 style={{ color: "#ffffff" }}>Mert Coşkuner</h5>
                        </Col>
                    </Row>
                    <br />
                    <br />
                    <br />
                    <Row justify="center" align="middle">
                        <Col span={6}>
                            <Avatar
                                size={150}
                                icon={<img src={ciftci} alt="" />}
                            />
                            <h3 style={{ color: "#ffffff" }}>İş Analisti</h3>
                            <h5 style={{ color: "#ffffff" }}>
                                Ömer Faruk Çiftçi
                            </h5>
                        </Col>
                        <Col span={6}>
                            <Avatar
                                size={150}
                                icon={<img src={kopuz} alt="" />}
                            />
                            <h3 style={{ color: "#ffffff" }}>İş Analisti</h3>
                            <h5 style={{ color: "#ffffff" }}>Beyza Kopuz</h5>
                        </Col>
                        <Col span={6}>
                            <Avatar
                                size={150}
                                icon={<img src={ozgur} alt="" />}
                            />
                            <h3 style={{ color: "#ffffff" }}>İş Analisti</h3>
                            <h5 style={{ color: "#ffffff" }}>Berk Özgür</h5>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
