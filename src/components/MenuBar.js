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
            {props.connect !== undefined && (
                <Button style={{ marginLeft: "1rem" }} onClick={props.connect}>
                    GİRİŞ YAP
                </Button>
            )}
            {props.typeChild && (
                <Button style={{ marginLeft: "1rem" }}>HESABIM</Button>
            )}
            {props.typeParent && (
                <Button style={{ marginLeft: "1rem" }}>ÇOCUKLAR</Button>
            )}
            {props.typeAdmin && (
                <Button style={{ marginLeft: "1rem" }}>PANEL</Button>
            )}
        </div>
    );
};
export default MenuBar;
