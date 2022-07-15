import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Button, Form, Input, Row, Col } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const Home: NextPage = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

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
              <Form.Item >
                <Button htmlType="submit"  type="primary">
                 Search
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </section>

      <section className="cryto-cards">

      </section>
    </div>
  );
};

export default Home;
