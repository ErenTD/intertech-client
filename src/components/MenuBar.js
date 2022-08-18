import { Menu, Button } from "antd";
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
    getItem("ANASAYFA", "sub1", null, []),
    getItem("HAKKIMIZDA", "sub2", null, []),
    getItem("İLETİŞİM", "sub3", null, []),
    getItem(<Button>GİRİŞ YAP</Button>, "sub4", null, []),
];

const MenuBar = (props) => {
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
                onClick={props.onClick}
                selectedKeys={[props.current]}
                style={{
                    marginLeft: "auto",
                    marginRight: 0,
                }}
                mode="horizontal"
                items={items}
            />
        </div>
    );
};
export default MenuBar;
