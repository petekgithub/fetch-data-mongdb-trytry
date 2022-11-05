
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DetailView from 'views/DetailView';
import styles from "./styles.module.scss";
import Filter from './Filter';
import axios from 'axios';
import DataTableVis from 'components/DataTableVis';
import { SearchOutlined, SyncOutlined } from '@ant-design/icons';
import { Button, Table } from 'antd';
import Content from './Filter/Content';



type EditableTableProps = Parameters<typeof Table>[0];
type ColumnTypes = Exclude<EditableTableProps['columns'], undefined>;


const ListView: React.FC = () =>{
  const [loading, setLoading] = useState(false);

 
  const columns = [
    {
        align: "center",
        title: "Name",
        dataIndex: "name",
        editTable: true
    },
    {
        title: "EIN",
        dataIndex: "ein",
        align: "center",
        editTable: true
    },
    {
        title: "Description",
        dataIndex: "description",
        align: "center",
        editTable: true
    },
    {
        title: "Mission",
        dataIndex: "mission",
        align: "center",
        editTable: true
    },
    {
        title: "State",
        dataIndex: "state",
        align: "center",
        editTable: true
    },
    {
        title: "City",
        dataIndex: "city",
        align: "center",
        editTable: true
    },
    {
        title: "Street",
        dataIndex: "street",
        align: "center",
        editTable: true
    },
    {
        title: "AssetAmount",
        dataIndex: "assetAmount",
        align: "center",
        editTable: true
    },
    {
        title: "Website",
        dataIndex: "website",
        align: "center",
        editTable: true
    },
    {
        title: "Zip",
        dataIndex: "zip",
        align: "center",
        editTable: true
    },
    {
        title: "Phone",
        dataIndex: "phone",
        align: "center",
        editTable: true
    },
    {
        title: "Email",
        dataIndex: "email",
        align: "center",
        editTable: true
    },
    
  ];

  const actions = [
    { icon: <SearchOutlined />, text: 'Detail', onClick: (x) => history.push(`/subscriber/${x._id}`) },
    { icon: <SyncOutlined />, text: 'Reset Answers', onClick: (x) => onReset(x._id) },
  ]

    return (
      <div className="d-flex a-center mb-10">
        <Filter />
        <div className="ml-auto">
          <Link to='/detailview'> <Button> DetailView </Button></Link>
        </div> 
        <DataTableVis  
          columns={columns as ColumnTypes}
          data={<Content />} 
          actions={actions} 
          loading={loading}
        />
      </div>
    ); 
};
export default ListView;