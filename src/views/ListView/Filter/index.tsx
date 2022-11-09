import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import styles from "./styles.module.scss";
import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Search from './Search';

const Filter = ({filterData} : any) =>{
    const [isOpen,setIsOpen] = useState(false);

    return (
      <div className={styles.collapsible}>
          <Button 
            type="primary" 
            shape="circle" 
            icon={<SearchOutlined />}
            onClick={() => setIsOpen(!isOpen)}
          ></Button>
          {isOpen && (
            <div className={styles.content}>
              {" "}
              <Search filterData={filterData} />{" "} 
            </div>
            )}
      </div>
    );
};

export default Filter;
