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

const MenuBar = () => {
    const { accountType, connect, current, setCurrent } =
        useContext(ContractContext);

    const navigate = useNavigate();

    const landingClickHandler = (e) => {
        setCurrent(e.key);
        navigate("/");
    };

    const childClickHandler = () => {
        setCurrent("sub4");
        navigate("/child");
    };

    const parentClickHandler = () => {
        setCurrent("sub4");
        navigate("/parent");
    };

    const adminClickHandler = () => {
        setCurrent("sub4");
        navigate("/owner");
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
                selectedKeys={[current]}
                style={{
                    marginLeft: "auto",
                    marginRight: 0,
                    backgroundColor: "rgba(0, 0, 0, 0)",
                }}
                mode="horizontal"
                items={items}
                theme="dark"
            />
            {accountType === 0 && (
                <Button
                    style={{
                        marginLeft: "1rem",
                        backgroundImage: "linear-gradient(#ffffff,#ffffff)",
                        color: "#003C96",
                        borderRadius: 10,
                    }}
                    onClick={connect}
                >
                    GİRİŞ YAP
                </Button>
            )}
            {accountType === 1 && (
                <Button
                    style={{
                        marginLeft: "1rem",
                        backgroundImage: "linear-gradient(#ffffff,#ffffff)",
                        color: "#003C96",
                        borderRadius: 10,
                    }}
                    onClick={childClickHandler}
                >
                    HESABIM
                </Button>
            )}
            {accountType === 2 && (
                <Button
                    style={{
                        marginLeft: "1rem",
                        backgroundImage: "linear-gradient(#ffffff,#ffffff)",
                        color: "#003C96",
                        borderRadius: 10,
                    }}
                    onClick={parentClickHandler}
                >
                    ÇOCUKLAR
                </Button>
            )}
            {accountType === 3 && (
                <Button
                    style={{
                        marginLeft: "1rem",
                        backgroundImage: "linear-gradient(#ffffff,#ffffff)",
                        color: "#003C96",
                        borderRadius: 10,
                    }}
                    onClick={adminClickHandler}
                >
                    PANEL
                </Button>
            )}
        </div>
    );
};
export default MenuBar;
