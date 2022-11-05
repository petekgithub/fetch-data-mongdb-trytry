import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Table } from "antd";

type EditableTableProps = Parameters<typeof Table>[0];
type ColumnTypes = Exclude<EditableTableProps['columns'], undefined>;

const DataTableVis = () => {

    const [gridData, setGridData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        setLoading(true);
        const res = await axios.post('http://localhost:5000/organisations/pagination', {limit:10,id:null});
        setGridData(res.data);
        setLoading(false);
    }

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

    return (
        <div>
            <Table 
                columns={columns as ColumnTypes}
                bordered
                loading={loading}
            />
        </div> 
    );
};

export default DataTableVis;
