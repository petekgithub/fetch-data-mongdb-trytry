
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import DataTable from 'components/DataTable';
import { SyncOutlined } from '@ant-design/icons';
import { Button, Table, Collapse } from 'antd';
import Search from './Filter/Search';
import Filter from './Filter';



type EditableTableProps = Parameters<typeof Table>[0];
type ColumnTypes = Exclude<EditableTableProps['columns'], undefined>;


const ListView: React.FC = () =>{
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  //const [gridData, setGridData] = useState([]);
  const [filters, setFilters] = useState(null);
  const[filterInput, setFilterInput] = useState("");

  const [gridData, setGridData] = useState<any[]>([]);


  useEffect(() => {
    loadData();
  }, [filters]);

  const loadData = async () => {
    console.log("filters:", filters);

    let filter = {} 
    if(filters) {
      filter = Object.keys(filters).reduce((acc: any, key:any) => {
        if(filters[key]) acc[key] = filters[key]
        return acc;
      }, {})
    }

    setLoading(true);
    const res = await axios.post('http://localhost:5000/organisations/pagination-filter', 
    {
      "data":  {
      "limit": 10,
      //"id": null,
      "filters": {},
      } 
    }, {
      "headers": {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoibWFobXV0IiwiaWF0IjoxNjY4MDMwODEzLCJleHAiOjE2NjgxMTcyMTN9.-yEpzTnzBLLi4CiHM_okiR2mTK8zq_sFHaN44TT6ZtY"
      }
    }
    );
    setGridData([...res.data.organisations]);
    setLoading(false);
  };


  // const filterData = (rows: any[]) => {
  //   console.log("filterData Function Called");
  //   console.log("rows",rows);
  //   const columns = rows[0] && Object.keys(rows[0])
  //   return rows.filter(
  //     (row) =>
  //     columns.some(
  //       (column: string | number) => row[column].toString().indexOf(gridData) > -1
  //     )
  //     );
  // };

  // console.log(gridData);

  const filterData = (values: any) => {
    // console.log("filterData Function Called");
    // console.log("rows",values);
    // const columns = Object.keys(values)

    // setGridData((prev) => {
    //   return prev.filter((item) => {
    //       return columns.some((col) => item[col] === values[col])
    //    })
    // })
    console.log("values: ", values);
  };

  console.log("GridData: ", gridData);

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
    },

  ];

  const onEdit = (row: any) => {
    console.log(row);
    navigate('/dataview');
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
        {/* <Collapse defaultActiveKey={["1"]}>
          <Panel header="filters" key="1">
            <Search
            // onSearch={setFilters}
            />
          </Panel>
        </Collapse> */}
        <Filter filterData={setFilters}/>
        <DataTable
          columns={columns}
          data={gridData}
          actions={actions}
          loading={loading}
          //rowKey = {}
        />
    </div>
  );
};
export default ListView;