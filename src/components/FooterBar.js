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
        <Footer style={{ marginTop: "5rem", position: "fixed",
        padding: "10px 10px 0px 10px",
        bottom: "0",
        width: "100%",
        marginBottom:"2rem"
}}>
            <div
                style={{
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
                        style={{ width: "3em", fontSize: "30px" }}
                    />
                    <LinkedinOutlined
                        style={{ width: "3em", fontSize: "30px" }}
                    />
                    <InstagramOutlined
                        style={{ width: "3em", fontSize: "30px" }}
                    />
                </div>
            </div>
        </Footer>
    );
};

export default FooterBar;
