import type { NextPage } from "next";
import React, { useState } from "react";
import { Button, Form, Input, Row, Col, Avatar, List } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import useCryptoApi from "../queries/useCrytoApi";

const Home: NextPage = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const [search, setSearch] = useState("");
  const { data: CryptoApi } = useCryptoApi(search);
  const coins = CryptoApi ? CryptoApi.coins.splice(0, 10) : [];

  return (
    <div className="">
      <section className="search-area pt-1">
        <Form name="normal_login" initialValues={{ remember: true }}>
          <Row gutter={16}>
            <Col md={12}>
              <Form.Item
                name="fName"
                rules={[
                  {
                    required: true,
                    message: "Please input your cryto name!",
                  },
                ]}
              >
                <Input
                  prefix={<SearchOutlined />}
                  type="text"
                  placeholder="Search crypto here"
                />
              </Form.Item>
            </Col>

            <Col md={4}>
              <Form.Item>
                <Button htmlType="submit" type="primary">
                  Search
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </section>

      <section className="cryto-cards">
        <List
          itemLayout="horizontal"
          dataSource={coins}
          renderItem={(item: any) => (
            <List.Item className="border-non">
              <Col md={5}> {item.market_cap_rank}</Col>
              <Col md={2}>
                <Avatar src={item.large} />
              </Col>

              <Col md={5}>{item.symbol}</Col>
              <Col md={5}>{item.name}</Col>
            </List.Item>
          )}
        />
      </section>
    </div>
  );
};

export default Home;
