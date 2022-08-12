import {
    InfoCircleOutlined,
    HomeOutlined,
    MailOutlined,
    WalletOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import React from "react";

function getItem(label, key, icon, type) {
    return {
        key,
        icon,
        label,
        type,
    };
}

const items = [
    getItem("İLETİŞİM", "sub3", <MailOutlined />, []),
    getItem("ANASAYFA", "sub1", <HomeOutlined />, []),
    getItem("HAKKIMIZDA", "sub2", <InfoCircleOutlined />, []),
    getItem("WALLET CONNECT", "sub4", <WalletOutlined />, []),
];

const onClick = (e) => {
    console.log("click", e);
};

const MenuBar = () => (
    <div
        style={{
            display: "flex",
            alignItems: "center",
            marginLeft: "auto",
            marginRight: "auto",
        }}
    >
        <h2
            style={{
                marginLeft: 0,
                marginRight: "auto",
            }}
        >
            RetiredKid
        </h2>
        <Menu
            onClick={onClick}
            style={{
                marginLeft: "auto",
                marginRight: 0,
            }}
            mode="horizontal"
            items={items}
        />
    </div>
);
export default MenuBar;
