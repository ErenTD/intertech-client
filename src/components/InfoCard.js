import { Avatar, Card, Progress } from "antd";
import React from "react";

const InfoCard = () => (
    <Card
        style={{
            width: 300,
        }}
        cover={
            <div
                style={{
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginLeft: "auto",
                    marginRight: "auto",
                }}
            >
                <Avatar
                    style={{
                        marginLeft: "auto",
                        marginRight: "auto",
                        marginTop: "10%",
                    }}
                    size={125}
                    src="https://joeschmoe.io/api/v1/random"
                />
            </div>
        }
    >
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                textAlign: "center",
            }}
        >
            <h1 marginBottom="75%">Ahmet</h1>
            <p>bla bla bla</p>
            <p>bla bla bla</p>
            <Progress percent={65} showInfo={false} />
            <p>
                Ahmet'in 18 yaşına gelmesine bu günden itibaren 7 yıl 24 gün
                var. Ahmet'in yatırımlarını yukarıdaki özet tablosunda
                görebilirsiniz.
            </p>
        </div>
    </Card>
);

export default InfoCard;
