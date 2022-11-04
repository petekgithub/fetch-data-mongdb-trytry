// ---------------------  LıSTVIEW PAGE AFTER SEARCHıNG FETCHING DATAS SEEN HERE -------------------

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import DetailView from 'views/DetailView';
import styles from "./styles.module.scss";
import Filter from './Filter';
import DataTable from 'components/DataTable';
import { Button } from 'antd';
import axios from 'axios';
import OrganisationsTable from 'components/OrganisationsTable';


const ListView: React.FC = () =>{
//   const navigate = useNavigate();
//   const [filter, setFilter] = useState({ limit: 0, offset: 0 });
//  // const { data, loading } = useGet({ url: 'user-api/subscriber/search', post: true, body: filter });
//  const [posts, setPosts] = useState([]);



  return (
    <div className="d-flex flex-column align-items-center">
      {/* <div className="d-flex a-center mb-10">
        <Filter />
      </div>
      <div className="ml-auto">
        <Link to='/detailview'> <Button> DetailView </Button></Link>
      </div> */}
        {/* <DataTable data={data} columns={columns} filter={filter} setFilter={setFilter} loading={loading} /> */}
        <OrganisationsTable />
      </div>
  ); 
};
export default ListView;