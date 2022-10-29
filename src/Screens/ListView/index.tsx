import React, { useState } from 'react';
import Filter from './Filter';
import styles from './style.module.scss';
import { Button } from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";



const ListView: React.FC = () => {


  return (
    <div className={styles.container}>
      <div className="d-flex a-center mb-10">
        <div className="Title mr-20">
          ListView
        </div>
        <Filter />
        <Link to="/detailview"><Button className={styles.logInBtn}>DetailVİew</Button></Link>
      </div>
    </div>
  );
};
export default ListView;

