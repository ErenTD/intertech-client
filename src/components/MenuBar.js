import { Menu, Button } from "antd";
import { useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { ContractContext } from "../contexts/ContractContext";

function getItem(label, key, icon, type) {
    return {
        key,
        icon,
        label,
        type,
    };
}

const items = [
    getItem("ANASAYFA", "sub1", null, []),
    getItem("HAKKIMIZDA", "sub2", null, []),
    getItem("İLETİŞİM", "sub3", null, []),
];

const MenuBar = (props) => {
    const { accountType, connect } = useContext(ContractContext);

    const navigate = useNavigate();

    const landingClickHandler = (e) => {
        props.onClick(e);
        navigate("/");
    };

    const childClickHandler = () => {
        props.onClick({ key: "sub4" });
        navigate("/child");
    };

    const parentClickHandler = () => {
        props.onClick({ key: "sub4" });
        navigate("/parent");
    };

    const adminClickHandler = () => {
        props.onClick({ key: "sub4" });
        navigate("/admin");
    };

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "auto",
                marginRight: "12%",
            }}
        >
            <Menu
                onClick={landingClickHandler}
                selectedKeys={[props.current]}
                style={{
                    marginLeft: "auto",
                    marginRight: 0,
                }}
                mode="horizontal"
                items={items}
            />
            {accountType === 0 && (
                <Button style={{ marginLeft: "1rem" }} onClick={connect}>
                    GİRİŞ YAP
                </Button>
            )}
            {accountType === 1 && (
                <Button
                    style={{ marginLeft: "1rem" }}
                    onClick={childClickHandler}
                >
                    HESABIM
                </Button>
            )}
            {accountType === 2 && (
                <Button
                    style={{ marginLeft: "1rem" }}
                    onClick={parentClickHandler}
                >
                    ÇOCUKLAR
                </Button>
            )}
            {accountType === 3 && (
                <Button
                    style={{ marginLeft: "1rem" }}
                    onClick={adminClickHandler}
                >
                    PANEL
                </Button>
            )}
        </div>
    );
};
export default MenuBar;
