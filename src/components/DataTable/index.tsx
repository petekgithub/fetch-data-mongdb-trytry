

// ---------------------  PAGıNATıON -------------------

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from "./styles.module.scss";
import { MoreOutlined } from '@ant-design/icons';
import { Button, Dropdown, Table, Menu } from 'antd';


const DataTable: React.FC = ({columns}:any) =>{
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    // const [currentPage, setCurrentPage] = useState(1); // page1 to begin with
    // const [postsPerPage, setPostsPerPage] = useState(10); // per page

    // // useEffect runs when the component mounts and runs whenever updates, adding dependency array/empty brackets for prevent endless loop (now only run when mounts)
    // useEffect(() => {
    //     const fetchPosts = async () => {
    //         setLoading(true);  // process on fetching
    //        const res = await axios.post('http://localhost:5000/organisations/pagination', {limit:10,id:null});
    //         setPosts(res.data);
    //         setLoading(false);
    //     }

    //     fetchPosts();
    // }, []);

    // console.log(posts);

    //---------------------------------------------------------------
      // const fetchOrganisations = async (page:any, size = perPage) => {

  //   const response = await axios.post(
      //`http://localhost:5000/organisations?page=${page}&per_page=${size}&delay=1`,
  //     `http://localhost:5000/organisations/pagination`,
  //   
  //   setData(response.data.data);
  //   setTotalRows(response.data.total);
  //   setLoading(false);
  // };

  // useEffect(() => {
  //   fetchOrganisations(1);
  // }, [])
  

  // const handlePageChange = (page:any)=> {
  //   //fetchOrganisations(page);
  //   setCurrentPage(page);
  // }

  // const handlePerRowsChange = async (newPerPage:any, page:any)=> {
  //   //fetchOrganisations(page, newPerPage);
  //   setPerPage(newPerPage);
  // }

  //-------------------------------------------------------

    const pagination = {
        showSizeChanger: true,
        defaultPageSize: 20,
        showTotal: (total: any, [start, end]: any) => `Showing ${start} - ${end} of ${total}`,
      };

      
     
    return (
    <div className="DataTable">
        {/* <Table loading={loading} dataSource={data} rowKey={rowKey} size="middle" pagination={pagination}>
        {columns.map(x => (
            <Table.Column
            title={x.title}
            key={x.key}
            dataIndex={x.key}
            align={x.align}
            render={x.render}
            width={x.width}
            />
        ))}
        <Table.Column
            key="id"
            title="Actions"
            width={80}
            align="center"
            render={(_, x) => (
            <Dropdown trigger="click" overlay={
                <Menu>
                {actions && actions.map(y => (
                    <Menu.Item key={y.text}>
                    <Button block size="small" type="text" icon={y.icon} onClick={() => y.onClick(x)} className="text-left">
                        {y.text}
                    </Button>
                    </Menu.Item>
                ))}
                </Menu>
            }>
                <Button type="text" size="small" icon={<MoreOutlined />} />
            </Dropdown>
            )}
        />
        </Table> */}
    </div>
    );
};

export default DataTable;