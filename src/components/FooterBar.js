import { Layout } from "antd";
import {
    TwitterOutlined,
    InstagramOutlined,
    LinkedinOutlined,
} from "@ant-design/icons";
import TeamLogo from "../media/logo.svg";

const { Footer } = Layout;

const FooterBar = () => {
    return (
        <Footer
            style={{
                marginTop: "5rem",
                backgroundImage: "linear-gradient(#74B9FF,#d9d4d3)",
                color: "#003C96",
            }}
        >
            <div
                style={{
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    color: " #003C96",
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "auto",
                    marginRight: "auto",
                }}
            >
                <img src={TeamLogo} style={{ marginLeft: "12%" }} alt="Logo" />
                <h3 style={{ margin: "auto" }}>
                    2022 Chain Masters. All Rights Reserved.
                </h3>
                <div style={{ marginRight: "12%" }}>
                    <TwitterOutlined
                        style={{
                            width: "3em",
                            fontSize: "30px",
                            color: "#40a9ff",
                        }}
                    />
                    <LinkedinOutlined
                        style={{
                            width: "3em",
                            fontSize: "30px",
                            color: "#096dd9",
                        }}
                    />
                    <InstagramOutlined
                        style={{
                            width: "3em",
                            fontSize: "30px",
                            color: "#ff85c0",
                        }}
                    />
                </div>
            </div>
        </Footer>
    );
};

export default FooterBar;
