import type { NextPage } from "next";
import React, { useState } from "react";
import { Button, Form, Input, Row, Col, Avatar, List } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import useCryptoApi from "../queries/useCrytoApi";
import Link from 'next/link'


const Home: NextPage = () => {
  const onFinish = (values: any) => {
     setSearch(values.name)      

  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };


  interface coinTypes {name: string; symbol: string; market_cap_rank:number; large:string; id:string}


  const [search, setSearch] = useState("");
  const { data: CryptoApi } = useCryptoApi(search);
  const coins : coinTypes[]= CryptoApi?.coins.splice(0,10) || [];
  const [form] = Form.useForm();

  return (
    <div className="">
      <section className="search-area pt-1">
        <Form name="normal_login" form={form}   onFinish={onFinish}
         onFinishFailed={onFinishFailed}>    
          <Row gutter={16}>
            <Col md={12}>
              <Form.Item
                name="name"
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
                  onChange= {(e)=>{
                    setSearch(e.target.value)      
                  }}
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
      <Row>
                  <Col md={24}>
                  <h2>CRYPTO SECTION</h2>
                  </Col>
                </Row>
        <List
          itemLayout="horizontal"
          dataSource={coins}
          renderItem={(item) => (
            <Link href={`/${item.id}`}>
            <List.Item className="border-non">
              <Col md={5}> {item.market_cap_rank}</Col>
              <Col md={2}>
                <Avatar src={item.large} />
              </Col>
              <Col md={5}>{item.symbol}</Col>
              <Col md={5}>{item.name}</Col>
            </List.Item>
            </Link>

          )}
        />
      </section>
    
    </div>
  );
};

export default Home;
