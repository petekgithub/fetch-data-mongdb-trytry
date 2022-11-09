import React, { useState, useEffect } from 'react';
import { CloseOutlined, SearchOutlined } from '@ant-design/icons';
import { Button, Row, Col, Form, Input, Divider } from 'antd';
import axios from 'axios';
import styles from "./styles.module.scss";


const Search = ({ filterData }: any) => {
  const [visible, setVisible] = useState(true);
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [gridData, setGridData] = useState([]);
  const[filterInput, setFilterInput] = useState("");
  const [form] = Form.useForm();
  const [filters, setFilters] = useState(null);


  const onClear = () => {
    form.resetFields();
  };

    return (
      <div>
        <Form className={styles.form} form={form} onFinish={(values: any) => {
            console.log("Search Values: ", values)
            filterData(values) }} layout="horizontal">
          <Row gutter={16}>
            <Col span={4}>
              <Form.Item name="NAME" label="Name">
                <Input />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item name="EIN" label="EIN">
                <Input />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item name="DESCRIPTION" label="Description">
                <Input />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item name="MISSION" label="Mission">
                <Input />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item name="ZIP" label="ZIP">
                  <Input />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item name="STATE" label="State">
                <Input />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item name="CITY" label="City">
                <Input />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item name="STREET" label="Street">
                <Input />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item name="AMOUNT" label="Amount">
                <Input />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item name="WEBSITE" label="Website">
                <Input />
              </Form.Item>
            </Col>
            <Col span={4}>
              <Form.Item name="PHONE" label="Phone">
                <Input />
              </Form.Item>
            </Col>
          </Row>
        
        <Divider />
        <Row>
          <Col>
            <Button
              icon={<SearchOutlined />}
              htmlType="submit"
              className="ml-auto"
              //onClick={filterData}
            >
              Search
            </Button>
            <Button 
              icon={<CloseOutlined />} 
              onClick={onClear} 
              className="ml-10">
              Clear
            </Button>
          </Col>
        </Row>
        </Form>
      </div>
    )
}

export default Search;
