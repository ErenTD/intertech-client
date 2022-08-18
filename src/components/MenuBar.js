import { Menu, Button } from "antd";
import React, { useState } from "react";

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

const MenuBar = () => {
    const [current, setCurrent] = useState("sub1");

    const onClick = (e) => {
        // console.log("click", e);
        setCurrent(e.key);
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
                onClick={onClick}
                selectedKeys={[current]}
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
