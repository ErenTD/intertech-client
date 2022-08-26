import InfoCard from "../components/InfoCard";
import AddChild from "../components/AddChild";
import { Button } from "antd";
import Slider from "react-slick";
import React, { useState, useContext } from "react";
import { ContractContext } from "../contexts/ContractContext";

const ParentPage = () => {
    const { ChildList } = useContext(ContractContext);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: ChildList.length < 3 ? ChildList.length : 3,
        slidesToScroll: 3,
    };

    const interact = () => {
        setIsModalVisible(true);
    };

    return (
        <>
            <div
                style={{
                    marginLeft: "12%",
                    marginRight: "12%",
                    marginTop: "1rem",
                    display: "flex",
                    justifyContent: `${
                        ChildList.length === 0 ? "center" : "right"
                    }`,
                }}
            >
                <Button
                    onClick={interact}
                    style={{
                        backgroundImage: "linear-gradient(#ffffff,#ffffff)",
                        color: "#003C96",
                        borderRadius: 10,
                    }}
                >
                    ÇOCUK EKLE
                </Button>
            </div>
            <AddChild
                isModalVisible={isModalVisible}
                setIsModalVisible={setIsModalVisible}
            />
            {ChildList.length === 0 && (
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <h1 style={{ color: "#ffffff" }}>Hiç çocuk eklemediniz.</h1>
                </div>
            )}
            <div
                style={{
                    marginLeft: "12%",
                    marginRight: "12%",
                    marginTop: "5rem",
                }}
            >
                <Slider {...settings}>
                    {ChildList.map((child, index) => {
                        return (
                            <div key={index}>
                                <InfoCard person={child} buttons />
                            </div>
                        );
                    })}
                </Slider>
            </div>
        </>
    );
};
export default ParentPage;
