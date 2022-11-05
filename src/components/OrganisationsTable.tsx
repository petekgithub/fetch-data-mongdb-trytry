import DataTable from 'react-data-table-component';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OrganisationsTable = () => {

    //const [filter, setFilter] = useState({ limit: 0, offset: 0 });
   // const { data, loading } = useGet({ url: 'user-api/subscriber/search', post: true, body: filter });
   const [posts, setPosts] = useState([]);
   
    const onSearch = async () => {
        console.log("searching");
        try {
           const res = await axios.post('http://localhost:5000/organisations/pagination', {limit:10,id:null});
            setPosts(res.data);
          } catch(error) {
            console.log(error)
          }
      };
      
      useEffect(() => {
        onSearch();
      }, [])
       
        const columns = [
          { name: "Name", selector: (row: { name: string; }) => row.name },
          { name: "EIN", selector: (row: { ein: string; }) => row.ein }, 
          { name: "Description", selector: (row: { description: string; }) => row.description },
          { name: "Mission", selector: (row: { mission: string; }) => row.mission },
          { name: "State", selector: (row: { state: string; }) => row.state },
          { name: "City", selector: (row: { city: string; }) => row.city },
          { name: "Street", selector: (row: { street: string; }) => row.street },
          { name: "AssetAmount", selector: (row: { assetamount: string; }) => row.assetamount },
          { name: "Website", selector: (row: { website: string; }) => row.website },
          { name: "Zip", selector: (row: { zip: string; }) => row.zip },
          { name: "Phone", selector: (row: { phone: string; }) => row.phone },
          { name: "Email", selector: (row: { email: string; }) => row.email },
        ];
  return (
    <></>
    // <DataTable 
    //     columns={columns}
    //     data={posts} 
    // />
  )
}

export default OrganisationsTable;