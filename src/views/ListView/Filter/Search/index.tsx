import React, { useState, useEffect } from 'react';
import { CloseOutlined, SearchOutlined } from '@ant-design/icons';
import { Button, Row, Col, Form, Input, Divider } from 'antd';
import axios from 'axios';
import styles from "./styles.module.scss";


const Search = ({ onSearch }: any) => {
  const [visible, setVisible] = useState(true);
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [gridData, setGridData] = useState([]);
  const[filterInput, setFilterInput] = useState("");
  const [form] = Form.useForm();

  const onClear = () => {
    form.resetFields();
  };

  // useEffect(() => {
  //   searchFetchData();
  // }, []);

  // const searchFetchData = async () => {
  //   setLoading(true);
  //   const res = await axios.post('http://localhost:5000/organisations/pagination', {limit:10,id:null});
  //   setGridData(res.data.organisations);
  //   setLoading(false);  
  // };
  
  // const onSearch = (rows: any[]) => {
  //   const columns = rows[0] && Object.keys(rows[0])
  //   return rows.filter(
  //     (row) => 
  //     columns.some(
  //       (column: string | number) => row[column].toString().indexOf(filterInput) > -1 
  //     )
  //     );
  // };



    return (
      <div>
        <Form className={styles.form} form={form} onFinish={onSearch} layout="horizontal">
          <Row gutter={16}>
            <Col span={4}>
              <Form.Item name="username" label="Name">
                <Input />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item name="ein" label="EIN">
                <Input />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item name="description" label="Description">
                <Input />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item name="mission" label="Mission">
                <Input />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item name="zip" label="ZIP">
                  <Input />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item name="state" label="State">
                <Input />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item name="city" label="City">
                <Input />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item name="street" label="Street">
                <Input />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item name="amount" label="Amount">
                <Input />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item name="website" label="Website">
                <Input />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item name="phone" label="Phone">
                <Input />
              </Form.Item>
            </Col>
          </Row>
        </Form>
        <Divider />
        <Row>
          <Col>
            <Button
              icon={<SearchOutlined />}
              htmlType="submit"
              className="ml-auto"
            >
              Search
            </Button>
            <Button icon={<CloseOutlined />} onClick={onClear} className="ml-10">
              Clear
            </Button>
          </Col>
        </Row>
      </div>
    )
}

export default Search;
