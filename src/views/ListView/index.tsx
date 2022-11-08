
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DetailView from 'views/DetailView';
import styles from "./styles.module.scss";
import axios from 'axios';
import DataTable from 'components/DataTable';
import { SyncOutlined } from '@ant-design/icons';
import { Button, Table } from 'antd';


type EditableTableProps = Parameters<typeof Table>[0];
type ColumnTypes = Exclude<EditableTableProps['columns'], undefined>;


const ListView: React.FC = () =>{
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [gridData, setGridData] = useState([]);
  const[query, setQuery] = useState("");


  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    const res = await axios.post('http://localhost:5000/organisations/pagination', {limit:10,id:null});
    setGridData(res.data.organisations);
    setLoading(false);  
  };

  const onSearch = (rows: any[]) => {
    const columns = rows[0] && Object.keys(rows[0])
    return rows.filter(
      (row) => 
      columns.some(
        (column: string | number) => row[column].toString().indexOf(query) > -1 
      )
      );
  };

  const columns = [
    {
        align: "center",
        title: "Name",
        dataIndex: "NAME",
        editTable: true
    },
    {
        title: "EIN",
        dataIndex: "EIN",
        align: "center",
        editTable: true
    },
    {
        title: "Description",
        dataIndex: "DESCRIPTION",
        align: "center",
        editTable: true
    },
    {
        title: "Mission",
        dataIndex: "MISSION",
        align: "center",
        editTable: true
    },
    {
        title: "State",
        dataIndex: "STATE",
        align: "center",
        editTable: true
    },
    {
        title: "City",
        dataIndex: "CITY",
        align: "center",
        editTable: true
    },
    {
        title: "Street",
        dataIndex: "STREET",
        align: "center",
        editTable: true
    },
    {
        title: "AssetAmount",
        dataIndex: "ASSETAMOUNT",
        align: "center",
        editTable: true
    },
    {
        title: "Website",
        dataIndex: "WEBSITE",
        align: "center",
        editTable: true
    },
    {
        title: "Zip",
        dataIndex: "ZIP",
        align: "center",
        editTable: true
    },
    {
        title: "Phone",
        dataIndex: "PHONE",
        align: "center",
        editTable: true
    },
    {
        title: "Email",
        dataIndex: "EMAIL",
        align: "center",
        editTable: true
    },
    {
      title: "Last Updated",
      dataIndex: "UPDATED",
      align: "center",
      editTable: true
    },
    {
      title: "Edit",
      dataIndex: "EDIT",
      align: "center",
      editTable: true
    }
    
  ];

  const onEdit = (row: any) => {
    console.log(row);
    // ({ url: `http://localhost:5000/organisations/pagination${id}` }.then(() => {
    //   message.success("editted successfully.");
    // }));
  };
  
  const actions = [
    {
      icon: <SyncOutlined />,
      text: "Edit",
      onClick: (x:any) => onEdit(x._id),
    },
  ];
    return (
      <div className="d-flex a-center mb-10">
        {/* <div className="ml-auto">
          <Link to='/detailview'> <Button> DetailView </Button></Link>
        </div>  */}
        <DataTable
          columns={columns as ColumnTypes}
          data={gridData}
          actions={actions}
          loading={loading}
          //rowKey = {}
        />
    </div>
  );
};
export default ListView;