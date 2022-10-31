import React, { useState, useEffect, useMemo } from 'react';
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from 'react-router';
import { SearchOutlined, SyncOutlined } from '@ant-design/icons';
import Filter from './Search';
import { message } from 'antd';
import DetailView from 'Screens/DetailView';
import axios from 'axios';
import DataTable from "react-data-table-component";
import { Button } from "@material-ui/core";




const ListView = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchOrganisations = async (page:any, size = perPage) => {

    setLoading(true);

    const response = await axios.get(
      `http://localhost:5000/organisation?page=${page}&per_page=${size}&delay=1`
    );
    setData(response.data.data);
    setTotalRows(response.data.total);
    setLoading(false);
  };

  useEffect(() => {
    fetchOrganisations(1);
  }, [])
  
  const columns = React.useMemo(
    () => [
    { Header: "Name", accessor: 'name' },
    { Header: "EIN", accessor: 'ein' }, 
    { Header: "Description", accessor: 'description' },
    { Header: "Mission", accessor: 'mission' },
    { Header: "State", accessor: 'state' },
    { Header: "City", accessor: 'city' },
    { Header: "Street", accessor: 'street' },
    { Header: "AssetAmount", accessor: 'assetamount' },
    { Header: "Website", accessor: 'website' },
    { Header: "Zip", accessor: 'zip' },
    { Header: "Phone", accessor: 'phone' },
    { Header: "Email", accessor: 'email' },
  ],
  []
  ) as any;

  const handlePageChange = (page:any)=> {
    fetchOrganisations(page);
    setCurrentPage(page);
  }

  const handlePerRowsChange = async (newPerPage:any, page:any)=> {
    fetchOrganisations(page, newPerPage);
    setPerPage(newPerPage);
  }


  return (
    <>
      {/* <Link to="/listview">
            <Button 
            className={styles.logInBtn} 
            // // isLoading={formik.isSubmitting}
            >
            Log In
            </Button>
          </Link> */}
    <DataTable
      title="Organisations"
      columns={columns}
      data={data}
      progressPending={loading}
      pagination
      paginationServer
      paginationTotalRows={totalRows}
      paginationDefaultPage={currentPage}
      onChangeRowsPerPage={handlePerRowsChange}
      onChangePage={handlePageChange}
      selectableRows
      onSelectedRowsChange={({ selectedRows }) => console.log(selectedRows)}
    />
    </>
    
  );
};
export default ListView;