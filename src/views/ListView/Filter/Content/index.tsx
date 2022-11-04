
// ---------------------  SEARCH AND FETCH RELATED DATA  -------------------

import React, { useState, useEffect } from 'react';
import { CloseOutlined, SearchOutlined } from '@ant-design/icons';
import { Select, Button, Row, Col, Form, Input, Divider, InputNumber } from 'antd';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Edit from 'views/DetailView/Edit';


const Content = () => {
  const [visible, setVisible] = useState(true);
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);


  const onSearch = () => {
    console.log("searching");
    
    useEffect(() => {
      const fetchOrganizationDatas = async () => {                                        
          setLoading(true);  // process on fetching
          const res = await axios.get('http://localhost:5000/organisations');
          setPosts(res.data);
          setLoading(false);
      }

      fetchOrganizationDatas();
    }, []);

  };

  console.log(posts);

  const onClear = () => {
    console.log("clearing");
  };

    return (
      <div>
        <Form >
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item name="username" label="Name">
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="ein" label="EIN">
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="description" label="Description">
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="mission" label="Mission">
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="zip" label="ZIP">
                  <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="state" label="State">
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="city" label="City">
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="street" label="Street">
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="amount" label="Amount">
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="website" label="Website">
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="phone" label="Phone">
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="status" label="Status">
                <Link to="/edit"><Edit /></Link> 
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="lastupdated" label="LastUpdated">
                <Input />
              </Form.Item>
            </Col>
          </Row>
        </Form>
        <Divider />
        <div className="d-flex">
          {visible ?
              <>
                  <Button icon={<SearchOutlined />} onClick={onSearch} className="ml-auto">
                      Search
                  </Button>
                  <Button icon={<CloseOutlined />} onClick={onClear} className="ml-10">
                      Clear
                  </Button>
              </>
              :
              <>
                  
              </>
          }
        </div>
      </div>
    )
}

export default Content;
