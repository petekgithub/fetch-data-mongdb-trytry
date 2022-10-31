import React, { useState } from 'react';
import Filter from './Filter';
import styles from './style.module.scss';
import { Button } from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";
import SearchOutlined from '@ant-design/icons';

const ListView: React.FC = () => {


  return (
    <div className={styles.container}>
      <SearchOutlined style={{color:'red'}}/>
      {/* <Filter /> */}

      <Link to="/detailview"><Button className={styles.Btn}>DetailView</Button></Link>
    </div>
  );
};
export default ListView;

