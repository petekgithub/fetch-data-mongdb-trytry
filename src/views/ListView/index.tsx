
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DetailView from 'views/DetailView';
import styles from "./styles.module.scss";
import Filter from './Filter';
import axios from 'axios';
import DataTable from 'components/DataTable';
import { SyncOutlined } from '@ant-design/icons';
import { Button, Table } from 'antd';
import { message } from 'antd';



type EditableTableProps = Parameters<typeof Table>[0];
type ColumnTypes = Exclude<EditableTableProps['columns'], undefined>;


const ListView: React.FC = () =>{
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
 
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
    {
      title: "Status",
      dataIndex: "status",
      align: "center",
      editTable: true
    }
    
  ];

  const onReset = (id: any) => {
      ({ url: `http://localhost:5000/organisations/pagination${id}`}).then(() => {
      message.success("Subscriber answers resetted successfully.");
    });
  };
  
  const actions = [
    { icon: <SyncOutlined />, text: 'Reset Answers', onClick: (x) => onReset(x._id) },
  ]

    return (
      <div className="d-flex a-center mb-10">
        <Filter />
        <div className="ml-auto">
          <Link to='/detailview'> <Button> DetailView </Button></Link>
        </div> 
        <DataTable 
          columns={columns as ColumnTypes}
          data={<Filter />} 
          actions={actions} 
          loading={loading}
        />
      </div>
    ); 
};
export default ListView;