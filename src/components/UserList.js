import React, { useState, useEffect, useRef } from "react";
import { Avatar, List, Button, Skeleton, Card } from "antd";

let addrRef;

const copyAddress = () => {
    console.log(addrRef);
    const copyText = addrRef.current.outerText;
    navigator.clipboard.writeText(copyText);
};

const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;

const UserList = (props) => {
    const [initLoading, setInitLoading] = useState(true);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [list, setList] = useState([]);
    addrRef = useRef();

    useEffect(() => {
        fetch(fakeDataUrl)
            .then((res) => res.json())
            .then((res) => {
                setInitLoading(false);
                setData(res.results);
                setList(res.results);
            });
    }, []);

    const onLoadMore = () => {
        setLoading(true);
        setList(
            data.concat(
                [...new Array(count)].map(() => ({
                    loading: true,
                    name: {},
                    picture: {},
                    email: {},
                }))
            )
        );
        fetch(fakeDataUrl)
            .then((res) => res.json())
            .then((res) => {
                const newData = data.concat(res.results);
                setData(newData);
                setList(newData);
                setLoading(false);

                window.dispatchEvent(new Event("resize"));
            });
    };

    const loadMore =
        !initLoading && !loading ? (
            <div
                style={{
                    textAlign: "center",
                    marginTop: 12,
                    height: 32,
                    lineHeight: "32px",
                }}
            >
                <Button onClick={onLoadMore}>loading more</Button>
            </div>
        ) : null;

    return (
        <Card>
            <List
                className="demo-loadmore-list"
                loading={initLoading}
                itemLayout="horizontal"
                loadMore={loadMore}
                dataSource={list}
                renderItem={(item) => (
                    <List.Item
                        actions={[
                            <a
                                key="list-loadmore-edit"
                                href="https://ant.design"
                            >
                                edit
                            </a>,
                            <Button onClick={copyAddress}>copy</Button>,
                        ]}
                    >
                        <Skeleton
                            avatar
                            title={false}
                            loading={item.loading}
                            active
                        >
                            <List.Item.Meta
                                avatar={<Avatar src={item.picture.large} />}
                                title={
                                    <a href="https://ant.design">
                                        {item.name.first}
                                    </a>
                                }
                                description={item.email}
                            />
                            <div ref={addrRef}>{Math.random()}</div>
                        </Skeleton>
                    </List.Item>
                )}
            />
        </Card>
    );
};

export default UserList;
