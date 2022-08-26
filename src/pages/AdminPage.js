import ParentCard from "../components/ParentCard";
import Slider from "react-slick";
import React, { useContext } from "react";
import { ContractContext } from "../contexts/ContractContext";
import { Row, Col } from "antd";
import "../index.css";

const AdminPage = () => {
    const { ParentList } = useContext(ContractContext);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: ParentList.length < 3 ? ParentList.length : 3,
        slidesToScroll: 3,
    };

    return (
        <>
            <div
                style={{
                    marginLeft: "12%",
                    marginRight: "12%",
                    marginTop: "5rem",
                }}
            >
                <Slider {...settings}>
                    {ParentList.map((parent, index) => (
                        <div key={index}>
                            <ParentCard person={parent} buttons />
                        </div>
                    ))}
                </Slider>
            </div>
            <div>
                <br />
                <br />
                <br />
                <Row className="sparkboxes">
                    <Col span={4} offset={2}>
                        <div class="box box1">
                            <div class="details">
                                <h2>{ParentList.length}</h2>
                                <h2>Ebeveyn Sayısı</h2>
                            </div>
                        </div>
                    </Col>
                    <Col span={4}>
                        <div class="box box2">
                            <div class="details">
                                <h2>TODO</h2>
                                <h2>Çocuk Sayısı</h2>
                            </div>
                        </div>
                    </Col>
                    <Col span={4}>
                        <div class="box box3">
                            <div class="details">
                                <h2>TODO</h2>
                                <h2>Yatırılan Para</h2>
                            </div>
                        </div>
                    </Col>
                    <Col span={4}>
                        <div class="box box4">
                            <div class="details">
                                <h2>TODO</h2>
                                <h2>Yatırılan Ethereum</h2>
                            </div>
                        </div>
                    </Col>
                    <Col span={4}>
                        <div class="box box5">
                            <div class="details">
                                <h2>TODO</h2>
                                <h2>18 Yaşını Dolduran Çocuk</h2>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default AdminPage;
