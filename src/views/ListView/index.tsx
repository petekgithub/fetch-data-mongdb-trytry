// ---------------------  LıSTVIEW PAGE AFTER SEARCHıNG FETCHING DATAS SEEN HERE -------------------

import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import DetailView from 'views/DetailView';
import styles from "./styles.module.scss";
import Filter from './Filter';
import DataTable from 'components/DataTable';
import { Button } from 'antd';



const ListView: React.FC = () =>{
  const navigate = useNavigate();
  const [filter, setFilter] = useState({ limit: 0, offset: 0 });
 // const { data, loading } = useGet({ url: 'user-api/subscriber/search', post: true, body: filter });

  
  const columns = [
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
  ];


  return (
    <div className={styles.listview}>
      <div className="d-flex a-center mb-10">
        <Filter />
      </div>
      <div className="ml-auto">
        <Link to='/detailview'> <Button> DetailView </Button></Link>
      </div>
        {/* <DataTable data={data} columns={columns} filter={filter} setFilter={setFilter} loading={loading} /> */}
      </div>
  ); 
};
export default ListView;