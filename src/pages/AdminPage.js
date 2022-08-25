import ParentCard from "../components/ParentCard";
import Slider from "react-slick";
import React, { useContext } from "react";
import { ContractContext } from "../contexts/ContractContext";

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
            <div
                style={{
                    marginLeft: "30%",
                    marginRight: "30%",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    textAlign: "center",
                }}
            >
                <br />
                <br />
                <h1>Toplam</h1>
                <br />
                <table style={{ textAlign: "left" }}>
                    <thead>
                        <tr style={{ textDecoration: "underline" }}>
                            <th>Ebeveyn Sayısı</th>
                            <th>Çocuk Sayısı</th>
                            <th>Yatırılan Para</th>
                            <th>Yatırılan Ethereum</th>
                            <th>18 Yaşını Dolduran Çocuk Sayısı</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{ParentList.length}</td>
                            <td>TODO</td>
                            <td>TODO</td>
                            <td>TODO</td>
                            <td>TODO</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default AdminPage;
