import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Button, Form, Input, Row, Col, Avatar, List } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const Home: NextPage = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const data = [
    {
      title: "Ant Design Title 1",
    },
    {
      title: "Ant Design Title 2",
    },
    {
      title: "Ant Design Title 3",
    },
    {
      title: "Ant Design Title 4",
    },
    {
      title: "Ant Design Title 4",
    },

    {
      title: "Ant Design Title 4",
    },
    {
      title: "Ant Design Title 4",
    },
    {
      title: "Ant Design Title 4",
    },
  ];

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
          dataSource={data}
          renderItem={(item) => (
            <List.Item className="border-non">
                <Col md={3}>
                  <Avatar src="https://joeschmoe.io/api/v1/random" />
                </Col>

                <Col md={10}>
                {item.title}
                </Col>


                <Col md={11}>
               <p>Ant Design, a design language for background applications, is refined by Ant UED Team</p>
                </Col>
       
            </List.Item>
          )}
        />
      </section>
    </div>
  );
};

export default Home;
